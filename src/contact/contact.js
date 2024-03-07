import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Child from "../child/child";
import Parent from '../parent/parent';
import { Form, Row, Col, Button, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

function Contact() {
    const [signup, setSignup] = useState();
    const [responseData, setResponseData] = useState()
    const [editData, setEditData] = useState(false)
    const handleinputchange = (event) => {
        setSignup((input) => ({
            ...input,
            [event.target.name]: event.target.value
        }))
    }
    const editRecord = () => {
        setEditData(true);
        setSignup(responseData);
    }
    const submitform = (e) => {
        e.preventDefault();
        if (editData){
            editRecord();
        }else{
            createRecord();
        }
    }
    const createRecord= () => {
    console.log('Submit');
    console.log(signup);
    axios.post('https://jsonplaceholder.typicode.com/posts', signup)
        .then((res) => {
            window.alert('Success');
            const storeData = res.data;
            console.log(storeData);
            setResponseData(storeData);
            localStorage.setItem('tokens', JSON.stringify(storeData));
        })
        .catch((error) => {
            console.error('Error:', error);
            window.alert('Sorry, please try again!');
        });
};
    const deleteRecord = () => {
        setResponseData();
        localStorage.removeItem('tokens');
    }
    const status = {'a':'active','i':'inactive','d':'delete'}
    return (
        <>
            <Form onSubmit={submitform}>
                <Row>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="userId">
                                User ID
                            </Label>
                            <Input
                                onChange={handleinputchange}
                                id="userId"
                                name="userId"
                                placeholder="Enter UserID"
                                type="text"
                            />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="title">
                                Title
                            </Label>
                            <Input
                            onChange={handleinputchange}
                                id="title"
                                name="title"
                                placeholder="Enter Title"
                                type="text"
                            />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="bodyPara">
                                Body
                            </Label>
                            <Input
                            onChange={handleinputchange}
                                id="bodyPara"
                                name="bodyPara"
                                placeholder="Enter Body"
                                type="text"
                                value = {signup?.bodyPara || ''}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Button type="submit" > {editData? 'update': 'Sign in' }
                    
                </Button>
                {responseData && (
                <div>
                    <h3>Response</h3>
                    <p>UserID: {responseData.userId}</p>
                    <p>Title: {responseData.title}</p>
                    <p>Body: {responseData.bodyPara}</p>
                    <Button color="danger" onClick={deleteRecord}>Delete</Button>
                    <Button color="success" onClick={editRecord}>Edit</Button>
                </div>
            )}
            </Form>
            <Parent/>
            <Child scard = {status}/>
        </>
    );
}

export default Contact;