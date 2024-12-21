import React, { useState } from 'react';

const AttendanceDetails = () => {
    const [selectedYear, setSelectedYear] = useState("2024");

    const attendanceData = [
        { month: "January", year: "2024", totalClasses: 20, attended: 18, remaining: 2 },
        { month: "February", year: "2024", totalClasses: 20, attended: 19, remaining: 1 },
        { month: "March", year: "2024", totalClasses: 20, attended: 20, remaining: 0 },
        { month: "April", year: "2024", totalClasses: 20, attended: 15, remaining: 5 },
        { month: "May", year: "2024", totalClasses: 20, attended: 16, remaining: 4 },
        { month: "June", year: "2024", totalClasses: 20, attended: 16, remaining: 4 },
        { month: "January", year: "2023", totalClasses: 20, attended: 16, remaining: 4 },
        { month: "February", year: "2023", totalClasses: 20, attended: 18, remaining: 2 },
    ];

    const handleYearChange = (e) => {
        setSelectedYear(e.target.value);
    };

    const filteredAttendance = attendanceData.filter(item => item.year === selectedYear);

    return (
        <div className="col-lg-6 col-md-6 col-sm-12 pe-3 py-3 mb-0">
            <div className="p-0" style={{ backgroundColor: "rgb(227 222 242 / 63%)" }}>
                <div className="attencence-1 d-flex">
                    <div
                        className="p-1 ps-3 py-3"
                        style={{ backgroundColor: "rgb(227 222 242 / 63%)" }}
                    >
                        <h4>Attendence Details</h4>
                    </div>
                    <select
                        className="form-select form-select-sm my-2 ms-3"
                        value={selectedYear}
                        onChange={handleYearChange}
                        style={{ width: '120px' }}  
                    >
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                    </select>

                </div>


            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th className="text-muted">Month</th>
                        <th className="text-muted">Total Classes</th>
                        <th className="text-muted">Attended</th>
                        <th className="text-muted">Remaining</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredAttendance.map((item, index) => (
                        <tr key={index}>
                            <td>{item.month}</td>
                            <td>{item.totalClasses}</td>
                            <td>{item.attended}</td>
                            <td>{item.remaining}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AttendanceDetails;
