import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {UC,LC,NC,SC} from './data/passChar'

function App() {
  let [Ucase,setUcase]=useState(false)
  let [Lcase,setLcase]=useState(false)
  let [nums,setnums]=useState(false)
  let [symbols,setsymbols]=useState(false)
  let [passwordlength,setpasswordlength]=useState(8)
  let [fpass,setfpass]=useState('')
  let [show,setshow]=useState(false)
  const [copied, setCopied] = useState(false)

  let createPassword=()=>{
    let finalPass=""
    let Charset=""
    if(Ucase || Lcase || nums || symbols)
    {
      
      if(Ucase) Charset+=UC;
      if(Lcase) Charset+=LC;
      if(nums) Charset+=NC;
      if(symbols) Charset+=SC;

      for(let i=0;i<passwordlength;i++){
        finalPass+=Charset.charAt(Math.floor(Math.random()*Charset.length))
      }
      setfpass(finalPass)
      setshow(true)
      setTimeout(() => setshow(false), 2000);
    }
    else{
      alert("Please select atleast once option...")
    }
  }

  let copypass=()=>{
    navigator.clipboard.writeText(fpass).then(()=>{
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
     // reset after 2 sec
    });
  }

 

  return (
    <>
    <div className="passwordBox">
      <h2>Password Generator</h2>

      <div className='passwordBoxIn'>
        <input type='text' value={fpass}readOnly/>
      
      <button onClick={copypass}>Copy</button>
      {copied && (
        <div style={{
          position: 'absolute',
          top: '-20px',
          left: '300px',
          backgroundColor: '#000',
          color: '#fff',
          padding: '2px 6px',
          borderRadius: '4px',
          fontSize: '12px'
        }}>
          Copied!
        </div>
      )}
      </div>
     

      <div className="passlength">
        <label>Password Length</label>
        <input type="number" max={20} min={8} value={passwordlength} onChange={(e)=>setpasswordlength(e.target.value)}/>
      </div>

      <div className="passlength">
        <label>Include uppercase letters</label>
        <input type="checkbox" checked={Ucase} onChange={()=>setUcase(!Ucase)}/>
      </div>

      <div className="passlength">
        <label>Include lowercase letters</label>
        <input type="checkbox" checked={Lcase} onChange={()=>setLcase(!Lcase)}/>
      </div>

      <div className="passlength">
        <label>Include numbers</label>
        <input type="checkbox" checked={nums} onChange={()=>setnums(!nums)}/>
      </div>

      <div className="passlength">
        <label>Include symbols</label>
        <input type="checkbox" checked={symbols} onChange={()=>setsymbols(!symbols)}/>
      </div>

      <button className='sbtn' onClick={createPassword}>Generate Password</button>
      <div className={`m ${show? 'display' : ''}`} ><h3>Password Generated</h3></div>

    
      {/* <button onClick={handleCopy}>Copy</button>
      {copied && (
        <div style={{
          position: 'absolute',
          top: '-20px',
          left: '0',
          backgroundColor: '#000',
          color: '#fff',
          padding: '2px 6px',
          borderRadius: '4px',
          fontSize: '12px'
        }}>
          Copied!
        </div>
      )} */}
    </div>
    </>
  );
}

export default App;
