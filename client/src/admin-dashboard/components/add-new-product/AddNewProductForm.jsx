import {useRef, useEffect, useContext} from 'react'
import { useState } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addNewProduct } from '../../../redux/slices/addNewProduct.slice'
import { getCategories } from '../../../redux/slices/catyegory.slice'
import { useSelector } from 'react-redux'
import {Context} from "../../../context/Context";

const AddNewProductForm = () => {
  const [image, setImage] = useState('')
  const [title, setTitle] = useState('')
  const salePriceRef = useRef()
  const saleRef = useRef()

  const {
    price,
    setPrice,
    salePrice,
    setSalePrice,
    sale,
    setSale,
    description,
    setDescription,
    category,
    setCategory,
    bestSeller,
    setBestSeller,
    onStock,
    setOnStock,
    hasSale,
    setHasSale
  } = useContext(Context)

  const imageRef = useRef()

  const categories = useSelector((state) => state.main.categories.categories)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  const handleChange = (event) => {
    switch (event.target.name) {
      case 'image':
        setImage(event.target.files)
        break
      case 'title':
        setTitle(event.target.value)
        break
      case 'description':
        setDescription(event.target.value)
        break
      case 'product_price':
        setPrice(event.target.value)
        break
      case 'sale':
        setSale(event.target.value)
        salePriceRef.current.value = saleRef.current.value > 0 || saleRef.current.value !== "" ? Math.floor(price - price * event.target.value / 100).toFixed(2) : ""
        setSalePrice(salePriceRef.current.value)
        break
      case 'has_sale':
        setHasSale(event.target.checked)
        break
      case 'on_stock':
        setOnStock(event.target.value)
        break
      case 'category':
        setCategory(event.target.value)
        break
      case 'best_seller':
        setBestSeller(event.target.checked)
        break
      default:
        break
    }
  }

  const formData = new FormData()
  for (let i = 0; i < image.length; i++){
    formData.append('image', image[i])
  }
  formData.append('title', title)
  formData.append('rate', '')
  formData.append('category', category)
  formData.append('on_stock', onStock)
  formData.append('description', description)
  formData.append('price', price)
  formData.append('sale_price', salePrice)
  formData.append('sale', sale)
  formData.append('best_seller', bestSeller)

  const handleFormSubmit = (event) => {
    event.preventDefault()
    dispatch(addNewProduct(formData))

    setTitle('')
    setDescription('')
    setPrice('')
    setSalePrice('')
    setSale('')
    setOnStock('')
    setHasSale(false)
    setBestSeller(false)

    imageRef.current.value = null
  }

  return (
    <div>
      <h1>Add new product</h1>
      <Form onSubmit={handleFormSubmit}>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Product image</Form.Label>
              <Form.Control
                type="file"
                onChange={handleChange}
                name={'image'}
                ref={imageRef}
                multiple={true}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Product title</Form.Label>
              <Form.Control
                type="text"
                name={'title'}
                value={title}
                onChange={handleChange}
                required={true}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="productDescription">
              <Form.Label>Product description</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                name={'description'}
                onChange={handleChange}
                value={description}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Product regular price</Form.Label>
              <Form.Control
                type="number"
                name={'product_price'}
                onChange={handleChange}
                value={price}
                required={true}
              />
            </Form.Group>
          </Col>
          <Col className={'col-1'}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Has sale</Form.Label>
              <Form.Check
                type={'checkbox'}
                id={`has_sale`}
                name={'has_sale'}
                onChange={handleChange}
                checked={hasSale}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Product sale price</Form.Label>
              <Form.Control
                type="number"
                name={'sale_price'}
                onChange={handleChange}
                value={salePrice}
                disabled={true}
                ref={salePriceRef}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Product sale</Form.Label>
              <Form.Control
                type="number"
                name={'sale'}
                onChange={handleChange}
                value={sale}
                disabled={!hasSale}
                ref={saleRef}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>On stock</Form.Label>
              <Form.Control
                type="number"
                name={'on_stock'}
                onChange={handleChange}
                value={onStock}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Label>Category</Form.Label>
            <Form.Select
              aria-label="Category select"
              onChange={handleChange}
              name={'category'}
              style={{ textTransform: 'capitalize' }}
            >
                <option disabled defaultValue="select category">Select category</option>
              {categories.map((category) => {
                return (
                  <option value={category.name} key={category._id}>
                    {category.name}
                  </option>
                )
              })}
            </Form.Select>
          </Col>
          <Col className={'col-1'}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Best seller</Form.Label>
              <Form.Check
                type={'checkbox'}
                id={`best_seller`}
                name={'best_seller'}
                onChange={handleChange}
                checked={bestSeller}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className={'d-flex justify-content-end'}>
            <Button type={'submit'} className={'d-block'}>
              Add product
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default AddNewProductForm
