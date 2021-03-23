import '../App.css';
import './EmailForm.css';
import React, { Component } from 'react';

export class EmailForm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             firstName: 'First Name',
             secondName: 'Second Name',
             email: 'Email'
        }
    }

    handleFirstNameChange = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleSecondNameChange = event => {
        this.setState({
            secondName: event.target.value
        })

    }

    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        })
    }

    handleSubmit = event => {
        alert(`Thats great! Keep a look out for your discount in your inbox!`)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} class="emailDiscount">
                <h5>Enter your email to receive money off tickets to festivals across the country. Come along to see our athletes in action!</h5>
                <div class="row">
                    <div class="col-6">
                        <input type='text' class="form-control" value={this.state.firstName} onChange={this.handleFirstNameChange}></input>
                    </div>
                    <div class="col-6">
                        <input type='text' class="form-control" value={this.state.secondName} onChange={this.handleSecondNameChange}></input>
                    </div>
                </div>

                <br></br>
                <div class="row">
                    <div class="col-10">
                        <input type='email' class="form-control" value={this.state.email} onChange={this.handleEmailChange}></input>
                    </div>
                    <div class="col-2">
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default EmailForm;