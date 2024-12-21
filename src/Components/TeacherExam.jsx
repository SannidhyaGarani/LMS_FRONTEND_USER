import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function TeacherExam() {
    const navigate = useNavigate();
    const [classes, setClasses] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");



    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        const options = { year: "numeric", month: "long", day: "numeric" };
        return date.toLocaleDateString(undefined, options);
    };

    const validationSchema = Yup.object({
        name: Yup.string().required("Exam Name is required"),
        date: Yup.date().required("Date is required"),
        startTime: Yup.string().required("Start time is required"),
        endTime: Yup.string().required("End time is required"),
    });

    const toggleForm = () => setShowForm(!showForm);
    const toggleEditForm = () => setShowEditForm(!showEditForm);

    const calculateDuration = (startTime, endTime) => {
        const start = new Date(`1970-01-01T${startTime}Z`);
        const end = new Date(`1970-01-01T${endTime}Z`);
        const duration = (end - start) / (1000 * 60);
        return duration;
    };

    const handleSubmit = async (formValues, { resetForm }) => {
        console.log("Submitting form with values:", formValues);

        const { startTime, endTime } = formValues;
        const duration = calculateDuration(startTime, endTime);

        try {
            const response = await axios.post('http://localhost:5500/api/exam/post', {
                ...formValues,
                duration: duration,
            }, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
            });
            console.log("Form data submitted:", response.data);
            resetForm();
            fetchExams();
        } catch (error) {
            console.error("Error submitting form:", error);
        }
        toggleForm(false);
    };
    const handleEdit = (exam) => {
        console.log("Editing exam:", exam); // Debugging
        setEditExam(exam);
        toggleEditForm();
    };

    const handleEditSubmit = async (formValues, { resetForm }) => {
        console.log("Submitting edit form with values:", formValues);

        const { startTime, endTime } = formValues;
        const duration = calculateDuration(startTime, endTime);
        console.log("Calculated duration:", duration);

        try {
            const payload = {
                ...formValues,
                duration,
            };
            console.log("Payload being sent:", payload);

            const response = await axios.put(
                `http://localhost:5500/api/exam/update/${formValues._id}`,
                payload,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log("Edit form data submitted:", response.data);
            resetForm();
            toggleEditForm();
            fetchExams();
        } catch (error) {
            console.error("Error updating exam:", error);
        }
    };

    const [editExam, setEditExam] = useState(null);



    const handleDeleteOne = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:5500/api/exam/delete-history/${id}`, {
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.status === 200) {
                console.log("Deleted exam:", id);
                setClasses((prevClasses) => prevClasses.filter((item) => item._id !== id));
            } else {
                console.error("Failed to delete exam:", response.data);
            }
        } catch (error) {
            console.error("Error deleting exam:", error);
        }
    };


    const fetchExams = async () => {
        try {
            const response = await axios.get('http://localhost:5500/api/exam/get-history');
            setClasses(response.data); // Ensure this sets the correct updated list
        } catch (error) {
            console.error("Error fetching exams:", error);
        }
    };

    useEffect(() => {
        fetchExams();
    }, []);


    const filteredExams = classes.filter((classes) =>
        classes.name && classes.name.toLowerCase().includes(searchTerm.toLowerCase())

    );


    return (
        <div>
            <div className="page-wrapper">
                <div className="content">
                    <div className="d-md-flex d-block align-items-center justify-content-between mb-3">
                        <div className="my-auto mb-2">
                            <h3 className="page-title mb-1">Exams List</h3>
                            <nav>
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item">
                                        <a href="/">Dashboard</a>
                                    </li>
                                    <li className="breadcrumb-item Completed" aria-current="page">
                                        Exams and tests
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>


                    <div className="d-flex justify-content-between my-3 mx-3">

                        <input
                            type="text"
                            className="form-control"
                            style={{ width: "300px" }}
                            placeholder="Search by Exam Name"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="btn btn-primary me-2" onClick={toggleForm}>
                            Add Exam
                        </button>

                    </div>

                    {showForm && (
                        <div className="modal d-block" tabIndex="-1" role="dialog">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Add New Exam</h5>
                                        <button type="button" className="close" onClick={toggleForm}>
                                            <span>&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <Formik
                                            initialValues={{
                                                name: "",
                                                date: "",
                                                startTime: "",
                                                endTime: "",
                                            }}
                                            validationSchema={validationSchema}
                                            onSubmit={handleSubmit}
                                        >
                                            {() => (
                                                <Form>
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

                                                    <div className="modal-footer">
                                                        <button type="submit" className="btn btn-primary" >
                                                            Submit
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn btn-secondary"
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
                    {showEditForm && editExam && (
                        <div className="modal d-block" tabIndex="-1" role="dialog">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Edit Exam</h5>
                                        <button type="button" className="close" onClick={toggleEditForm}>
                                            <span>&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <Formik
                                            initialValues={{
                                                _id: editExam?._id || "", // Default to empty strings to avoid undefined issues
                                                name: editExam?.name || "",
                                                date: editExam?.date ? editExam.date.split("T")[0] : "",
                                                startTime: editExam?.startTime || "",
                                                endTime: editExam?.endTime || "",
                                            }}
                                            validationSchema={validationSchema}
                                            onSubmit={handleEditSubmit}
                                            enableReinitialize // Reinitialize form values when `editExam` changes
                                        >
                                            {() => (
                                                <Form>
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

                                                    <div className="modal-footer">
                                                        <button type="submit" className="btn btn-primary " >
                                                            Update
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn btn-secondary"
                                                            onClick={toggleEditForm}
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


                    <table className="table">
                        <thead>
                            <tr>
                                <th>Exam Name</th>
                                <th>Exam Date</th>
                                <th>Start</th>
                                <th>End</th>
                                <th>Duration</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredExams.map((item, i) => (
                                <tr key={i}>
                                    <td>{item.name}</td>
                                    <td>{formatDate(item.date)}</td>
                                    <td>{item.startTime}</td>
                                    <td>{item.endTime}</td>
                                    <td>{item.duration} minutes</td>
                                    <td>
                                        <button
                                            className="btn btn-danger mx-2"
                                            onClick={() => handleDeleteOne(item._id)}
                                        >
                                            Delete
                                        </button>
                                        <button
                                            className="btn btn-primary mx-2"
                                            onClick={() => handleEdit(item)}
                                        >
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default TeacherExam;
