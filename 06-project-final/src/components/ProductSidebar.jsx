import React, { useEffect } from 'react'
import { Button, Offcanvas, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getCartThunk, purchasesCartThunk } from '../store/slices/cart.slice'

const ProductSidebar = ({ show, handleClose }) => {
    const dispatch = useDispatch()
    const carts = useSelector((state) => state.cart)

    useEffect(() => {
        dispatch(getCartThunk())
    }, [])

    return (
        <Offcanvas show={show} onHide={handleClose} placement='end'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {carts.map((cart) => {
                    return (
                        <div key={cart.id}>
                            <h5>{cart.title}</h5>
                            <p>{cart.price}</p>
                            <p>{cart.productsInCart.quantity}</p>
                            <hr />
                        </div>
                    )
                })}
            </Offcanvas.Body>
            <hr />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignContent: 'space-between',
                    padding: '15px',
                }}>
                <div>Total: </div>
                <div
                    style={{
                        marginLeft: 'auto',
                    }}>
                    {' '}
                    $ 0
                </div>
            </div>

            <Button onClick={() => dispatch(purchasesCartThunk())}>Comprar Productos</Button>
        </Offcanvas>
    )
}

export default ProductSidebar
