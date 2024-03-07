import React, {useState} from "react";
import Child from "../child/child";
import Context from "../Context/Context";
import Thembutton from "../Context/Thembutton";
import { Button} from "reactstrap";
import {useSelector, useDispatch} from 'react-redux';
import {increment} from '../Redux/Action'
function Parent() {
    var Pdata = 'Hello World';
    const [themify, setThemify] = useState('Light');
    const sign_in = () => {
        setThemify ((Themestring) => Themestring === 'Light'? 'Dark': 'Light')
    }
    const count = useSelector((state) => state)
    const dispatch = useDispatch();
    return (
        <>
        <Context.Provider value= {themify}>
            <Button onClick={sign_in}>Danger</Button>
            <Thembutton/>
        </Context.Provider>
        <h1 className="h1_tag">{Pdata}</h1>
            <Child Cdata = {Pdata} />
        <p>count: {count}Lorem Ipus</p>
        <Button onClick={()=>dispatch(increment())}></Button>
        </>
    );
}
export default Parent;