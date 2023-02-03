import React, { Component } from 'react'

export default class Hero extends Component {
    constructor(props){
        super(props);
        console.log("hero");
        console.log(props);
        if (props.name == "joker") {
            throw new Error("i  am not joker you are chombu");
        }
    }
  render() {
     return <div className='hero'>i am super hero</div>;
    
  }
}
