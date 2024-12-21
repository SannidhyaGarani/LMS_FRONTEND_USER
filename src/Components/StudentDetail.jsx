import React, { useState } from "react";
import AttendanceDetails from "./Attendence"

function StudentDetail() {
    const [student] = useState({
        profile: {
            name: "Ajeet Singh",
            username: "ajeets20435662",
            fatherName: "Yes Name",
            class: "Ist - A (Hi Eng His)",
            photoUrl: "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_640.jpg",
        },
        admissionDetails: {
            id: "S12",
            penNo: "260154405",
            admissionNo: "230077691",
            registrationNo: "gs-2024-1005",
            srNo: "2",
            admissionType: "New",
            rollNo: "230351000041",
            admissionDate: "15 Apr, 2024",
            className: "BCA I St Year",
            section: "I Sem",
            medium: "Hindi",
            stream: "Hi Eng His",
            isRTE: "No",
        },
        personalDetails: {
            name: "Aditya Kumar",
            email: "vishalkumar7253031732@gmail.com",
            mobile: "7253031732",
            whatsapp: "",
            gender: "Male",
            bloodGroup: "O+",
            height: "5.7",
            weight: "60KG",
            dob: "06 Sep, 2004",
            age: "20 Years",
            nationality: "INDIAN",
            city: "Meerut",
            state: "Uttar Pradesh",
        },
        feesDetails: [
            { month: "January", paid: 5000, remaining: 10000 },
            { month: "February", paid: 5000, remaining: 5000 },
            { month: "March", paid: 5000, remaining: 0 },
            { month: "April", paid: 0, remaining: 15000 },
            { month: "May", paid: 0, remaining: 15000 },
        ],
    });

    const totalPaid = student.feesDetails.reduce((sum, item) => sum + item.paid, 0);
    const totalRemaining = student.feesDetails.reduce((sum, item) => sum + item.remaining, 0);

    return (
        <>
            <div className="page-wrapper">
                {/* Top Profile */}
                <div>
                    <div className="row align-items-center">
                        <div className="col-md-4 d-flex justify-content-center mb-4">
                            <div className="profile-container d-flex justify-content-center">
                                <img
                                    src={student.profile.photoUrl}
                                    alt="Student Profile"
                                    className="img-fluid rounded-circle border border-2 border-primary"
                                    style={{ width: "150px", height: "150px", objectFit: "cover" }}
                                />
                            </div>
                        </div>
                        <div className="col-md-8 px-0 rounded-sm mt-4 shadow-sm pe-5 mb-5">
                            <div className="p-1 ps-3 py-3" style={{ backgroundColor: "rgb(227 222 242 / 63%)" }}>
                                <h4>Student Details</h4>
                            </div>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th className="text-muted">Name:</th>
                                        <td>{student.profile.name}</td>
                                    </tr>
                                    <tr>
                                        <th className="text-muted">Username:</th>
                                        <td>{student.profile.username}</td>
                                    </tr>
                                    <tr>
                                        <th className="text-muted">Father Name:</th>
                                        <td>{student.profile.fatherName}</td>
                                    </tr>
                                    <tr>
                                        <th className="text-muted">Class:</th>
                                        <td>{student.profile.class}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* Admission Details */}
                <div className="row mx-auto">
                    <div className="col-lg-6 col-md-12 col-sm-12 mb-0 ps-3 py-3">
                        <div className="card border rounded me-1 pb-3">
                            <div className="p-1 ps-3 py-3" style={{ backgroundColor: "rgb(227 222 242 / 63%)" }}>
                                <h4>Admission Details</h4>
                            </div>
                            <div className="p-3 table-responsive pb-0">
                                <table className="table table-bordered">
                                    <tbody>
                                        {Object.entries(student.admissionDetails).map(([key, value]) => (
                                            <tr key={key}>
                                                <th>{key.replace(/([A-Z])/g, " $1")}</th>
                                                <td>{value}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* Personal Details */}
                    <div className="col-lg-6 col-md-6 col-sm-12 pe-3 py-3">
                        <div className="card border rounded ms-1 pb-3">
                            <div className="p-1 ps-3 py-3" style={{ backgroundColor: "rgb(227 222 242 / 63%)" }}>
                                <h4>Personal Details</h4>
                            </div>
                            <div className="p-3 table-responsive pb-0">
                                <table className="table table-bordered">
                                    <tbody>
                                        {Object.entries(student.personalDetails).map(([key, value]) => (
                                            <tr key={key}>
                                                <th>{key.replace(/([A-Z])/g, " $1")}</th>
                                                <td>{value}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* Fees Details */}
                    <div className="col-lg-6 col-md-6 col-sm-12 pe-3 py-3">
                        <div className="p-1 ps-3 py-3" style={{ backgroundColor: "rgb(227 222 242 / 63%)" }}>
                            <h4>Fees Payment Details</h4>
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="text-muted">Month</th>
                                    <th className="text-muted">Fees Paid</th>
                                    <th className="text-muted">Remaining Fees</th>
                                </tr>
                            </thead>
                            <tbody>
                                {student.feesDetails.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.month}</td>
                                        <td>₹{item.paid}</td>
                                        <td>₹{item.remaining}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <td>Total</td>
                                    <td>₹{totalPaid}</td>
                                    <td>₹{totalRemaining}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <AttendanceDetails />
                </div>
            </div>
        </>
    );
}

export default StudentDetail;
