import React from "react";
import { Component } from "react";
import './App.scss';

class Calculator extends Component{
  constructor(props){
    super(props)

    this.state = {
      input:'',
      output:'',
      history:'',
      operator:'',
      result:0
    }
  };

  handleClick = (event)=>{
    if(this.state.operator=="="){
      this.setState({history:'',input:'',operator:''})
    }
    this.setState((prevState)=>{
      if(prevState.input>0){
        return {input:prevState.input+event.target.value, history:prevState.history + event.target.value, operator:''}
      }else{
        return {input:event.target.value, history:prevState.history + event.target.value, operator:''}
      }
    })
  };
handleAdd = (event)=>{
  if(this.state.operator=="="){
    this.setState({history:this.state.input,result:''})
  };
  this.setState((prevState)=>{
    if(this.state.operator==''|| this.state.operator=='='
    ){
    const result= Number(prevState.result) + Number(this.state.input)
    return {result:result, operator:event.target.value,history: prevState.history + event.target.value,input:''}
  }
  })
  
}


handleEquals= ()=>{
  this.setState((prevState)=>{
    let result = 0 
    if(prevState.input !=''&& prevState.operator!='='){
     result = Number(prevState.result)+Number(prevState.input)
    return {history:prevState.history+'='+result, operator:'=',input:result}
  }
  })
}

  render(){
    
    return(
      <div className="calculator">
        <div id="history">
          <p>
          {this.state.history}
        {console.log(this.state)}
          </p>
        </div>
        <div id="display">
      <p>
        {this.state.input}
      </p>
        </div>

        <div className="buttonsContainer">
<button id="clear">AC</button>
<button onClick={this.handleOperation} value={'/'} id="divide">/</button>
<button onClick={this.handleOperation} value={'*'} id="multiply">X</button>
<button onClick={this.handleClick} value={7} id="seven">7</button>
<button onClick={this.handleClick} value={8} id="eight">8</button>
<button onClick={this.handleClick} value={9} id="nine">9</button>
<button onClick={this.handleOperation} value={'-'} id="subtract">-</button>
<button onClick={this.handleClick} value={4} id="four">4</button>
<button onClick={this.handleClick} value={5} id="five">5</button>
<button onClick={this.handleClick} value={6} id="six">6</button>
<button  onClick={this.handleAdd} value={'+'} id="add">+</button>
<button onClick={this.handleClick} value={1} id="one">1</button>
<button onClick={this.handleClick} value={2} id="two">2</button>
<button onClick={this.handleClick} value={3} id="three">3</button>
<button onClick={this.handleClick} value={0} id="zero">0</button>
<button id="decimal">.</button>
<button onClick={this.handleEquals} id="equals">=</button>
        </div>
        <p>{this.state.history }</p>
        <p>{this.state.result }</p>
       {/*  <p>{this.state.operator }</p>
        <p>{this.state.input  }</p> */}
      </div>
    )
};
};


export default Calculator;