import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost, submitSignUpSuccess } from '../actions/SignupAction';
import userValidation from '../helpers/signup'

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
        username: '',
        email: '',
        password: '',
        submitted: false,
        usernameError: '',
        emailError: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
}
onChange (e) {
    this.setState({[e.target.name] : e.target.value})
}
onSubmit (e) {
    e.preventDefault();

    const newUser = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
    }

    this.props.createPost(newUser)
    console.log(this.props)
    this.props.history.push("/login");

}
  render() {
    return (
      <div className="login-container">
        <form onSubmit = {this.onSubmit}>
          <div className="login-text">
            <button className="login-btn tex-capitalize">Sign Up</button>
            <Link to="login">
              <button className="sign-btn text capitalize">Log In</button>
            </Link>
            <div className="box-input">
              <label>Username</label>
              <div className="input-row">
                <input name="username" placeholder="Username" required onChange={this.onChange} value={this.state.username}/>
              </div>
            </div>
            <div className="box-input">
              <label>Email</label>
              <div className="input-row">
                <input name="email" placeholder="Email" required onChange={this.onChange} value={this.state.email}/>
              </div>
            </div>
            <div className="box-input">
              <label>Password</label>
              <div className="input-row">
                <input name="password" placeholder="Password" required onChange={this.onChange} value={this.state.password}/>
              </div>
            </div>
            <div class="submit-sign">
            <button className="submit-btn tex-capitalize">Sign up</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

SignUp.propTypes = {
  email: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export const mapDispatchToProps = (dispatch, ownProps ) => ({
  createPost: ({ username, email, password }) => dispatch(
    createPost({username, email, password, ownProps})
  ),
  submitSignUpSuccess: ({ username, email, password }) => dispatch(
    submitSignUpSuccess({username, email, password})
  )
})

SignUp.defaultProps = {
  message: '',
  errors: [],
  submitting: false,
};
const mapStateToProps = state => ({
  user: state.user,
  state
})



export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
