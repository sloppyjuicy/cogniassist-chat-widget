import React, { Component } from 'react';
import './welcome.scss';

class PersonalDetailsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      dob: '',
      mobile: '',
      email: '',
      nationality: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.stringifyForm = this.stringifyForm.bind(this);
  }

  stringifyForm() {
    const slotsString = JSON.stringify({
      slots: this.state,
    });
    const triggerString = '/' + this.props.intent + slotsString;
    console.log(triggerString);
    return triggerString;
  }

  handleSubmit(event) {
    event.preventDefault();
    const trigger = this.stringifyForm();
    this.props.onChange('Form submited', trigger);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} class='form carinsurance-form'>
        {/* <div className='form-header'>Contact Information</div> */}
        <div className='form-container carinsurance-form'>
          <div className='field-container'>
            <label htmlFor='name'>Policy Holder Name</label>
            <input
              id='name'
              maxLength='20'
              type='text'
              value={this.state.name}
              onChange={(event) => this.setState({ name: event.target.value })}
              required
            />
          </div>

          <div className='field-container'>
            <label>Date of Birth</label>
            <input
              type='date'
              value={this.state.dob}
              onChange={(event) => this.setState({ dob: event.target.value })}
              placeholder=''
            />
          </div>
          <div className='field-container'>
            <label>Mobile</label>
            <input
              type='phone'
              value={this.state.mobile}
              onChange={(event) =>
                this.setState({ mobile: event.target.value })
              }
              placeholder=''
              required
            />
          </div>

          <div className='field-container'>
            <label>Email</label>
            <input
              type='email'
              value={this.state.email}
              onChange={(event) => this.setState({ email: event.target.value })}
              placeholder=''
            />
          </div>

          <div className='field-container'>
            <label>Nationality</label>
            <select
              value={this.state.nationality}
              onChange={(event) =>
                this.setState({ nationality: event.target.value })
              }
              placeholder=''
              required
            >
              <option value=''>-</option>
              <option value='test'>Test</option>
            </select>
          </div>

          <button>Submit</button>
        </div>
      </form>
    );
  }
}
export default PersonalDetailsForm;
