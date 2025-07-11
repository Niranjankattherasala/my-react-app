import React,{useState} from "react";



function ColorPicker(){
    const[color,setColor]=useState("#ffff");
    function handleColorChange(event){
    setColor(event.target.value);
}
    
    return(<div>
        <h1>Color Picker</h1>
         <div className="color-display" style={{backgroundColor:color}}>
            <p>selected color: {color}</p>
        </div>
         <label>select one color:</label>
         <input type="color" value={color} onChange={handleColorChange} />
         
         
    </div>)
}
export default ColorPicker
