
import react from 'react'
import { useState } from 'react'

function StudentEnquiry() {
    const [enquiry, setEnquiry] = useState({
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

    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEnquiry({ ...enquiry, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!enquiry.name || !enquiry.phoneNo || !enquiry.email || !enquiry.appliedFor || !enquiry.passoutYear || !enquiry.city || !enquiry.state || !enquiry.gender) {
            alert("All fields are required!");
            return;
        }
        try {
            const response = await fetch("http://localhost:5500/api/admission-enquiry/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(enquiry),
            });
            const data = await response.json();
            if (response.ok) {
                setSuccessMessage(data.message);
                setErrorMessage(null);
                setEnquiry({
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
                alert("Enquiry added successfully!");
            } else {
                setErrorMessage(data.message);
                setSuccessMessage(null);
            }
        } catch (error) {
            console.error(error);
            setErrorMessage("An error occurred while submitting the form.");
            setSuccessMessage(null);
        }
    };
    return (
        <>
            <div className="page-wrapper ">
                <div>
                    <div className="my-auto m-5 pb-5 pt-4 ps-5">
                        <h3 className="page-title mb-1">Admission Enquiry</h3>
                        <nav>
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item">
                                    <a href="index.html">Dashboard</a>
                                </li>
                                <li className="breadcrumb-item Present" aria-current="page">
                                    Admission Enquiry
                                </li>
                            </ol>
                        </nav>
                    </div>
    
                    
                    <form className=' mx-auto' style={{ maxWidth: "1100px" }} >
                        <div className="row">


                            <div className="mb-3 col-6">
                                <label className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={enquiry.name}
                                    onChange={handleInputChange}
                                    required="true" 
                                />
                            </div>
                            <div className="mb-3 col-6">
                                <label className="form-label">Phone No</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="phoneNo"
                                    value={enquiry.phoneNo}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-3 col-6">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={enquiry.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-3 col-6">
                                <label className="form-label">Gender</label>
                                <select
                                    className="form-select"
                                    name="gender"
                                    value={enquiry.gender}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="mb-3 col-6">
                                <label className="form-label">Applied For</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="appliedFor"
                                    value={enquiry.appliedFor}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-3 col-6">
                                <label className="form-label">Passout Year</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="passoutYear"
                                    value={enquiry.passoutYear}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-3 col-6">
                                <label className="form-label">City</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="city"
                                    value={enquiry.city}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-3 col-6">
                                <label className="form-label">State</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="state"
                                    value={enquiry.state}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <button
                                type="button"
                                className="btn btn-primary w-100"
                                onClick={handleSubmit}
                            >
                                Submit Enquiry
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default StudentEnquiry