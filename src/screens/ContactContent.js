import React from 'react';
import { Form, Button, Spinner, Modal, ModalTitle } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

class ContactContent extends React.Component {

    state = {
        spinnerHidden: true,
        modalShow: false,
    }

    handleOnSubmit = async (values) => {

        this.setState({ spinnerHidden: false });

        const url = "https://us-central1-tama-test-b7488.cloudfunctions.net/receiveInquiry?email=" + values.email + "&note=" + values.note;
        const res = await axios.get(url);

        this.setState({ spinnerHidden: true });

        this.handleModalShow();

    }

    handleModalShow = () => {
        this.setState({ modalShow: true });
    }

    handleModalClose = () => {
        this.setState({ modalShow: false });
    }

    render() {
        return (
            <div>
                <div id="main" style={{ height: 400, background: "#fff" }} className="mx-auto col-6">
                    <h3 style={{ marginTop: 30 }}>お問合せ</h3>
                    <Formik
                        initialValues={{ email: 'eizaburo.tamaki@gmail.com', note: 'xxx' }}
                        onSubmit={(values) => this.handleOnSubmit(values)}
                        validationSchema={Yup.object().shape({
                            email: Yup.string().email().required(),
                            note: Yup.string().required(),
                        })}
                    >
                        {
                            ({ handleSubmit, handleChange, handleBlur, values, errors, touched }) => (
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            placeholder="xxx@xxx.com"
                                            type="email"
                                            name="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            isInvalid={!!(touched.email && errors.email)}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.email}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>お問合せ内容</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows="3"
                                            name="note"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.note}
                                            isInvalid={!!(touched.note && errors.note)}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.note}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Button type="submit">
                                        <Spinner
                                            as="span"
                                            animation="border"
                                            size="sm"
                                            style={{ marginRight: 5 }}
                                            hidden={this.state.spinnerHidden}
                                        />
                                        <span>問い合せる</span>
                                    </Button>

                                </Form>
                            )
                        }
                    </Formik>
                </div>
                <Modal show={this.state.modalShow}>
                    <Modal.Header closeButton>
                        <Modal.Title>確認</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>送信を受付ました。</Modal.Body>
                    <Modal.Footer>
                        <Button onClick={()=>this.handleModalClose()}>
                            OK
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default ContactContent;