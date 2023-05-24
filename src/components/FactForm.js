import { useState } from "react";

const FactForm = ({placeholder, typeOfFact, fetchFact}) => {

    const [number, setNumber] = useState("");

    const handleInputChange = (event) => {
        setNumber(event.target.value);
    }

    const handleFact = (event) => {
        event.preventDefault();
        fetchFact(number);
    };


    return ( 
        <>
      
        <form onSubmit={handleFact}>
            <input
            type="text"
            name="number"
            value={number}
            placeholder={placeholder}
            onChange={handleInputChange}/>

            <input type="submit" value="Get fact" />
        </form>

        <p>{typeOfFact}</p>
        </>
    
       
     );
}
 
export default FactForm;