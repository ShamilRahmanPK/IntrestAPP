import { TextField,Stack,Button } from '@mui/material'
import './App.css'
import { useState } from "react";

function App() {

  const [intrest, setIntrest] = useState(0)
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)

  const [invalidPrinciple,setinvalidPrinciple] = useState(false)
  const [invalidRate,setinvalidRate] = useState(false)
  const [invalidYear,setinvalidYear] = useState(false)


  const validateInput = (inputTag)=>{
    console.log(typeof inputTag);
    const {name,value} = inputTag
    console.log(name,value);
    if (name=="principle") {
      setPrinciple(value)
      if (!!value.match(/^\d*\.?\d+$/)) {
        setinvalidPrinciple(false)
      } else {
        setinvalidPrinciple(true)
      }
    }

    if (name=="rate") {
      setRate(value)
      if (!!value.match(/^\d*\.?\d+$/)) {
        setinvalidRate(false)
      } else {
        setinvalidRate(true)
      }
    }

    if (name=="year") {
      setYear(value)
      if (!!value.match(/^\d*\.?\d+$/)) {
        setinvalidYear(false)
      } else {
        setinvalidYear(true)
      }
    }
    
  }

  const handleCalculate = (e)=>{
    e.preventDefault()
    if (principle && rate && year) {
      setIntrest(principle*rate*year/100)
    } else {
      alert("Please fill the form completely!!")
    }
  }

  const handleReset = ()=>{
    setIntrest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setinvalidPrinciple(false)
    setinvalidRate(false)
    setinvalidYear(false)
    }

  return (
    <div style={{width:'100%',minHeight:'100vh'}} className='d-flex justify-content-center align-items-center bg-dark'>
      <div style={{width:'600px'}} className='bg-light rounded p-5'>
      <h3>Simple Interest APP</h3>
      <p>Calculate your simple intrest Easily!</p>
      <div className='bg-warning p-3 text-light text-center rounded'>
        <h1>₹{intrest}</h1>
        <p className="fw-bolder">Total Simple Intrest</p>
      </div>
      <form className='mt-3'>
      <div className="mb-3">
        {/* principle */}
      <TextField value={principle || ""} name='principle' onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-principle" label="Principle Amount" variant="outlined" />
      </div>
      {/* invaid principle */}
      {invalidPrinciple && <div className="mb-3 text-danger fw-bolder">
        Invalid Principle Amount!!
      </div>}
      {/* rate of intrest */}
      <div className="mb-3">
      <TextField value={rate || ""} name='rate' onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-rate" label="Rate of Intrest (%)" variant="outlined" />
      </div>
      {invalidRate && <div className="mb-3 text-danger fw-bolder">
        Invalid Rate!!
      </div>}
      {/* Time period */}
      <div className="mb-3">
      <TextField value={year || ""} name='year' onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-year" label="Time Period (Yr)" variant="outlined" />
      </div>
      {invalidYear && <div className="mb-3 text-danger fw-bolder">
        Invalid Year
      </div>}
      <Stack direction="row" spacing={2}>
      <Button type='submit' disabled={invalidPrinciple || invalidRate || invalidYear} onClick={handleCalculate} variant="contained" style={{width:'50%',height:'70px'}} className='bg-dark'>CALCULATE</Button>
      <Button onClick={handleReset} variant="outlined" style={{width:'50%',height:'70px'}} className='border border-dark text-dark'>RESET</Button>
      </Stack>
      </form>
      </div>
    </div>
  )
}

export default App
