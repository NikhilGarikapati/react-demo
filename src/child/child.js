import React, {useState, useCallback} from "react";

const Parent = () =>

{
    const [count, setCount] = useState(0);
    const counttype = useCallback(()=>{
        setCount((inc) => inc+1)
    },[])
    // console.log(scard)
    return(
        <>
        {/* {

            scard.a === 'a'?'active': scard.i === 'i'?'inactive':'delete'
        } */}
        count = {count}
        <Child counttype = {counttype}/>
        </>
    )
}
function Child({counttype}){
    console.log('Success');
    return(
        <button onClick={counttype}>Submit</button>
   
        )

}
export default Parent;