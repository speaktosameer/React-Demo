import { React,Component } from "react";
import Hero from './Hero';



class Herolist extends Component{
    
        constructor(){
            super();
            this.state={
                name:"What is This??"
            }
        }
            changeStatus(){
                this.setState({
                    name:"Social Media Platform for Sharing your Ideas Views and connecting with new people."
                })
            }
            
            render(){
        return(
            <div>
            <h1 className="tc">{this.state.name}</h1>
   <Hero id="1" pic="https://play-lh.googleusercontent.com/h9jWMwqb-h9hjP4THqrJ50eIwPekjv7QPmTpA85gFQ10PjV02CoGAcYLLptqd19Sa1iJ"
   name="Instagram" works="Pic App"/>
  <Hero id="2" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPGjZ2oispdostefPotXpliY1pW0ia6uyrOSljPj4Q0Gs298VZifO-WAxVVlAmuB9f104&usqp=CAU"
   name="Facebook" works="News App"/>
  <Hero id="3" pic="data:image/png;base64,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"
   name="Whatsapp" works="Chat App"/>
  <Hero id="4" pic="https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/twitter-logo.png.twimg.768.png"
   name="Twitter" works="Global News App"/>
  <Hero id="5" pic="https://media.istockphoto.com/vectors/white-paper-plane-on-blue-background-vector-illustration-vector-id951164518?k=6&m=951164518&s=612x612&w=0&h=B5iL-BZ2k2DTjzBv7GD_zQ2-GOdiftjaiOaAD-hUESE="
   name="Telegram" works="Chat App"/>
   <button className="btn" onClick={() => this.changeStatus()}>Click Me</button>
   </div>
        );
    }
}
export default Herolist;