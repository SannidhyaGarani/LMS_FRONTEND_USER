import React, { useState } from "react";
const attendanceData = {
  year: 2024,
  class: "SCI-003",
  time: "10:30 am - 12:15 pm",
  teacher: "Ms. Wilson",
  students: [
    
    {
      id: "STU-001",
      name: "John Doe",
      image: "https://cdn.pixabay.com/photo/2024/04/03/05/49/created-by-ai-8672131_640.png",
      attendance: Array(30).fill(""), 
    },
    {
      id: "STU-002",
      name: "John Doe",
      image: "https://cdn.pixabay.com/photo/2024/04/03/05/49/created-by-ai-8672131_640.png",
      attendance: Array(30).fill(""), 
    },
    {
      id: "STU-003",
      name: "John Doe",
      image: "https://cdn.pixabay.com/photo/2024/04/03/05/49/created-by-ai-8672131_640.png",
      attendance: Array(30).fill(""), 
    },
    {
      id: "STU-004",
      name: "Jane Doe",
      image: "https://cdn.pixabay.com/photo/2024/04/03/05/49/created-by-ai-8672131_640.png",
      attendance: Array(30).fill(""), 
    },
    {
      id: "STU-005",
      name: "Sam Smith",
      image: "https://cdn.pixabay.com/photo/2024/04/03/05/49/created-by-ai-8672131_640.png",
      attendance: Array(30).fill(""), 
    },
  ],
};

function AttendanceTable() {
  const [filteredMonth, setFilteredMonth] = useState("February");
  const [updatedData, setUpdatedData] = useState(attendanceData);

  const datesInMonth = Array.from({ length: 30 }, (_, i) => `Feb ${i + 1}`);
  const handleAttendanceChange = (studentIndex, dateIndex, value) => {
    const newData = { ...updatedData };
    newData.students[studentIndex].attendance[dateIndex] = value;
    setUpdatedData(newData);
  };

  const handleSubmit = () => {
    console.log("Updated Attendance Data:", updatedData);
  };

  return (
    <div className="page-wrapper">
      <div className="container mt-5">
        <div className="card shadow-sm">
          <div className="card-body">
            {/* Header Section */}
            <header className="mb-4">
              <h2 className="card-title mb-3 fs-4">Attendance Tracking</h2>
              <p>
                {updatedData.year} - {filteredMonth}
              </p>
              <p>
                {updatedData.class} ({updatedData.time})
              </p>
              <p>Teacher: {updatedData.teacher}</p>
            </header>

            {/* Month Filter */}
            <div className="mb-3 w-25">
              <label htmlFor="monthFilter" className="form-label">
                Filter by Month:
              </label>
              <select
                id="monthFilter"
                className="form-select"
                value={filteredMonth}
                onChange={(e) => setFilteredMonth(e.target.value)}
              >
                <option value="February">February</option>
                <option value="March">March</option>
              </select>
            </div>

            <table className="table table-bordered table-sm text-center">
              <thead className="table-light">
                <tr>
                  <th>Student ID</th>
                  <th>Student Name</th>
                  <th>Image</th>
                  {datesInMonth.map((date, index) => (
                    <th key={index} style={{ fontSize: "10px" }}>
                      {date}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {updatedData.students.map((student, studentIndex) => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>
                      <img
                        src={student.image}
                        alt={student.name}
                        className="rounded-circle"
                        width="40"
                      />
                    </td>
                    {student.attendance.map((status, dateIndex) => (
                      <td key={dateIndex}>
                        {status ? (
                          <span
                            className={`badge ${
                              status === "Present"
                                ? "bg-success"
                                : status === "Absent"
                                ? "bg-danger"
                                : "bg-warning"
                            }`}
                          >
                            {status}
                          </span>
                        ) : (
                          <select
                            className="form-select form-select-sm"
                            onChange={(e) =>
                              handleAttendanceChange(
                                studentIndex,
                                dateIndex,
                                e.target.value
                              )
                            }
                          >
                            <option value=""></option>
                            <option value="Present">Present</option>
                            <option value="Absent">Absent</option>
                            <option value="Tardy">Tardy</option>
                          </select>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Submit Button */}
            <button
              className="btn btn-primary mt-3"
              onClick={handleSubmit}
            >
              Save Attendance
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttendanceTable;
