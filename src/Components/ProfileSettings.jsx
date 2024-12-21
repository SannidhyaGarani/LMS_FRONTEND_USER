import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ProfileSettings() {
    const [ formData, setFormData] = useState({
        name: "",
        username: "",
        fathername: "",
        class: "",

    });

    const [profileImage, setProfileImage] = useState(null);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setProfileImage(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Save data (you can send it to an API here)
        console.log("Form Submitted:", formData, profileImage);
        alert('Form Submitted')

        // Redirect to ProfileSettings page
        navigate("/profile");
    };

    return (
        <>
            <div className="page-wrapper">
                <div className="content">
                    <div className="d-md-flex d-block align-items-center justify-content-between border-bottom pb-3">
                        <div className="my-auto mb-2">
                            <h3 className="page-title mb-1">Profile Settings</h3>
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
                                        Profile Settings
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
                                    className="d-block rounded p-2 active"
                                >
                                    Profile Settings
                                </Link>
                                <Link
                                    to="/personal"
                                    className="d-block rounded p-2"
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
                                            <h5 className="mb-1">Profile  Settings</h5>
                                            <p>Upload your photo & profile details here</p>
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
                                                            <label className="form-label">First Name</label>
                                                            <input
                                                                type="text"
                                                                name="name"
                                                                value={formData.name}
                                                                onChange={handleChange}
                                                                className="form-control"
                                                                placeholder="Enter  Name"
                                                            />
                                                        </div>

                                                    </div>

                                                    <div className="d-block d-xl-flex">
                                                        <div className="mb-3 flex-fill me-xl-3 me-0">
                                                            <label className="form-label">User Name</label>
                                                            <input
                                                                type="text"
                                                                name="username"
                                                                value={formData.username}
                                                                onChange={handleChange}
                                                                className="form-control"
                                                                placeholder="Enter User Name"
                                                            />
                                                        </div>

                                                    </div>
                                                    <div className="d-block d-xl-flex">
                                                        <div className="mb-3 flex-fill me-xl-3 me-0">
                                                            <label className="form-label">Father's Name</label>
                                                            <input
                                                                type="text"
                                                                name="fathername"
                                                                value={formData.fathername}
                                                                onChange={handleChange}
                                                                className="form-control"
                                                                placeholder="Enter father's Name"
                                                            />
                                                        </div>

                                                    </div>
                                                    <div className="d-block d-xl-flex">
                                                        <div className="mb-3 flex-fill me-xl-3 me-0">
                                                            <label className="form-label">Class</label>
                                                            <input
                                                                type="number"
                                                                name="class"
                                                                value={formData.class}
                                                                onChange={handleChange}
                                                                className="form-control"
                                                                placeholder="Enter class"
                                                            />
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="settings-right-sidebar ms-md-3">
                                            <div className="card">
                                                <div className="card-header p-3">
                                                    <h5>Personal Information</h5>
                                                </div>
                                                <div className="card-body p-3 pb-0">
                                                    <div className="settings-profile-upload">
                                                        <span className="profile-pic">
                                                            {profileImage ? (
                                                                <img
                                                                    src={URL.createObjectURL(profileImage)}
                                                                    alt="Profile"
                                                                    className="img-fluid"
                                                                />
                                                            ) : (
                                                                <img
                                                                    src="assets/img/profiles/avatar-27.jpg"
                                                                    alt="Profile"
                                                                />
                                                            )}
                                                        </span>
                                                        <div className="title-upload">
                                                            <h5>Edit Your Photo</h5>
                                                        </div>
                                                    </div>
                                                    <div className="profile-uploader">
                                                        <input
                                                            type="file"
                                                            onChange={handleFileChange}
                                                            className="form-control"
                                                        />
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

export default ProfileSettings;
