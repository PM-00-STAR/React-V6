import React,{useState} from 'react'

export default function (props) {
    const [text, setText] = useState("Hook used");
   // text="hello"//wrong way to set text
   // setText("hello")//correct way to set text
   const handleUpClick = () =>{
      // console.log("uppercase was clicked" + text); //whole text can be accessed
       let newText =  text.toUpperCase(); //anotherevent
       setText(newText)  //setting set
   }
   const handleLowClick = () =>{
    // console.log("uppercase was clicked" + text); //whole text can be accessed
     let newText =  text.toLowerCase(); //anotherevent
     setText(newText)  //setting set
 }
   const handleOnChange = (event) =>{   //event handling
    // console.log("on change");
    setText(event.target.value); //now you can type
}
  return (
      <>
    <div className='container '>
   <h1>{props.heading}</h1>
<div className="mb-3">
<label for="myBox" className="form-label">Example textarea</label>
<textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
    </div>
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>hello girl u have typed {text.length} characters and {text.split(" ").length} words</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>

    </>
  )
}
