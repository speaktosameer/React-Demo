import { React,Component } from "react";
import "./style.css";

class Demo extends Component{
    render(){
        return(
            <div>
                <h1 className="classComp">Class Component Example-</h1>
                <p>Class Component uses render and return value 
                and at last export</p>
                <br/>
                <p>We can call the props in class by this.props.attributename</p>
                <p>My name is {this.props.name}</p>
            </div>

        );
    }
}

export default Demo;