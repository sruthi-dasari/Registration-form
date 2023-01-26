import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    fnameErrorMsg: '',
    lnameErrorMsg: '',
    isSuccess: false,
  }

  renderSuccessPage = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-icon"
      />
      <p>Submitted Successfully</p>
      <button type="button">Submit Another Response</button>
    </div>
  )

  onSubmitSuccess = () => {
    this.setState({isSuccess: true})
  }

  onSubmit = event => {
    event.preventDefault()

    const {firstname, lastname} = this.state

    if (firstname === '' && lastname === '') {
      this.setState({fnameErrorMsg: 'Required', lnameErrorMsg: 'Required'})
    } else if (firstname === '') {
      this.setState({fnameErrorMsg: 'Required'})
    } else if (lastname === '') {
      this.setState({lnameErrorMsg: 'Required'})
    } else {
      this.onSubmitSuccess()
    }
  }

  onChangeFirstname = event => {
    this.setState({firstname: event.target.value, fnameErrorMsg: ''})
  }

  onBlurFirstname = () => {
    const {firstname} = this.state
    if (firstname === '') {
      this.setState({fnameErrorMsg: 'Required'})
    }
  }

  onChangeLastname = event => {
    this.setState({lastname: event.target.value, lnameErrorMsg: ''})
  }

  onBlurLastname = () => {
    const {lastname} = this.state
    if (lastname === '') {
      this.setState({lnameErrorMsg: 'Required'})
    }
  }

  renderRegistrationPage = () => {
    const {firstname, lastname, fnameErrorMsg, lnameErrorMsg} = this.state
    console.log('In renderRegistrationPage')
    return (
      <div className="registration-page">
        <form className="form-container" onSubmit={this.onSubmit}>
          <label htmlFor="firstname" className="input-title">
            FIRST NAME
          </label>
          <br />
          <input
            type="text"
            value={firstname}
            id="firstname"
            className="input-container"
            placeholder="First name"
            onChange={this.onChangeFirstname}
            onBlur={this.onBlurFirstname}
          />
          <p className="error-msg">{fnameErrorMsg}</p>

          <label htmlFor="lastname" className="input-title">
            LAST NAME
          </label>
          <br />
          <input
            type="text"
            value={lastname}
            id="lastname"
            className="input-container"
            placeholder="First name"
            onChange={this.onChangeLastname}
            onBlur={this.onBlurLastname}
          />
          <p className="error-msg">{lnameErrorMsg}</p>
          {/* <br />
          <br /> */}
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    )
  }

  render() {
    const {isSuccess} = this.state
    console.log('In render')
    return (
      <div className="app-container">
        <h1 className="main-heading">Registration</h1>
        {this.renderRegistrationPage}
        {isSuccess ? this.renderSuccessPage : ''}
      </div>
    )
  }
}

export default RegistrationForm
