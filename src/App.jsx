import React, { useState } from 'react'

const App = () => {
  const [inp,setInput]=useState("")
  const [imageLink,setImageLink]=useState("")
const GenerateQR=()=>{
    setImageLink(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inp}`)
}
  return (
    <div className='container'>
      <p>Enter your text or URL</p>
        <input value={inp} onChange={(e)=>setInput(e.target.value)} type="text" placeholder="Text or URL" id="qrText"/>
        <div id="imgBox" style={{marginLeft:"90px"}}>
            <img src={imageLink} alt="" id="qrImage"/>
        </div>
        <button onClick={GenerateQR}>Generate QR code</button>
    </div>
  )
}

export default App
