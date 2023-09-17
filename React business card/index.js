App
import React from 'react'
import Intro from './intro.js'
import Quiz from './quiz.js'
export default function App(){
const [isReady, useIsReady] = React.useState(false)
const [quiz, setQuiz] = React.useState([])


function ClickBtn(){
useIsReady(oldValue => !oldValue)
}   

React.useEffect(function(){
fetch(`https://opentdb.com/api.php?amount=5`)
.then(res=> res.json())
.then(data=> setQuiz({...data.results}) )    
},[])



return (
<main>    
{!isReady ? <Intro addClick={ClickBtn}/>: 
<form>
<Quiz quiz = {quiz[0]}/>      
<Quiz quiz = {quiz[1]}/>      
<Quiz quiz = {quiz[2]}/>      
<Quiz quiz = {quiz[3]}/>      
<Quiz quiz = {quiz[4]}/>
<button>Submit</button>
</form>      
 } 
</main>  
)    
}

<html>
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400&family=Source+Sans+Pro:wght@200&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div id="root"></div>
        <script src="index.pack.js"></script>
    </body>
                </html>


* {
    box-sizing: border-box;
}
body{
margin: 0;
font-family: 'Inter', sans-serif;
font-family: 'Source Sans Pro', sans-serif;   
background-color: #F5F7FB; 
}

.intro-container{
display: flex;
width: 100vw;
height: 100vh;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #F5F7FB
}

.intro-container h1{
font-weight: 700;
font: 'Inter';
text-align: center;
color: #293264;    
}

.intro-container p{
ont-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
text-align: center;
color: #293264;    
}

.intro-container button{
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
text-align: center;
color: #F5F7FB;
background: #4D5B9E;
border-radius: 15px;
padding: 1rem 2rem;
cursor: pointer
}

.quiz-container{
display: flex;
justify-content: space-around;
align-items: center;  
}

.question-Box{
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 1rem;
line-height: 12px;
text-align: center;
color: #293264;
background-color: #F5F7FB;
border-radius: 15px;
padding: 1rem 1.5rem;
margin: 0 10px;
cursor: pointer
}

                index
import React from "react"
import ReactDOM from "react-dom"
import App from './App.js'


                ReactDOM.render(<App />, document.getElementById("root"))

import React from 'react'

export default function Intro(props){
return (
<main className='intro-container'>
<h1>Quizzical</h1> 
<p>The greatest quiz game</p> 
<button className='btn' onClick={props.addClick}>Click me</button>
</main>     
)    
}

                quiz 
import React from 'react'

export default function Quiz(props){
const answer = props.quiz.correct_answer
const allQuestions = props.quiz.incorrect_answers
allQuestions.unshift(answer)
let randomIndex = Math.ceil(Math.random()*allQuestions.length)

function shuffle(array) {
  let currentIndex = array.length
  let randomIndex
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
const questionElement=shuffle(allQuestions).map(function(num, index){
return <div className='question-Box' key={index}>{num}</div>
})

return (
 <div className='quiz-component'>   
<h4 className='questions'>{props.quiz.question}</h4>
<section className='quiz-container'>
{questionElement}
</section>
</div>    
)    }