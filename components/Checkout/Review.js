import React from 'react'
import { Typography, List, ListItem, ListItemText } from '@material-ui/core'

const Review = ({ checkoutToken }) => {
    // console.log("Review checkoutToken::: ", checkoutToken)
    return (
        <>
            <Typography variant='h6' gutterBottom>Sumar comanda</Typography>
            <List disablePadding>
                {checkoutToken.live.line_items.map((product) => (
                    <ListItem style={{ padding: '10px 0' }} key={product.id}>
                        {/* {console.log("product.line_total.formatted_with_code: ", product.line_total.formatted_with_code)} */}
                        <ListItemText primary={product.name} secondary={`Cantitate: ${product.quantity}`} />
                        <Typography variant='body2'>{product.line_total.formatted_with_code}</Typography>
                    </ListItem>
                ))}
                <ListItem style={{ padding: '10px 0' }}>
                    <ListItemText primary='Total' />
                    <Typography variant='subtitle1' style={{ fontWeight: 700 }}>
                        {checkoutToken.live.subtotal.formatted_with_code}
                        {/* {console.log("checkoutToken.live.subtotal.formatted_with_code: ",checkoutToken.live.subtotal.formatted_with_code)} */}
                    </Typography>
                </ListItem>
            </List>
        </>
    )
}

export default Review
