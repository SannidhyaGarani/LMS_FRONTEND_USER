import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // If using Axios



function StudentPanel() {
    const navigate = useNavigate();
    const [exams, setExams] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        const options = { year: "numeric", month: "long", day: "numeric" };
        return date.toLocaleDateString(undefined, options);
    };

    const fetchExams = async () => {
        try {
            const response = await axios.get("http://localhost:5500/api/exam/get-history"); // Adjust the API endpoint accordingly
            setExams(response?.data);
        } catch (error) {
            console.error("Failed to fetch exams:", error);
        }
    };

    useEffect(() => {
        fetchExams();
    }, []);

    const handleExamClick = (exam) => {
        const currentDate = new Date();
        const examStart = new Date(`${exam.date}T${exam.startTime}Z`);
        const examEnd = new Date(`${exam.date}T${exam.endTime}Z`);

        if (currentDate >= examStart && currentDate <= examEnd) {
            navigate(`/exampaper/${exam.examId}`, { state: { exam } });
        } else if (currentDate < examStart) {
            alert("The exam has not started yet.");
        } else {
            alert("The exam has already ended.");
        }
    };
    const filteredExams = exams.filter((exam) =>
        exam.name && exam.name.toLowerCase().includes(searchTerm.toLowerCase())
    
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

                    <div className="d-flex justify-content-between me-5 mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by Exam Name"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

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
                            {filteredExams.map((item, i) =>(
                                <tr key={i}>
                                    <td>{item.name}</td>
                                    <td>{formatDate(item.date)}</td>
                                    <td>{item.startTime}</td>
                                    <td>{item.endTime}</td>
                                    <td>{item.duration}</td>
                                    <td>
                                        <span
                                            className={`badge ${item.status === "Completed"
                                                ? "badge-soft-success"
                                                : item.status === "Ongoing"
                                                    ? "badge-soft-primary"
                                                    : "badge-soft-danger"
                                                }`}
                                            style={{ cursor: "pointer" }}
                                            onClick={() =>
                                                item.status === "Ongoing" && handleExamClick(item)
                                            }
                                        >
                                            {item.status}
                                        </span>
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

export default StudentPanel;
