import React from 'react';


class Button extends React.Component{
  constructor(){
     super();
     this.state= {clicked: true}
  }
  
  render(){
     return <div className='dropdown' id='dropdownClick' onClick= {() => this.setState({clicked: !this.state.clicked})}>
     {
        this.state.clicked? '⬇️ Click For More Details' : '⬆️ Click To Collapse'
     }
     </div>
  } 
}

export default Button;
