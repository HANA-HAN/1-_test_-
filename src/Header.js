import React from "react";
class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={favoritecolor:"red"};
    }
    static getDerovedStateFromProps(props,state){
        return {favoritecolor: props.favcol};
    }
    changeColor=()=>{
        this.setState({favoritecolor:"blue"});
    }
    
    render(){
        return(
           <div>
            <h1>My favorite color is {this.state.favoritecolor}</h1>
            <button type="button" onClick={this.changeColor}>Change color</button>
           </div>
        );
    }
}
export default Header;