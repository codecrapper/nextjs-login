import React from 'react'
import {StripeProvider, Elements} from 'react-stripe-elements'

import Form from '../components/Form'

class FormStripe extends React.Component { 
    render() {
        return (
            <StripeProvider apiKey="pk_test_x9t23t4EvjeW1gqhsZAP4nku008VM42irh">
                <Elements>
                    <Form />
                </Elements>
            </StripeProvider>
        )
    }
}

export default FormStripe