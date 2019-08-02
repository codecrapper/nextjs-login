import React, { useState } from 'react'
import { CardElement, injectStripe, ReactStripeElements } from 'react-stripe-elements'

class Form extends React.Component {
    state = {
        name: "",
        amount: ""
    }

    handlePaySubmit = (e) => {
        e.preventDefault()
        console.log("yes")
    }

    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        })
        console.log(this.state.name)
    }

    handleAmountChange = (e) => {
        this.setState({
            amount: e.target.value
        })
        console.log(this.state.amount)
    }

    render() {
        return (
            <main className="container">
                <form onSubmit={this.handlePaySubmit} className="form-group mt-3 border border-primary rounded shadow-lg p-3"> 
                    <label>Name</label>
                    <input 
                        type="text"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                        className="input-group my-1 p-1 border border-dark"
                    />
                    <label>Amount</label>
                    <input 
                        type="text"
                        value={this.state.amount}
                        onChange={this.handleAmountChange}
                        className="input-group my-1 p-1 border border-dark"
                    />
                    <label>CC Number -- Exp. Date -- CVC</label>
                    <CardElement className="p-2 border border-dark" />
                    <button className="btn btn-primary border border-dark shadow mt-3">Charge</button>
                </form>
            </main>
        )
    }
}

export default injectStripe(Form)