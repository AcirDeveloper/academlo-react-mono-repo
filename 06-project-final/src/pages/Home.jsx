import axios from 'axios'
import '../styles/home.css'
import React, { useEffect, useState } from 'react'
import {
    Button,
    ButtonGroup,
    Card,
    Col,
    Dropdown,
    DropdownButton,
    Form,
    InputGroup,
    Row,
} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const listProducts = useSelector((state) => state.products)
    const [category, setCategory] = useState([])
    const [productsFiltered, setProductsFiltered] = useState([])
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        axios
            .get('https://ecommerce-api-react.herokuapp.com/api/v1/products/categories/')
            .then((res) => {
                setCategory(res.data.data.categories)
            })
    }, [])

    useEffect(() => {
        setProductsFiltered(listProducts)
    }, [listProducts])

    const filterCategory = (categoryId) => {
        const filtered = listProducts.filter((product) => product.category.id === categoryId)
        setProductsFiltered(filtered)
    }

    const searchProduct = () => {
        const filtered = listProducts.filter((product) =>
            product.title.toLowerCase().includes(searchValue.toLowerCase())
        )
        setProductsFiltered(filtered)
    }

    return (
        <Row style={{ padding: '50px' }}>
            {/* Buscadores */}
            <Row className='mb-3 buscadores'>
                {/* Buscador por Categorias */}
                <Col md={3}>
                    <DropdownButton as={ButtonGroup} title='Category  ' id='bg-nested-dropdown'>
                        {category.map((categorye) => (
                            <Dropdown.Item
                                eventKey={categorye.id}
                                key={categorye.id}
                                onClick={() => filterCategory(categorye.id)}
                                className='dropdown-item'
                            >
                                {' '}
                                {categorye.name}{' '}
                            </Dropdown.Item>
                        ))}
                    </DropdownButton>
                </Col>
                {/* Buscador por nombre de articulo */}
                <Col md={8}>
                    <InputGroup className='mb-3'>
                        <Form.Control
                            placeholder='Search for products...'
                            onChange={(e) => setSearchValue(e.target.value)}
                            value={searchValue}
                            className='search-input'
                        />
                        <Button
                            variant='outline-secondary'
                            id='button-addon2'
                            onClick={() => searchProduct()}
                            className='search-button'
                        >
                            <i className='fa-solid fa-magnifying-glass'></i>
                        </Button>
                    </InputGroup>
                </Col>
            </Row>
            {/* Productos */}
            <Row xs={1} md={2} xl={4} className='g-4'>
                {productsFiltered.map((product) => (
                    <Col key={product.id}>
                        <Card onClick={() => navigate(`product/${product.id}`)} className='card'>
                            <Card.Header className='card-header'>
                                <Card.Img
                                    variant='top'
                                    src={product.productImgs[1]}
                                    className='card-img'
                                />
                            </Card.Header>
                            <hr />
                            <Card.Body className='card-body'>
                                <Row className='row-title'>
                                    <Card.Title className='card-title'>{product.title}</Card.Title>
                                </Row>
                                <Row>
                                    <Col md={7}>
                                        <Card.Text>
                                            <b
                                                style={{
                                                    fontSize: '14px',
                                                    fontWeight: 'bold',
                                                    color: 'black',
                                                }}
                                            >
                                                Price:
                                            </b>{' '}
                                            {' ' + product.price + ' $'}
                                        </Card.Text>
                                        <Card.Text>
                                            {' '}
                                            <b
                                                style={{
                                                    fontSize: '15px',
                                                    fontWeight: 'bold',
                                                    color: 'black',
                                                }}
                                            >
                                                Category:
                                            </b>{' '}
                                            {' ' + product.category.name}
                                        </Card.Text>
                                    </Col>
                                    <Col className='btn-content'>
                                        <Button variant='primary' className='btn btn-primary'>
                                            <i className='fa-solid fa-cart-arrow-down buy'></i>
                                        </Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Row>
    )
}

export default Home
