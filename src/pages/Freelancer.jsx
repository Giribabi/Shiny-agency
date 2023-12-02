import Card from '../components/Card/index'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { Loader } from '../utils/loader'

/*const freelancerProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
        picture: profile,
    },
    {
        name: 'John Doe',
        jobTitle: 'Frontend developer',
        picture: profile,
    },
    {
        name: 'Jean Bug',
        jobTitle: 'Fullstack Developer',
        picture: profile,
    },
]
*/

const CardsContainer = styled.div`
    display: grid;
    gap: 50px;
    grid-template: repeat(1,1fr)/repeat(3,1fr);
`

function Freelancers() {
    const [freelancersList,setFreelancersList] = useState([])
    const [error,setError]= useState(false)
    const [isDataLoading, setDataLoading] = useState(false)
    useEffect(()=>{
        async function fetchFreelancers(){
            setDataLoading(true)
            try{
                const response = await fetch('http://localhost:8000/freelances')
                const {freelancersList} = await response.json()
                console.log(freelancersList)
                setFreelancersList(freelancersList)
            }
            catch(err)
            {
                console.log(err)
                setError(true);
            }
            finally{
                setDataLoading(false)
            }
        }
        fetchFreelancers();
    },[])
    if(error){
        return <span>Error in loading profiles</span>
    }
    return (
        <div>
            <h1>FreeLancers 👩‍🎓👨‍🎓🧑‍🎓</h1>
            {
            isDataLoading
            ?
            <Loader/>
            :
            <CardsContainer>
            {freelancersList.map((profile, index) => (
            <Card
              key={`${profile.name}-${index}`}
              label={profile.job}
              title={profile.name}
              picture={profile.picture}
            />
          ))}
            </CardsContainer>
            }
        </div>
    )
}
export default Freelancers
