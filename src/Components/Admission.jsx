import React, { useState, useEffect } from "react";
import axios from "axios";

function AdmissionEnquiry() {
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

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedEnquiry, setSelectedEnquiry] = useState(null); // to track the selected enquiry for edit

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEnquiry({ ...newEnquiry, [name]: value });
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
            setEnquiries([...enquiries, { ...savedEnquiry, id: Date.now().toString() }]);
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
    
            // Update the enquiries array with the latest values
            setEnquiries((prevEnquiries) =>
                prevEnquiries.map((enquiry) =>
                    enquiry._id === selectedEnquiry._id ? { ...enquiry, ...newEnquiry } : enquiry
                )
            );
    
            setShowForm(false); // Close the form
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
            setSelectedEnquiry(null); // Reset the selected enquiry
            alert("Enquiry updated successfully!");
        } catch (error) {
            console.error("Error updating enquiry:", error);
            alert("An error occurred while updating the enquiry. Please try again.");
        }
    };
    
   

    const fetchAdmission = async () => {
        try {
            const response = await axios.get('http://localhost:5500/api/admission-enquiry/get');
            setEnquiries(response.data);
        } catch (error) {
            console.error("Error fetching enquiries:", error);
        }
    };

    const handleDeleteEnquiry = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:5500/api/admission-enquiry/delete/${id}`, {
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.status === 200) {
                setEnquiries((prevEnquiries) => prevEnquiries.filter((item) => item._id !== id));
            } else {
                console.error("Failed to delete enquiry:", response.data);
            }
        } catch (error) {
            console.error("Error deleting enquiry:", error);
        }
    };

    useEffect(() => {
        fetchAdmission();
    }, []);

    const filteredEnquiries = enquiries.filter((enquiry) => {
        const term = searchTerm.toLowerCase();
        return (
            enquiry.name.toLowerCase().includes(term) ||
            enquiry.phoneNo.toLowerCase().includes(term) ||
            enquiry.email.toLowerCase().includes(term) ||
            enquiry.appliedFor.toLowerCase().includes(term) ||
            enquiry.passoutYear.toLowerCase().includes(term) ||
            enquiry.city.toLowerCase().includes(term) ||
            enquiry.state.toLowerCase().includes(term) ||
            enquiry.gender.toLowerCase().includes(term)
        );
    });

    const handleRowClick = (enquiry) => {
        setSelectedEnquiry(enquiry);

        setNewEnquiry(enquiry);
        setShowForm(true)
    };

    const updateStatus = (id, status) => {
        const updatedEnquiries = enquiries.map((enquiry) =>
            enquiry._id === id ? { ...enquiry, status } : enquiry
        );
        setEnquiries(updatedEnquiries);
    };

    return (
        <div>
            <div className="page-wrapper">
                <div className="content">
                    <h3 className="page-title mb-1">Admission Enquiry</h3>
                    <div className="d-flex justify-content-between my-3 mx-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search..."
                            style={{ width: "300px" }}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="btn btn-primary" onClick={() => { setShowForm(true); setSelectedEnquiry(null); }}>
                            Add Member
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
                            {filteredEnquiries.map((enquiry) => (
                                <tr key={enquiry._id}>
                                    <td onClick={() => handleRowClick(enquiry)}>{enquiry.name}</td>
                                    <td onClick={() => handleRowClick(enquiry)}>{enquiry.phoneNo}</td>
                                    <td onClick={() => handleRowClick(enquiry)}>{enquiry.email}</td>
                                    <td onClick={() => handleRowClick(enquiry)}>{enquiry.gender}</td>
                                    <td onClick={() => handleRowClick(enquiry)}>{enquiry.appliedFor}</td>
                                    <td onClick={() => handleRowClick(enquiry)}>{enquiry.city}</td>
                                    <td>{enquiry.status}</td>
                                    <td>
                                        <button
                                            className="btn btn-danger btn-sm mx-2 mx-2"
                                            onClick={() => handleDeleteEnquiry(enquiry._id)}
                                        >
                                            Delete
                                        </button>
                                        <button
                                            className="btn btn-primary btn-sm"
                                            onClick={() => handleRowClick(enquiry)}
                                        >
                                            Edit
                                        </button>

                                    </td>
                                </tr>
                            ))}
                            {filteredEnquiries.length === 0 && (
                                <tr>
                                    <td colSpan="7" className="text-center">No results found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                    {/* Add/Edit Member Popup */}
                    {showForm && (
                        <div className="modal show d-block">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">{selectedEnquiry ? "Edit" : "Add"} New Member</h5>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            onClick={() => setShowForm(false)}
                                        ></button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="mb-3">
                                                <label className="form-label">Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="name"
                                                    value={newEnquiry.name}
                                                    onChange={handleInputChange}
                                                />
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label">Phone No</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="phoneNo"
                                                    value={newEnquiry.phoneNo}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Email</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    name="email"
                                                    value={newEnquiry.email}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="mb-3">
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
                                           
                                            <div className="mb-3">
                                                <label className="form-label">Applied For</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="appliedFor"
                                                    value={newEnquiry.appliedFor}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Passout Year</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="passoutYear"
                                                    value={newEnquiry.passoutYear}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">City</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="city"
                                                    value={newEnquiry.city}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">State</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="state"
                                                    value={newEnquiry.state}
                                                    onChange={handleInputChange}
                                                />
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
    );
}

export default AdmissionEnquiry;
