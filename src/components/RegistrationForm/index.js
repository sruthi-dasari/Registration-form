import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    fnameErrorMsg: '',
    lnameErrorMsg: '',
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
    this.renderSuccessPage()
  }

  onSubmit = event => {
    event.preventDefault()

    const {firstname, lastname} = this.state

    if (firstname === '') {
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

  render() {
    const {firstname, lastname, fnameErrorMsg, lnameErrorMsg} = this.state

    return (
      <div className="app-container">
        <h1 className="main-heading">Registration</h1>
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
}

export default RegistrationForm
