import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

class FormCom extends React.Component {

    render() {
        return (
            <>
                 <Form onSubmit={this.props.locationInfo}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>City Explorer app</Form.Label>
                        <Form.Control name="city" type="text" placeholder="Enter Place Name" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Explore!
                    </Button>
                </Form>
            </>
        )
    }
}

export default FormCom;