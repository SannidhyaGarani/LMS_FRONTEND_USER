import React, { useState, useEffect } from "react";
import axios from "axios";

function StudentEnquiry() {
    const [enquiries, setEnquiries] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newEnquiry, setNewEnquiry] = useState({
        name: "",
        phoneNo: "",
        email: "",
        gender: "",
        appliedFor: "",
        passoutYear: "",
        city: "",
        state: "",
        status: "Pending",
    });

    const [selectedEnquiry, setSelectedEnquiry] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEnquiry({ ...newEnquiry, [name]: value });
    };

    const fetchStudentEnquiries = async () => {
        try {
            const response = await axios.get("http://localhost:5500/api/student-admission-enquiry/get-own");
            setEnquiries(response.data);
        } catch (error) {
            console.error("Error fetching student enquiries:", error);
        }
    };

    const addEnquiry = async () => {
        if (!newEnquiry.name || !newEnquiry.phoneNo || !newEnquiry.email || !newEnquiry.appliedFor || !newEnquiry.passoutYear || !newEnquiry.city || !newEnquiry.state || !newEnquiry.gender) {
            alert("All fields are required!");
            return;
        }

        try {
            const response = await fetch("http://localhost:5500/api/admission-enquiry/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newEnquiry),
            });

            if (!response.ok) {
                throw new Error("Failed to add enquiry");
            }

            const savedEnquiry = await response.json();
            setEnquiries([...enquiries, savedEnquiry]);
            setShowForm(false);
            setNewEnquiry({
                name: "",
                phoneNo: "",
                email: "",
                appliedFor: "",
                passoutYear: "",
                city: "",
                state: "",
                gender: "",
                status: "Pending",
            });
            alert("Enquiry added successfully!");
        } catch (error) {
            console.error("Error adding enquiry:", error);
            alert("An error occurred while adding the enquiry. Please try again.");
        }
    };

    const editEnquiry = async () => {
        if (!newEnquiry.name || !newEnquiry.phoneNo || !newEnquiry.email || !newEnquiry.appliedFor || !newEnquiry.passoutYear || !newEnquiry.city || !newEnquiry.state || !newEnquiry.gender) {
            alert("All fields are required!");
            return;
        }

        try {
            const response = await fetch(`http://localhost:5500/api/admission-enquiry/update/${selectedEnquiry._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newEnquiry),
            });

            if (!response.ok) {
                throw new Error("Failed to update enquiry");
            }

            const updatedEnquiry = await response.json();
            setEnquiries((prevEnquiries) =>
                prevEnquiries.map((enquiry) =>
                    enquiry._id === selectedEnquiry._id ? { ...enquiry, ...newEnquiry } : enquiry
                )
            );

            setShowForm(false);
            setNewEnquiry({
                name: "",
                phoneNo: "",
                email: "",
                appliedFor: "",
                passoutYear: "",
                city: "",
                state: "",
                gender: "",
                status: "Pending",
            });
            setSelectedEnquiry(null);
            alert("Enquiry updated successfully!");
        } catch (error) {
            console.error("Error updating enquiry:", error);
            alert("An error occurred while updating the enquiry. Please try again.");
        }
    };

    useEffect(() => {
        fetchStudentEnquiries();
    }, []);

    const handleRowClick = (enquiry) => {
        setSelectedEnquiry(enquiry);
        setNewEnquiry(enquiry);
        setShowForm(true);
    };

    return (
        <div>
            <div className="page-wrapper">
                <div className="content">
                    <div className="my-auto mb-2">
                        <h3 className="page-title mb-3">My Enquiry</h3>
                        <nav>
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item">
                                    <a href="index.html">Dashboard</a>
                                </li>
                                <li className="breadcrumb-item Present" aria-current="page">
                                    Admission
                                </li>
                                <li className="breadcrumb-item Present" aria-current="page">
                                    My enquiry
                                </li>
                            </ol>
                        </nav>
                    </div>
                    <div className="d-flex justify-content-between my-3 mx-3">
                        <div></div>
                        <button
                            className="btn btn-primary"
                            onClick={() => {
                                setShowForm(true);
                                setSelectedEnquiry(null);
                            }}
                        >
                            Add Enquiry
                        </button>
                    </div>

                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Phone No</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Applied For</th>
                                <th>City</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {enquiries.map((enquiry) => (
                                <tr key={enquiry._id}>
                                    <td>{enquiry.name}</td>
                                    <td>{enquiry.phoneNo}</td>
                                    <td>{enquiry.email}</td>
                                    <td>{enquiry.gender}</td>
                                    <td>{enquiry.appliedFor}</td>
                                    <td>{enquiry.city}</td>
                                    <td>{enquiry.status}</td>
                                    <td>
                                        <button
                                            className="btn btn-primary btn-sm"
                                            onClick={() => handleRowClick(enquiry)}
                                        >
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {enquiries.length === 0 && (
                                <tr>
                                    <td colSpan="8" className="text-center">
                                        No enquiries found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <div className="container mt-5">
                        {showForm && (
                            <div className="modal show d-block mt-5">
                                <div className="modal-dialog modal-lg">
                                    <div className="modal-content shadow">
                                        <div className="modal-header bg-primary text-white">
                                            <h5 className="modal-title text-white">
                                                {selectedEnquiry ? "Edit" : "Add"} Enquiry
                                            </h5>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                onClick={() => setShowForm(false)}
                                            ></button>
                                        </div>
                                        <div className="modal-body">
                                            <form>
                                                <div className="row g-3">
                                                    <div className="col-md-6">
                                                        <label className="form-label">Name</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="name"
                                                            placeholder="Enter full name"
                                                            value={newEnquiry.name}
                                                            onChange={handleInputChange}
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="form-label">Phone No</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="phoneNo"
                                                            placeholder="Enter phone number"
                                                            value={newEnquiry.phoneNo}
                                                            onChange={handleInputChange}
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="form-label">Email</label>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            name="email"
                                                            placeholder="Enter email address"
                                                            value={newEnquiry.email}
                                                            onChange={handleInputChange}
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="form-label">Gender</label>
                                                        <select
                                                            className="form-select"
                                                            name="gender"
                                                            value={newEnquiry.gender}
                                                            onChange={handleInputChange}
                                                        >
                                                            <option value="">Select Gender</option>
                                                            <option value="Male">Male</option>
                                                            <option value="Female">Female</option>
                                                            <option value="Other">Other</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="form-label">Applied For</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="appliedFor"
                                                            placeholder="Enter applied course or job"
                                                            value={newEnquiry.appliedFor}
                                                            onChange={handleInputChange}
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="form-label">Passout Year</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="passoutYear"
                                                            placeholder="Enter passout year"
                                                            value={newEnquiry.passoutYear}
                                                            onChange={handleInputChange}
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="form-label">City</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="city"
                                                            placeholder="Enter city"
                                                            value={newEnquiry.city}
                                                            onChange={handleInputChange}
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="form-label">State</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="state"
                                                            placeholder="Enter state"
                                                            value={newEnquiry.state}
                                                            onChange={handleInputChange}
                                                        />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button
                                                className="btn btn-secondary"
                                                onClick={() => setShowForm(false)}
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                className="btn btn-primary"
                                                onClick={selectedEnquiry ? editEnquiry : addEnquiry}
                                            >
                                                {selectedEnquiry ? "Update" : "Add"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div >
    );
}

export default StudentEnquiry;
