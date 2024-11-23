import { useState } from "react";
function Counter(){
    const [Counter, SetCounter] = useState(15);
    let [msgz, setMsgz] = useState("");
  const Addvalue = () =>{
    SetCounter(Counter + 1);
    if(Counter>=20){
      SetCounter(20);
      msg();
    }
  }
  const Subvalue = () =>{
    SetCounter(Counter - 1);
    if(Counter<=0){
      SetCounter(0);
      msg();
    }
      
  }
  const msg = () => {
     msgz = "Counter should be between 0 and 20";
     setMsgz(msgz);
     setTimeout(()=>{
        setMsgz("");
     },2000);
  }
    return(
    <>
        <h1 className="text-3xl font-bold underline">
      Hello world!</h1>
        <h2>Counter value = {Counter}</h2>
        <button onClick={Addvalue}>Add value</button>
        <button onClick={Subvalue}>Sub value</button>
        <p>{msgz}</p>
      </>
      )
}

export default Counter;