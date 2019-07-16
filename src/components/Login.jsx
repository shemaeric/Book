import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signinLocal } from '../actions/LoginAction';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange (e) {
    this.setState({[e.target.name] : e.target.value})
}
async onSubmit (e) {
  e.preventDefault();
  const userLog = {
    email: this.state.email,
    password: this.state.password
  }
  await this.props.signinLocal(userLog);

  if(this.props.userLogin.token) {
    console.log(localStorage.token)
    this.props.history.push('/');
  }
}
    
  render() {
    return (

      <div class="wrapper fadeInDown">
        <div id="formContent">
          <div class="fadeIn first">
            <img src="https://image.flaticon.com/icons/svg/74/74472.svg" id="icon" alt="User Icon" />
          </div>
          <form onSubmit = {this.onSubmit}>
            <div>
              <input type="text" id="login" className="fadeIn second" name="email" placeholder="Email" required onChange={this.onChange} value={this.state.email}/>
              <input type="text" id="password" className="fadeIn third" name="password" placeholder="Password" required onChange={this.onChange} value={this.state.password}/>
            </div>
            <button type="submit" className="fadeIn fourth">Log in</button>
          </form>

          <div id="formFooter">
            <Link to="/signup"> Sign Up</Link>
          </div>

        </div>
      </div>
      // <div className="login-container">
      //   <form onSubmit = {this.onSubmit}>
      //     <div className="login-text">
      //       <Link to="/signup">
      //       <button className="sign-btn tex-capitalize">Sign Up</button>
      //       </Link>
      //       <button className="login-btn text capitalize">Log In</button>
      //       <div className="box-input">
      //         <label>Email</label>
      //         <div className="input-row">
      //           <input name="email" placeholder="Email" required onChange={this.onChange} value={this.state.email}/>
      //         </div>
      //       </div>
      //       <div className="box-input">
      //         <label>Password</label>
      //         <div className="input-row">
      //           <input type="password" name="password" placeholder="Password" required onChange={this.onChange} value={this.state.password}/>
      //         </div>
      //       </div>
      //       <div class="submit-sign">
      //       <button className="submit-btn tex-capitalize">Log In</button>
      //       </div>
      //     </div>
      //   </form>
      // </div>
    );
  }
}

export const mapDispatchToProps = (dispatch, ownProps ) => ({
  signinLocal: ({ email, password }) => dispatch(
    signinLocal({email, password, ownProps})
  )
})
const mapStateToProps = state => ({
  userLogin: state.login.user,
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
