import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const TeacherForm = () => {
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => setShowForm(!showForm);

    const validationSchema = Yup.object({
        // examId: Yup.string().required("ID is required"),
        name: Yup.string().required("Exam Name is required"),
        date: Yup.date().required("Date is required"),
        startTime: Yup.string().required("Start time is required"),
        endTime: Yup.string().required("End time is required"),
        duration: Yup.number().required("Duration is required"),
    });

    const handleSubmit = async (formValues, { resetForm }) => {
        try {
            const response = await axios.post("http://localhost:5500/api/exam/post", formValues);
            console.log("Form data submitted:", response.data);
            resetForm();
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <div className="">
            <div className="page-wrapper">
                <div className="container mt-4">
                    <button className="btn btn-primary" onClick={toggleForm}>
                        Add exams
                    </button>

                    {showForm && (
                        <div className="modal d-block" tabIndex="-1" role="dialog">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Popup Form</h5>
                                        <button type="button" className="close" onClick={toggleForm}>
                                            <span>&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <Formik
                                            initialValues={{
                                                examId: "",
                                                name: "",
                                                date: "",
                                                startTime: "",
                                                endTime: "",
                                                duration: "",
                                            }}
                                            validationSchema={validationSchema}
                                            onSubmit={handleSubmit}
                                        >
                                            {() => (
                                                <Form>
                                                    <div className="form-group">
                                                        <label htmlFor="examId">ID</label>
                                                        <Field
                                                            type="text"
                                                            name="examId"
                                                            className="form-control"
                                                        />
                                                        <ErrorMessage
                                                            name="examId"
                                                            component="div"
                                                            className="text-danger"
                                                        />
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="name">Name</label>
                                                        <Field
                                                            type="text"
                                                            name="name"
                                                            className="form-control"
                                                        />
                                                        <ErrorMessage
                                                            name="name"
                                                            component="div"
                                                            className="text-danger"
                                                        />
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="date">Date</label>
                                                        <Field
                                                            type="date"
                                                            name="date"
                                                            className="form-control"
                                                        />
                                                        <ErrorMessage
                                                            name="date"
                                                            component="div"
                                                            className="text-danger"
                                                        />
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="startTime">Start Time</label>
                                                        <Field
                                                            type="time"
                                                            name="startTime"
                                                            className="form-control"
                                                        />
                                                        <ErrorMessage
                                                            name="startTime"
                                                            component="div"
                                                            className="text-danger"
                                                        />
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="endTime">End Time</label>
                                                        <Field
                                                            type="time"
                                                            name="endTime"
                                                            className="form-control"
                                                        />
                                                        <ErrorMessage
                                                            name="endTime"
                                                            component="div"
                                                            className="text-danger"
                                                        />
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="duration">Duration (mins)</label>
                                                        <Field
                                                            type="number"
                                                            name="duration"
                                                            className="form-control"
                                                        />
                                                        <ErrorMessage
                                                            name="duration"
                                                            component="div"
                                                            className="text-danger"
                                                        />
                                                    </div>

                                                    <div className="modal-footer">
                                                        <button type="submit" className="btn btn-primary mx-2">
                                                            Submit
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn btn-secondary mx-2"
                                                            onClick={toggleForm}
                                                        >
                                                            Close
                                                        </button>
                                                    </div>
                                                </Form>
                                            )}
                                        </Formik>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    
                </div>
            </div>
        </div>
    );
};

export default TeacherForm;
