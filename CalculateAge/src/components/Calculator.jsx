import { useState } from "react";
import './Calculator.css';
function Calculator(){
    const [dob, setseDob] = useState("");
    const [error, setError] = useState("");
    const [ageResult, setAgeResult] = useState(null);
    const calculateAge = () =>{
        if(!dob){
            setError('Please select your Date of birth!.');
            setAgeResult('');
            return;

        }
        let today = new Date();
        let birthdate = new Date(dob);

        if(birthdate  > today){
            setError("Birthdate Can't be in the future!.");
            setAgeResult('');
            return;
        }
        let years = today.getFullYear() - birthdate.getFullYear();
        let months = today.getMonth() - birthdate.getMonth();
        let days = today.getDate() - birthdate.getDate();

        if(days < 0){ //borrow last month
            months--;
            const prevMonth = new Date(today.getFullYear(),today.getMonth(),0);
            days += prevMonth.getDate();
        }

        if(months < 0){
            years--;
            months += 12;
        }
        setError('');
        setAgeResult(`You are ${years} years, ${months} months, ${days} days old!.`);

        setTimeout(()=>{
            return setAgeResult('');
        },5000);
    }
    return(
        <>
        <div className="container">
            <h2>Age Calculator</h2>
        <label>
            Enter/Select the birthdate : 
        </label>
        <br></br>
        <input type="date"
            value={dob}
            className="input-date"
            onChange={(e)=> setseDob(e.target.value)}

        />
        <br></br>
        <button className="cal-Age" onClick={calculateAge}>calculate Age</button>

        
        {error && <p>{error}</p>}
        {ageResult && <p>{ageResult}</p>}
        </div>
        </>
    )
}

export default Calculator;