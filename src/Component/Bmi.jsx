import React, { useState } from 'react'
import './Bmi.css'

const Bmi = () => {
    const[height,setHeight]=useState("")
    const[weight,setWeight]=useState("")
    const[bmi,setBmi]=useState("null")
    const[status,setStatus]=useState("")
    const[error,setError]=useState("")
    const calculateBmi=()=>{
        const isvalidHeight=/^\d+$/.test(height)
        const isvalidWeight=/^\d+$/.test(weight)
        if (isvalidHeight&&isvalidWeight ) {
            const heightInMeter=height/100
            const bmivalue=weight/(heightInMeter*heightInMeter)
            setBmi(bmivalue.toFixed(2))
            if (bmivalue<18.5) {
                setStatus("underweight")
            }
             else if (bmivalue>=18.5&& bmivalue<24.9) {
                setStatus("normal weight")
            }
             else if (bmivalue>=25 && bmivalue <29.9) {
                setStatus("overweight")
            }
            else{
                setStatus("obese")
            }
            setError("")
        }
        else{
            setBmi(null)
            setStatus("")
            setError("plese enter height & weight")
        }
    }
    const clearall=()=>{
        setBmi(null)
        setStatus("")  
        setHeight("")
        setHeight("")
    }   
    
  return (
    <>
    <div className='bmi-calculator'>
        <div className='box'></div>
        <div className='data'>
            <h1>BMI CACULATOR</h1>
            {error && <p className='error' >{error}</p>}
            <div className='input-container'>
               <label htmlFor="height">Height (cm):</label>
               <input type="text" id='height' value={height} onChange={(e)=>setHeight(e.target.value)}/>
            </div>
            <div className='input-container'>
               <label htmlFor="weight">Weight (kg):</label>
               <input type="text" id='weight' value={weight}onChange={(e)=>setWeight(e.target.value)}/>
            </div>
            <button onClick={calculateBmi}>Calculate BMI</button>
            <button onClick={clearall}>clear</button>
            {bmi !==null && (
                <div className='result'>
                <p>Your BMI is:{bmi}</p>
                <p>status:{status}</p>``
             </div>
            )}

        </div>
    </div>
    </>
  )
}

export default Bmi