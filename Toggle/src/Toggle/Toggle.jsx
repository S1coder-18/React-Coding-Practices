import { useState } from "react"
import './Toggle.css';
import sachin_image from '../assets/Sachin.jpeg'
export const Toggle = () =>{
    const [toggle, setToggle] = useState(false);

    const handleToggle = () =>{
        setToggle(!toggle);
    }

    return(
        <>
        <div className="toggle">
            
            <button onClick={handleToggle}>{toggle ? 'Hide Text' : 'Show Text'}</button>
            {
                toggle ? (
                    <div className="text">HI, Sachin You are smart, You cant achieve anything!.</div>
                ) : ( <img src={sachin_image} alt="Image" />

                )
            }
        </div>
        </>
    )
}