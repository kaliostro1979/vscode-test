import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const AddNewCategory = () => {
    const [categoryName, setCategoryName] = useState('')

    const handleChange = (e)=>{
        setCategoryName(e.target.value)
    }

    const handleFormSubmit = (e)=>{
        e.preventDefault()
    }

    return (
      <Form onSubmit={handleFormSubmit}>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Category name</Form.Label>
              <Form.Control
                type="text"
                name={'title'}
                value={categoryName}
                onChange={handleChange}
                required={true}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className={'d-flex justify-content-end'}>
            <Button type={'submit'} className={'d-block'}>
              Add Category
            </Button>
          </Col>
        </Row>
      </Form>
    )
};

export default AddNewCategory;