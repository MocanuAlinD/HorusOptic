import React from 'react'
import { Typography, Button, Divider } from '@material-ui/core'
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import Review from './Review'

const stripePromise = loadStripe(process.env.NEXT_APP_STRIPE_PUBLIC_API_KEY)


const PaymentForm = ({ timeout, checkoutToken, backStep, onCaptureCheckout, shippingData, nextStep }) => {

    const handleSubmit = async (event, elements, stripe) => {
        event.preventDefault()
        if (!stripe || !elements) return
        const cardElement = elements.getElement(CardElement)


        const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement })
        if (error) {
            console.log('PaymentForm Error: ', error)
        } else {
            const orderData = {
                line_items: [...checkoutToken.live.line_items],
                customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email, },
                shipping: {
                    name: 'Primary',
                    street: shippingData.address1,
                    town_city: shippingData.city,
                    county_state: shippingData.shippingSubdivision,
                    postal_zip_code: shippingData.zip,
                    country: shippingData.shippingCountry,
                },
                fulfillment: { shipping_method: shippingData.shippingOption },
                payment: {
                    gateway: 'stripe',
                    stripe: {
                        payment_method_id: paymentMethod.id,
                    }
                },
                billing: {
                    name: shippingData.firstName + ' ' + shippingData.lastName,
                    street: shippingData.address1,
                    town_city: shippingData.city,
                    county_state: 'County test',
                    postal_zip_code: shippingData.zip,
                    country: 'RO test country'
                },
            }
            onCaptureCheckout(checkoutToken.id, orderData)
            timeout()
            nextStep()
        }
    }
    return (
        <div>
            <Review checkoutToken={checkoutToken} />
            <Divider />
            <Typography variant='h6' gutterBottom style={{ margin: '1.2rem 0' }}>Metoda de plata</Typography>
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {({ elements, stripe }) => (
                        <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                            <CardElement /> <br /> <br />
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Button variant='outlined' onClick={backStep}>Inapoi</Button>
                                <Button type='submit' variant='contained' disabled={!stripe} color='primary'>
                                    Achita {checkoutToken.live.subtotal.formatted_with_code}
                                </Button>
                            </div>

                        </form>
                    )}
                </ElementsConsumer>
            </Elements>
        </div>
    )
}

export default PaymentForm