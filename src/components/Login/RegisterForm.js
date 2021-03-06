import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {TextField, DatePicker, SelectField, MenuItem, RaisedButton, Dialog, FlatButton } from 'material-ui';
import $ from 'jquery';


import route from './../../utils/route';
import request from './../../utils/request';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname:'',
      lastname:'',
      email:'',
      password:'',
      gender:'Male',
      dob: new Date(),
      firstnameError:'',
      lastnameError:'',
      emailError:'',
      passwordError:'',
      open:false,
    }
  }
  handleChange(e) {
    var name = e.target.name;
    var value = e.target.value;
    this.setState({[name]:value});
  }
  handleChangeGender(e, i, v) {
    this.setState({gender:v})
  }
  handleDateChange(e, v) {
    this.setState({dob:v})
  }
  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
    window.location = '/'
  };
  handleSubmit(e) {
    e.preventDefault();
    this.setState({firstnameError:'',lastnameError:'',emailError:'',passwordError:'',errors: false})
    var state = this.state;
    var errors = false;
    if(state.firstname.length < 3 || state.firstname.length > 10) this.setState({firstnameError:"Firstname should have of 3-10 characters."}), errors=true;
    if(state.lastname.length < 3 || state.firstname.length > 10) this.setState({lastnameError:"Lastname should have of 3-10 characters."}), errors=true;
    if(!this.validateEmail(state.email)) this.setState({emailError:"Email should be valid."}), errors=true;
    if(state.password.length < 4 || state.password.length > 32) this.setState({passwordError:"Password is week.",errors: true}), errors=true;
    if(errors == true) return;
    var data = $(e.target).serialize() + "&gender=" + this.state.gender;
    request.makePost(route('/signpoint'), data)
    .then(()=>{
      this.handleOpen();
    })
    .catch(()=>{
      this.setState({emailError:'Email is already registered.'});
    })
  }
  render() {
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];
    return (
      <form onSubmit={e=>this.handleSubmit(e)}>
        <TextField floatingLabelText="First name" fullWidth name="firstname" errorText={this.state.firstnameError} value={this.state.firstname} onChange={e => this.handleChange(e)}/>
        <TextField floatingLabelText="Last name" fullWidth name="lastname" errorText={this.state.lastnameError} value={this.state.lastname} onChange={e => this.handleChange(e)}/>
        <TextField floatingLabelText="Email" type="email" fullWidth name="email" errorText={this.state.emailError} value={this.state.email} onChange={e => this.handleChange(e)}/>
        <TextField floatingLabelText="Password" type="password" fullWidth name="password" errorText={this.state.passwordError} value={this.state.password} onChange={e => this.handleChange(e)}/>
        <SelectField floatingLabelText="Gender" fullWidth name="gender" value={this.state.gender} onChange={this.handleChangeGender.bind(this)}>
          <MenuItem value="Male" primaryText="Male" />
          <MenuItem value="Female" primaryText="Female" />
          <MenuItem value="Other" primaryText="Other" />
        </SelectField>
        <DatePicker floatingLabelText="Date of birth" fullWidth mode="landscape" name="dob" value={this.state.dob} onChange={this.handleDateChange.bind(this)}/>
        <div className="space"></div>
        <RaisedButton type="submit" label="Sign Up" primary={true} fullWidth/>
        <div className="space"></div>
        <Dialog
          title="Signup"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose} >
          Registartion successfull, you can now login.
        </Dialog>
      </form>
    );
  }
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}
export default withRouter(RegisterForm);
