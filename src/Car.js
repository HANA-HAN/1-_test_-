import React from"react";
class Car extends React.Component{
    constructor(props){
    super(props);
    this.state={
        brand:"FOrd",
        model:"Mustang",
        color:"red",
        year:1964
    }; 
 }
 changeColor =()=>{
    this.setState({color:"blue"});
 }
 render(){
    return(
        <div>
            <h1>My {this.state.brand}</h1>
            <p>
                It is a {this.state.color} <span></span>
                {this.state.model} <span></span>
                from {this.state.year}
            </p>
            <button
                type="button"
                onClick={this.changeColor}>
                change Color
            </button>
        </div>
    );
 }
}
export default Car;