import React, { useState, useEffect } from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core'
import styles from '../../styles/Checkout.module.css'
import AddressForm from '../../components/Checkout/AddressForm'
import PaymentForm from '../../components/Checkout/PaymentForm'
import { commerce } from '../../lib/commerce'
import Link from 'next/link'
import { useHistory } from 'react-router-dom';

// import useStyles from './styles';


// const steps = ["Shipping address", "Payment details"]
const steps = ["Adresa livrare", "Detalii plata"]

const Checkout = ({ cart, order, onCaptureCheckout, error }) => {
    const [activeStep, setActiveStep] = useState(0)
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingData, setShippingData] = useState({})
    const [isFinished, setIsFinished] = useState(false)

    const history = useHistory();



    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1)
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1)

    const next = (data) => {
        setShippingData(data)
        nextStep()
    }

    const Form = () => (activeStep === 0
        ? <AddressForm checkoutToken={checkoutToken} nextStep={nextStep} next={next} />
        : <PaymentForm timeout={timeout} cart={cart} shippingData={shippingData} checkoutToken={checkoutToken} backStep={backStep} nextStep={nextStep} onCaptureCheckout={onCaptureCheckout} />)

    let Confirmation = () => order.customer ? (
        <>
            <Typography variant="h5">
                Multumim pentru comanda, {order.customer.firstname} {order.customer.lastname}
            </Typography>
            <Divider />
            <Typography variant="subtitle2">
                Comanda nr: {order.customer_reference}
            </Typography> <br />
            <Link href='/'><Button variant="outlined" type="button">Pagina principala</Button></Link>
        </>
    ) : isFinished ? (
            <>
                <Typography variant="h5">
                    Multumim pentru comanda!
                </Typography>
                <Divider />
                <Link href='/'><Button variant="outlined" type="button">Pagina principala</Button></Link>
            </>
    ): (
        <div className = {styles.spinner}>
            <CircularProgress />
        </div >
    )

if (error) {
    <>
        <Typography variant="h5">Error: {error}</Typography> <br />
        <Link href='/'><Button variant="outlined" type="button">Pagina principala</Button></Link>
    </>
}

const timeout = () => {
    setTimeout(() => {
        setIsFinished(true)
    }, 3000)
}

useEffect(() => {
    const generateToken = async () => {
        try {
            const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' })
            setCheckoutToken(token)
        } catch (error) {
            history.push('/')
        }
    }
    generateToken()
}, [cart])

return (
    <div className={styles.container}>
        <div className={styles.checkout}>
            <Paper variant="outlined" className={styles.paper}>
                <Typography variant="h4" align="center" >Checkout</Typography>
                <Stepper activeStep={activeStep} alternativeLabel className={styles.stepper}>
                    {steps.map((step) => (
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
            </Paper>
        </div>
    </div>
)
}




export default Checkout


