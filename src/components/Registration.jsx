import { Button, Col, Form, Image, Row } from "react-bootstrap"

function Registration() {
    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "100vh",
    }
    return (
        <div style={containerStyle}>
            <Image src="anony1.png" width="250" height="250" style={{ marginBottom: '20px' }} />
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formFirstNameReg" >
                    <Form.Label column sm="5" >First Name:</Form.Label>
                    <Col sm="7" >
                        <Form.Control type="text" placeholder="First name..." />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formSecondNameReg" >
                    <Form.Label column sm="5" >Second Name:</Form.Label>
                    <Col sm="7" >
                        <Form.Control type="text" placeholder="Second Name..." />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formBasicEmailReg" >
                    <Form.Label column sm="5" >Email:</Form.Label>
                    <Col sm="7" >
                        <Form.Control type="text" placeholder="Email Address..." />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formBasicPasswordReg" >
                    <Form.Label column sm="5" >Password:</Form.Label>
                    <Col sm="7" >
                        <Form.Control type="password" placeholder="Password..." />
                    </Col>
                </Form.Group>
                <Button variant="secondary" >Register</Button>
            </Form>
        </div>
    )
}

export default Registration
