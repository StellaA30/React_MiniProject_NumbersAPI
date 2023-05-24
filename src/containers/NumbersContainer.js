import { useState } from "react";
import FactForm from "../components/FactForm";
import RandomFactForm from "../components/RandomFactForm";

const NumbersContainer = () => {

    const [random, setRandom] = useState('');
    const [mathFact, setMathFact] = useState('');
    const [triviaFact, setTriviaFact] = useState('');
    const [yearFact, setYearFact] = useState('');
    

// multiple options randoms
const fetchRandomByType = async (optionType) => {
    const response = await fetch(`http://numbersapi.com/random/${optionType}/?json`);
    const jsonData = await response.json();
    setRandom(jsonData.text);   
}


     
// maths fact
const fetchMathFact = async (number) =>{
    const response = await fetch(`http://numbersapi.com/${number}/math/?json`);
    const jsonData = await response.json();
    setMathFact(jsonData.text);
}


// trivia fact

const fetchTriviaFact = async (number) =>{
    const response = await fetch(`http://numbersapi.com/${number}/trivia/?json`);
        const jsonData = await response.json();
        setTriviaFact(jsonData.text);
}

// year fact

const fetchYearFact = async (year) =>{
    const response = await fetch(`http://numbersapi.com/${year}/year/?json`);
        const jsonData = await response.json();
        setYearFact(jsonData.text);
}


    return ( 
        <>
            <h1> Numbers API!</h1>
            <p>An API for interesting facts about numbers, dates, years, etc.</p>
            
            <div className="card-list">
                <div className="card">
                    <h2>Random facts!</h2>
                    <RandomFactForm random={random} fetchRandomByType={fetchRandomByType}/>
                </div>

                <div className="card">
                    <h2>Maths facts</h2>
                    <FactForm placeholder="enter a number" typeOfFact={mathFact} fetchFact={fetchMathFact}/>
                </div>

                <div className="card">
                    <h2>Trivia facts</h2>
                    <FactForm placeholder="enter a number" typeOfFact={triviaFact} fetchFact={fetchTriviaFact}/>
                </div>

                <div className="card">
                    <h2>Year facts</h2>
                    <FactForm placeholder="enter any year" typeOfFact={yearFact} fetchFact={fetchYearFact}/>
                </div>
              
            </div>
            
        
        </>
     );
}
 
export default NumbersContainer;