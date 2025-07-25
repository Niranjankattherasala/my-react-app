import React,{useState} from "react";

function MyComponent(){
    const [name,setName]=useState("Guest");
    const [quantity,setQuantity]=useState("");
    const [comment,setComment]=useState();
    const [payment,setPayment]=useState();
    const [shipping,setShipping]=useState();

    function handleNameChange(event){
        setName(event.target.value);
    }
    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }
    function handleCommentChange(event){
        setComment(event.target.value);
    }
    function handlePaymentChange(event){
         setPayment(event.target.value);
    }
    function handleShippingChange(event){
        setShipping(event.target.value);
    }
    return(<div>
        <input value={name} onChange={handleNameChange}/>
        <p>Name:{name}</p>
        <input value={quantity} onChange={handleQuantityChange} type="number"/>
        <p>Quantity:{quantity}</p>
        <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions"/>
        <p>Comment:{comment}</p>
        <select value={payment} onChange={handlePaymentChange} >
            <option value="">Select an option</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Sbicard">SbiCard</option>

        </select>
        <p>Payment:{payment}</p>
        <label><br></br>
            <input type="radio" value="pick up"
            checked={shipping==="pick up"}
            onChange={handleShippingChange}/>
            Pick Up
        </label>
        <label>
             <input type="radio" value="delivery"
            checked={shipping==="delivery"}
            onChange={handleShippingChange}/>
            Delivery
        </label>
        <p>Shipping:{shipping}</p>
    </div>)
}
export default MyComponent