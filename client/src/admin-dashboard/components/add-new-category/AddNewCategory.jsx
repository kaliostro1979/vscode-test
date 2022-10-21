import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {addCategory} from '../../../redux/slices/catyegory.slice';
import Categories from "./Categories";

const AddNewCategory = () => {
    const [categoryName, setCategoryName] = useState('')
    const dispatch = useDispatch()

    const handleChange = (e)=>{
        setCategoryName(e.target.value)
    }

    const handleFormSubmit = (e)=>{
        e.preventDefault()
        dispatch(addCategory(categoryName.toLowerCase()))
        setCategoryName('')
    }

    return (
     <>
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
         <Row className={"mt-5"}>
             <Col>
                 <Categories/>
             </Col>
         </Row>
     </>
    )
};

export default AddNewCategory;
