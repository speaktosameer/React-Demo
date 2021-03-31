import { React } from "react";
import "./style.css";

function App (props){
    return(
        <div>
            <h1 className="funComp">Function Component</h1>
            <p>Function Component only uses return and always use div</p>
            <br/>
            <p>We can call the props by wriitnig the props in function argument</p>
            <p>and then call as props.attributeName</p>
            <p>at final use export</p>
            <p>My gender is {props.gender}</p>
            <p>We can also call the function in new way</p>
            <code>
              <code> const Fun = (props) = > {}</code> 
            </code>
        </div>
    )
}

export default App;