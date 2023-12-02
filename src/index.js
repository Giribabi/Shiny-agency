import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header/index'
import Error from './components/Error/index'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Result from './pages/Result'
import Freelancers from './pages/Freelancer'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import GlobalStyle from './utils/style/GlobalStyle'
import { ThemeProvider,SurveyProvider } from './utils/context'
import Footer from './components/Footer/index'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Router>
            <ThemeProvider>
            <SurveyProvider>
                <GlobalStyle/>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/survey/:questionNumber" element={<Survey />} />
                <Route path="/results" element={<Result />} />
                <Route path="/freelancers" element={<Freelancers />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer/>
            </SurveyProvider>
            </ThemeProvider>
        </Router>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
