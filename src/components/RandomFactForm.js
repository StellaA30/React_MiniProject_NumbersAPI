import { useState } from "react";

const RandomFactForm = ({random, fetchRandomByType}) => {

    const [optionType, setOptionType] = useState("");
  
   

    const handleOptionChange = (event) => {
        setOptionType(event.target.value);
    }
    



    const handleClick = (event) => {
        event.preventDefault();

        if(optionType){
            fetchRandomByType(optionType);
    }
}
    


    // const handleClick = (event) => {
    //     event.preventDefault();
    //     fetchRandomTrivia()}; 


    return ( 
        <>  
            <select defaultValue="random-type" onChange={handleOptionChange}>
                <option disabled-value="random-type"> Choose random type</option>
                <option value="trivia">Trivia</option>
                <option value="year">Year</option>
                <option value="math">Maths</option>
                <option value="date">Date</option>
            </select>

            <button onClick={handleClick}> Get random fact </button>
            <p>{random}</p>


         
    
        </>
     );
}
 
export default RandomFactForm;