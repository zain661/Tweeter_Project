import React, { Component } from "react";
class Soluation extends Component{
    render(){
    const numberOfLettersUser = 5
    this.arr = []
        for(let i = 0 ; i < {numberOfLettersUser} ; i++) 
             this.arr.push('_')
            
        
        
        
        return <span>{this.arr.map(a => <div>a</div>)}</span> 
    }
}

export default Soluation