import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';

class Card extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: 'Name',
      phoneNumber: 'Phone Number',
      email: 'E-mail',
      linkedin: 'LinkedIn'
      };
      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleChangePhoneNumber = this.handleChangePhoneNumber.bind(this);
      this.handleChangeEmail = this.handleChangeEmail.bind(this);
      this.handleChangelinkedin = this.handleChangelinkedin.bind(this);
  }

  handleChangeName(event){
    this.setState({
      name: event.target.value
    })
  }

   handleChangePhoneNumber(event){
    this.setState({
      phoneNumber: event.target.value
    })
  }

  handleChangeEmail(event){
    this.setState({
      email: event.target.value
    })
  }

  handleChangelinkedin(event){
    this.setState({
      linkedin: event.target.value
    })
  }



render(){
  return(
    <div className = "container">
    
    
    <form>
    <div className="box">
    <h1>Business Card</h1>

    
    <input
    className = 'name'
    placeHolder = {this.state.name}
    type = 'text'
    onChange = {this.handleChangeName}
    />
       
    <input
    className = 'phone'
    placeHolder = {this.state.phoneNumber}
    type = 'text'
    onChange = {this.handleChangePhoneNumber}
    />

    <input
    className = 'eMail'
    placeHolder = {this.state.email}
    type = 'text'
    onChange = {this.handleChangeEmail}
    />

    <input
    className = 'webSite'
    placeHolder = {this.state.linkedin}
    type = 'text'
    onChange = {this.handleChangelinkedin}
    />

    </div>
   </form>

   <div className = "cardDiv">
    <div className = "card">
      <hr />
      <p className = "cardPhoneNumber">{this.state.phoneNumber}</p>
      <hr />
      <p className = "cardEmail">{this.state.email}</p>
      <p className = "cardWebsite">{this.state.linkedin}</p>
    </div>
  </div>
</div>
    
    
    
  );
}
}

render(<Card />, document.getElementById('root'));
