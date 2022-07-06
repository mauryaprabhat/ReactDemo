import React, {useRef} from "react";

// export const Card = (props)=>{
//     const helloWorld = ()=>{
//         console.log('hello world');
//         alert('hello world');
//     }
//     return <><div onClick={helloWorld}>Tada has props {props.name} <br/> </div></>
// }   

export const Card =({name}) => {
    // useEffect(()=>{
    //     //alert('code fromt he use effect, we are here');
    //    // console.log(name);
    // },[name])
    const changeStyle=() =>{
        console.log(divRef.current.style.color='Red');
    }
    const divRef = useRef();
    return <div ref={divRef} onClick={changeStyle}> I am  a {name}</div>;
}