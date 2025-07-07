import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick=() =>{
      console.log("UpperCase is clicked");
      setText(text.toUpperCase());
    }         //for Upper Case

    const handleLoClick=() =>{
        console.log("LowerCase is clicked");
        setText(text.toLowerCase());
    }         //for Lower Case
    
    const handleClClick=() =>{
        console.log("Text Clear");
        setText(' ');
    }         //To clear Text

    const handleOnChange = (e) => {
        setText(e.target.value);
    };

  return (
    <>
    <div style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
       <div className="mb-3">
       <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" style={{backgroundColor:props.mode==='dark'?'#ffffff0D':'white',color:props.mode==='dark'?'white':'black'}} rows="10"></textarea>
       </div>
       <button className="btn btn-success mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
       <button className="btn btn-success mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
       <button className="btn btn-success mx-1" onClick={handleClClick}>Clear Text</button>
    </div>

    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}} >
        <h2>Your Text Summary</h2>
        <p>{text.length} characters and {text.split(" ").length} words</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
