function Button(){

   // const handleClick=()=>console.log("hi");
   let count=0;
    
    const handleClick1=(name)=>{
        if(count<3){
        console.log(`${name} you clicking me ${count} times`);
        count++;

        }
        else{
             console.log(`${name} stop clicking me`);
             
        }
       }
       
    return (<button onClick={()=>handleClick1("Niranjan")}>Click me</button>);


}
export default  Button