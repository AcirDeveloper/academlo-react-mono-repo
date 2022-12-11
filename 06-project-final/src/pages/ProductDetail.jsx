import React, { useEffect, useState } from 'react'
import { Button, Card, Carousel, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { addCartThunk } from '../store/slices/cart.slice'

const ProductDetail = () => {
    const { id } = useParams()
    const products = useSelector((state) => state.products)
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()

    const productDetail = products.find((product) => product.id === Number(id))
    const relatedProducts = products.filter((product) => {
        if (product.category.id === productDetail.category.id && product.id !== productDetail.id) {
            return product
        } else {
            return null
        }
    })

    useEffect(() => {
        setQuantity(1)
    }, [id])

    const addCart = () => {
        console.log('Add to cart')
        const cuantity = {
            id,
            quantity,
        }
        dispatch(addCartThunk(cuantity))
    }

    return (
        <Row>
            <Col>
                {productDetail && <h2>{productDetail?.title}</h2>}

                <div className='quantity' style={{ display: 'flex' }}>
                    <Button className='me-3' onClick={() => setQuantity(quantity - 1)}>
                        -
                    </Button>
                    {quantity}
                    <Button className='me-3' onClick={() => setQuantity(quantity + 1)}>
                        +
                    </Button>
                    <Button className='me-3' onClick={addCart}>
                        Add to cart
                    </Button>
                </div>
            </Col>
            <br />
            <br />
            <Row>
                <Carousel style={{ background: 'aliceblue' }}>
                    <Carousel.Item interval={1000} style={{ width: '100px' }}>
                        <img
                            className='d-block w-100'
                            src={productDetail?.productImgs[0]}
                            alt='First slide'
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={500} style={{ width: '100px' }}>
                        <img
                            className='d-block w-100'
                            src={productDetail?.productImgs[1]}
                            alt='First slide'
                        />
                    </Carousel.Item>
                    <Carousel.Item style={{ width: '100px' }}>
                        <img
                            className='d-block w-100'
                            src={productDetail?.productImgs[2]}
                            alt='First slide'
                        />
                    </Carousel.Item>
                </Carousel>
            </Row>
            <hr />
            <p> {productDetail?.description} </p>
            <hr />
            <h4>Sugerencias</h4>
            <Row xs={2} md={4} xl={8} className='g-4'>
                {relatedProducts.map((product) => (
                    <Col key={product.id}>
                        <Link to={`/product/${product.id}`}>
                            <Card
                                style={{
                                    width: '100%',
                                    cursor: 'pointer',
                                    alignItems: 'center',
                                    height: '500px',
                                    overflowY: 'scroll',
                                }}>
                                <Card.Img
                                    variant='top'
                                    src={product.productImgs[2]}
                                    style={{
                                        width: '90%',
                                        height: '300px',
                                        padding: '10px',
                                        objectFit: 'contain',
                                    }}
                                />
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <hr />
                                    <Card.Text>{'Category: ' + product.category.name}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Row>
    )
}

export default ProductDetail
