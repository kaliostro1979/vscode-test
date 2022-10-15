import {useState} from "react"
import { Form, Row, Col, Button } from 'react-bootstrap';

const AddNewProductForm = ()=>{
    const [image, setImage] = useState(null)
    const [value, setValue] = useState("")
    
    const handleFormSubmit = (event)=>{
        event.preventdefault()
    }

    const handleChange = (event)=>{
        console.log(event.target.name);
        switch (event.target.name) {
            case "image": 
                setImage(event.target.value)            
            case "title": 
                setValue(event.target.value)
            default:
                break;
        }
    }

    return (
        <div>
            <h1>Add new product</h1>
            <Form onSubmit={handleFormSubmit}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Product image</Form.Label>
                            <Form.Control type="file" placeholder="Product image" onChange={handleChange} name={"image"}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Product title</Form.Label>
                            <Form.Control type="text" placeholder="Product title" name={"title"} value={value} onChange={handleChange}/>
                        </Form.Group>
                    </Col>                    
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="productDescription">
                            <Form.Label>Product description</Form.Label>
                            <Form.Control as="textarea" rows={5} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Product regular price</Form.Label>
                            <Form.Control type="number" placeholder="Product price"/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Product sale price</Form.Label>
                            <Form.Control type="number" placeholder="Product sale price"/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Product sale</Form.Label>
                            <Form.Control type="number" placeholder="Product sale"/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col className={"d-flex justify-content-end"}>
                        <Button type={"submit"} className={"d-block"}>Add product</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default AddNewProductForm