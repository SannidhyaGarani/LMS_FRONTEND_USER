import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function PersonalSettings() {
    const [formData, setFormData] = useState({
        gender: "",
        bloodgroup: "",
        email: "",
        whatsapp: "",
        phoneNumber: "",
        height:"",
        weight:"",
        dob:"",
        age:"",
        nationality: "",
        state: "",
        city: "",
        postalCode: "",
    });


    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        // Save data (you can send it to an API here)
        console.log("Form Submitted:", formData);
        alert("Form Submitted:")

        // Redirect to PersonalSettings page
        navigate("/profile");
    };

    return (
        <>
            <div className="page-wrapper">
                <div className="content">
                    <div className="d-md-flex d-block align-items-center justify-content-between border-bottom pb-3">
                        <div className="my-auto mb-2">
                            <h3 className="page-title mb-1">Personal Details Settings</h3>
                            <nav>
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item">
                                        <Link to="/">Dashboard</Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <Link to="/settings">Students</Link>
                                    </li>
                                    <li
                                        className="breadcrumb-item active"
                                        aria-current="page"
                                    >
                                        Personal Settings
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-2 col-xl-3">
                            <div className="pt-3 d-flex flex-column list-group mb-4">
                                <Link
                                    to="/profile"
                                    className="d-block rounded p-2"
                                >
                                    Profile Settings
                                </Link>
                                <Link
                                    to="/personal"
                                    className="d-block rounded p-2  active"
                                >
                                    Personal Information
                                </Link>

                            </div>
                        </div>
                        <div className="col-xxl-10 col-xl-9">
                            <div className="flex-fill border-start ps-3">
                                <form onSubmit={handleSubmit}>
                                    <div className="d-flex align-items-center justify-content-between flex-wrap border-bottom pt-3 mb-3">
                                        <div className="mb-3">
                                            <h5 className="mb-1">Personal details Settings</h5>
                                            <p>Update your personal details here</p>
                                        </div>
                                        <div className="mb-3">
                                            <button className="btn btn-light me-2" type="button">
                                                Cancel
                                            </button>
                                            <button className="btn btn-primary" type="submit">
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                    <div className="d-md-flex d-block">
                                        <div className="flex-fill">
                                            <div className="card">
                                                <div className="card-header p-3">
                                                    <h5>Personal Information</h5>
                                                </div>
                                                <div className="card-body p-3 pb-0">

                                                    <div className="d-block d-xl-flex">

                                                        <div className="mb-3 flex-fill me-xl-3 me-0">
                                                            <label className="form-label">Phone Number</label>
                                                            <input
                                                                type="text"
                                                                name="phoneNumber"
                                                                value={formData.phoneNumber}
                                                                onChange={handleChange}
                                                                className="form-control"
                                                                placeholder="Enter Phone Number"
                                                            />
                                                        </div>
                                                        <div className="mb-3 flex-fill ">
                                                            <label className="form-label">Whatsapp Number</label>
                                                            <input
                                                                type="text"
                                                                name="whatsapp"
                                                                value={formData.whatsapp}
                                                                onChange={handleChange}
                                                                className="form-control"
                                                                placeholder="Enter Whatsapp Number"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label className="form-label">Email Address</label>
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            className="form-control"
                                                            placeholder="Enter Email"
                                                        />
                                                    </div>
                                                    <div className="d-block d-xl-flex">
                                                        <div className="mb-3 flex-fill me-xl-3 me-0">
                                                            <label className="form-label">Gender</label>
                                                            <input
                                                                type="text"
                                                                name="gender"
                                                                value={formData.gender}
                                                                onChange={handleChange}
                                                                className="form-control"
                                                                placeholder="Enter Gender"
                                                            />
                                                        </div>
                                                        <div className="mb-3 flex-fill">
                                                            <label className="form-label">Blood Group</label>
                                                            <input
                                                                type="text"
                                                                name="bloodgroup"
                                                                value={formData.bloodgroup}
                                                                onChange={handleChange}
                                                                className="form-control"
                                                                placeholder="Enter Blood Group"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="d-block d-xl-flex">
                                                        <div className="mb-3 flex-fill me-xl-3 me-0">
                                                            <label className="form-label">Height</label>
                                                            <input
                                                                type="text"
                                                                name="height"
                                                                value={formData.height}
                                                                onChange={handleChange}
                                                                className="form-control"
                                                                placeholder="Enter Height"
                                                            />
                                                        </div>
                                                        <div className="mb-3 flex-fill">
                                                            <label className="form-label">Weight</label>
                                                            <input
                                                                type="text"
                                                                name="weight"
                                                                value={formData.weight}
                                                                onChange={handleChange}
                                                                className="form-control"
                                                                placeholder="Enter Weight"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="d-block d-xl-flex">
                                                        <div className="mb-3 flex-fill me-xl-3 me-0">
                                                            <label className="form-label">Date Of Birth</label>
                                                            <input
                                                                type="text"
                                                                name="dob"
                                                                value={formData.dob}
                                                                onChange={handleChange}
                                                                className="form-control"
                                                                placeholder="Enter Date Of Birth"
                                                            />
                                                        </div>
                                                        <div className="mb-3 flex-fill">
                                                            <label className="form-label">Age</label>
                                                            <input
                                                                type="text"
                                                                name="age"
                                                                value={formData.age}
                                                                onChange={handleChange}
                                                                className="form-control"
                                                                placeholder="Enter age"
                                                            />
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header p-3">
                                                    <h5>Address Information</h5>
                                                </div>
                                                <div className="card-body p-3 pb-0">
                                                    
                                                    <div className="d-block d-xl-flex">
                                                        <div className="mb-3 flex-fill me-xl-3 me-0">
                                                            <label className="form-label">Nationality</label>
                                                            <input
                                                                type="text"
                                                                name="nationality"
                                                                value={formData.nationality}
                                                                onChange={handleChange}
                                                                className="form-control"
                                                                placeholder="Enter Nationality"
                                                            />
                                                        </div>
                                                        <div className="mb-3 flex-fill">
                                                            <label className="form-label">State </label>
                                                            <input
                                                                type="text"
                                                                name="state"
                                                                value={formData.state}
                                                                onChange={handleChange}
                                                                className="form-control"
                                                                placeholder="Enter State"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="d-block d-xl-flex">
                                                        <div className="mb-3 flex-fill me-xl-3 me-0">
                                                            <label className="form-label">City</label>
                                                            <input
                                                                type="text"
                                                                name="city"
                                                                value={formData.city}
                                                                onChange={handleChange}
                                                                className="form-control"
                                                                placeholder="City"
                                                            />
                                                        </div>
                                                        <div className="mb-3 flex-fill">
                                                            <label className="form-label">Pin Code</label>
                                                            <input
                                                                type="text"
                                                                name="postalCode"
                                                                value={formData.postalCode}
                                                                onChange={handleChange}
                                                                className="form-control"
                                                                placeholder="Enter Pin Code"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PersonalSettings;
