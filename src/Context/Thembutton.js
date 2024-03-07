import React, {useContext} from "react";
import { Button } from "reactstrap";
import Context from "./Context";
function Thembutton() {
    const Theme = useContext(Context);
    return(
    <Button style={{background: Theme === 'Dark'? '#333': '#fff', color: Theme === 'Dark'? '#fff': '#333'}}>Light</Button>
    );
}
export default Thembutton;