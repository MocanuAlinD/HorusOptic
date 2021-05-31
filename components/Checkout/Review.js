import React from 'react'
import { Typography, List, ListItem, ListItemText, Divider } from '@material-ui/core'

const Review = ({ checkoutToken }) => {
    console.log("CheckoutToken: ",checkoutToken)
    console.log("CheckoutToken qty: ",checkoutToken.live.line_items[0].quantity)
    return (
        <>
            <Typography variant='h6' gutterBottom>Sumar comanda</Typography>
            <List disablePadding>
                {checkoutToken.live.line_items.map((product)=>(
                    <ListItem style={{padding: '10px 0'}} key={product.id}>
                        <ListItemText primary={product.name} secondary={`Cantitate: ${product.quantity}`}/>
                        <Typography variant='body2'>{product.quantity + ' x ' + product.price.formatted_with_code + " - " + product.line_total.formatted_with_code}</Typography>
                    </ListItem>
                ))}
                <Divider />
                <ListItem style={{ padding: '10px 0' }}>
                    <ListItemText primary='Transport' />
                    <Typography variant='subtitle1' style={{ fontWeight: 700 }}>
                        {checkoutToken.shipping_methods[0].price.formatted_with_code}
                    </Typography>
                </ListItem>

                <ListItem style={{padding: '10px 0'}}>
                    <ListItemText primary='Total' />
                    <Typography variant='subtitle1' style={{fontWeight: 700}}>
                        {checkoutToken.live.subtotal.formatted_with_code}
                    </Typography>
                </ListItem>
            </List>
        </>
    )
}

export default Review
