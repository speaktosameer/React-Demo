import { Component, React } from "react";
import './style.css';
import './Herolist';
import 'tachyons';

class Hero extends Component{
    render(){
        return(
            <div className="mini ma4  dib pa2 bg-light-blue grow shadow-4">
                <img src={this.props.pic}
                alt={this.props.name} title={this.props.name}/>
                <p className="header">{this.props.name}</p>
                <p className="desc">{this.props.works}</p>
            </div>
        );
    }
}

export default Hero;