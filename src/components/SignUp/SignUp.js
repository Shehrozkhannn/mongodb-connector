import {useState} from 'react';
import SignUpCSS from "./SignUp.module.css";
import img1 from "../../assets/mongo-removebg-preview.png";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useFormik } from 'formik';
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
// import { useEffect } from "react";

const ErrorToast = (msg) => {
    toast.error(msg);
}

const successToast = (msg) => {
    toast.success(msg);
}
const SignUp = () => {
    const [show, setShow] = useState(false);
    const [res, setRes] = useState(null);
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            ipAdd: "",
            portNum: "",
            dbName: "",
        },
    })
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const signUp = () => {
        setShow(true)
        // const myUrl = 'http://172.104.174.187:4128/api/signup';
        const myUrl = 'http://172.104.174.187:4128/api/get-data';
        // const myUrl = 'http://localhost:4128/api/signup';
        axios.post(myUrl, formik?.values)
            .then((response) => {
                // console.log(formik.values);
                console.log(response);
                setRes(response.data)
                if (response) {
                    successToast("API Successful");
                }
                // navigate("/login"); 
            })
            .catch((error) => {
                console.log(error);
                ErrorToast("Unexpected Error!");
            })
    };
    return (
        <div className={SignUpCSS["main-container"]}>
            <div className={SignUpCSS["sign-up-container"]}>
                <div className={SignUpCSS["sign-up-title"]}>
                    <img src={img1} alt="" />
                    <span>MongoDB Connector</span>
                </div>
                <form className={SignUpCSS["signup-form"]}>
                    <div className={SignUpCSS["resizing-input-fields"]}>
                        <label htmlFor="">Ip Address</label>
                        <input
                            type="text"
                            id="ipAdd"
                            name="ipAdd"
                            value={formik.values.ipAdd}
                            onChange={formik?.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    <div className={SignUpCSS["resizing-input-fields"]}>
                        <label htmlFor="" >Port Number</label>
                        <input type="number"
                            id="portNum"
                            name="portNum"
                            value={formik.values.portNum}
                            onChange={formik?.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>

                    <div className={SignUpCSS["resizing-input-fields"]}>
                        <label htmlFor="">Database</label>
                        <input type="text"
                            id="dbName"
                            name="dbName"
                            value={formik.values.dbName}
                            onChange={formik?.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    <div className={SignUpCSS.checkbox}>
                        <input type="checkbox" />  Accept terms and conditions
                </div>
                    <div className={SignUpCSS["signup-btn"]}>
                        <input type="button"
                         name="" value="Archieve logs" id="signin-btn" onClick={() => signUp()} />
                    </div>
                </form>
            </div>
            <ToastContainer />
            <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>STARTUP LOGS</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className={SignUpCSS["modal-bodyy"]}>
                            {
            res &&
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <th>HostName</th>
                                <th>Local Time</th>
                            </thead>
                        {res.map((item, index) => (
                            <tbody>
                                <tr key={index}>
                                    <td>{item.hostname}</td>
                                    <td>{item.startTimeLocal}</td>
                                </tr>
                            </tbody>
                        ))}
                        </Table>
}
                        </Modal.Body>
                    </Modal>
       
        </div>
    )
}

export default SignUp