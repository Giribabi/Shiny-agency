import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Loader } from '../../utils/loader'
import { SurveyContext } from '../../utils/context'
import colors from '../../utils/style/colors'
import { useContext } from 'react'

const StyledSurvey = styled.div`
    background-color: lightgrey;
    text-align: center;
    padding: 5%;
    width: 40%;
    margin: auto;
    &:hover {
        box-shadow: 3px 2px grey;
    }
`
const QuestionContent = styled.div`
    padding: 8%;
    font-weight: 600;
    font-size: 110%;
`
const StyledLink = styled(Link)`
    padding: 15px;
    color: white;
    text-decoration: none;
    font-size: 18px;
    margin: 12%;
    border-radius: 15%;
    background-color: ${colors.primary};
    &:hover {
        box-shadow: 3px 2px #5843e4;
    }
`

const ReplyBox = styled.button`
  padding: 2%;
  border-radius: 1em;
  margin: 2%;
`

const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3%;
`
function Survey() {
    const { questionNumber } = useParams()
    const currQuestionNumber = parseInt(questionNumber)
    const nextQuestionNumber = currQuestionNumber + 1
    const prevQuestionNumber =
        currQuestionNumber === 1 ? 1 : currQuestionNumber - 1
    const [isDataLoading, setDataLoading] = useState(false)
    const [surveyData, setSurveyData] = useState({})
    const [error, setError] = useState(null)
    const { saveAnswers, } = useContext(SurveyContext)

    /* removed this because you were not able to modify the answers array using this
    function saveReply(answer) {
        saveAnswers({ [questionNumber]: answer })
      }
      */
    
    useEffect(() => {
        async function fetchSurvey() {
            setDataLoading(true)
            try {
                const response = await fetch('http://localhost:8000/survey')
                //this part of the course and practical execution took so much time and energy
                //even a small parenthesis makes so much sense
                const { surveyData } = await response.json()
                console.log(surveyData)
                setSurveyData(surveyData)
            } catch (err) {
                console.log(err)
                setError(true)
            } finally {
                setDataLoading(false)
            }
        }
        fetchSurvey()
    }, [])

    if (error) {
        return <span>There is an error</span>
    }

    return (
        <StyledSurvey>
            <h2>Survey✌️</h2>
            <h2>Question number: {currQuestionNumber}</h2>
            {isDataLoading ? (
                <Loader />
            ) : (
                <QuestionContent>
                    {surveyData[currQuestionNumber]}
                </QuestionContent>
            )}
             {(
        <ReplyWrapper>
          <ReplyBox 
          onClick={()=>saveAnswers({ [questionNumber]: true })}>
            Yes
          </ReplyBox>
          <ReplyBox 
          onClick={()=>saveAnswers({ [questionNumber]: false })}>
            No
          </ReplyBox>
        </ReplyWrapper>
      )}
            <StyledLink to={`/survey/${prevQuestionNumber}`}>Back</StyledLink>
            {surveyData[currQuestionNumber + 1] ? (
                <StyledLink to={`/survey/${nextQuestionNumber}`}>
                    Next
                </StyledLink>
            ) : (
                <StyledLink to="/results">Results</StyledLink>
            )}
        </StyledSurvey>
    )
}
export default Survey
