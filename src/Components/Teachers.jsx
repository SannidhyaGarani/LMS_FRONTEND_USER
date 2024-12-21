import React, { useState } from "react";
import jsPDF from "jspdf";
import * as XLSX from "xlsx";

function exportAsPDF(classes) {
    const doc = new jsPDF();
    doc.text("Classes List", 10, 10);
    let rows = classes.map((cls) => [
        cls.id,
        cls.classTime,
        cls.number,
        cls.name,
        cls.subject,
        cls.status,
    ]);

    doc.autoTable({
        head: [["ID", "Class", "number", "name", "subject", "Status"]],
        body: rows,
    });

    doc.save("ClassesList.pdf");
}

function exportAsExcel(classes) {
    const worksheet = XLSX.utils.json_to_sheet(classes);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Classes");
    XLSX.writeFile(workbook, "ClassesList.xlsx");
}

function Teachers() {
    // Mock data
    const [classes, setClasses] = useState([
        {
            id: "35005",
            classTime: "10am-11am",
            number: "1234567890",
            name: "Mr.Sharma",
            subject: "Physics",
            status: "Present",
        },
        {
            id: "35006",
            classTime: "11am-12pm",
            number: "1234567890",
            name: "Mrs.Roy",
            subject: "Chemistry",
            status: "Absent",
        },
        {
            id: "35072",
            classTime: "12pm-01pm",
            number: "1234567890",
            name: "Mr.Jain",
            subject: "Biology",
            status: "Present",
        },
        {
            id: "35008",
            classTime: "01pm-02pm",
            number: "1234567890",
            name: "Mr.Joshi",
            subject: "Mathematics",
            status: "Present",
        },
        
    ]);

    const [searchTerm, setSearchTerm] = useState("");
    const [filters, setFilters] = useState({
        classTime: "",
        number: "",
        status: "",
    });
    const [sortOrder, setSortOrder] = useState("ascending");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Handlers
    const handleSearch = (e) => setSearchTerm(e.target.value);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const handleSortChange = (order) => setSortOrder(order);

    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

    const filteredClasses = classes
        .filter((item) => {
            const matchesSearch = (item.id.toLowerCase().includes(searchTerm.toLowerCase()));
            const matchesFilters =
                (!filters.classTime || item.classTime === filters.classTime) &&
                (!filters.number || item.number === filters.number) &&
                (!filters.status || item.status === filters.status);
            return matchesSearch && matchesFilters;
        })
        

    // Paginate the filtered list
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedClasses = filteredClasses.slice(startIndex, startIndex + itemsPerPage);
    const totalPages = Math.ceil(filteredClasses.length / itemsPerPage);

    return (
        <div>
            <div className="page-wrapper">
                <div className="content">
                    <div className="d-md-flex d-block align-items-center justify-content-between mb-3">
                        <div className="my-auto mb-2">
                            <h3 className="page-title mb-1">Classes List</h3>
                            <nav>
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item">
                                        <a href="index.html">Dashboard</a>
                                    </li>
                                    <li className="breadcrumb-item Present" aria-current="page">
                                        All Classes
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div className="export mb-3">
                            <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                id="exportDropdown"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Export
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end p-3" aria-labelledby="exportDropdown">
                                <li>
                                    <a href="javascript:void(0);" className="dropdown-item rounded-1" onClick={() => exportAsPDF(paginatedClasses)}>
                                        <i className="fa fa-file-type-pdf me-1"></i>Export as PDF
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" className="dropdown-item rounded-1" onClick={() => exportAsExcel(paginatedClasses)}>
                                        <i className="fa fa-file-type-xls me-1"></i>Export as Excel
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between mb-3">
                        <div className="d-flex">
                           
                            
                            <select
                                className="form-select"
                                name="status"
                                value={filters.status}
                                onChange={handleFilterChange}
                            >
                                <option value="">All Status</option>
                                <option value="Present">Present</option>
                                <option value="Absent">Absent</option>
                            </select>
                        </div>
                        <div className="w-25 mx-5">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search by Roll no"
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                        </div>
                        <div>
                            <select
                                className="form-select"
                                onChange={(e) => handleSortChange(e.target.value)}
                                value={sortOrder}
                            >
                                <option value="ascending">Sort Name by A-Z</option>
                                <option value="descending">Sort Name by Z-A</option>
                                <option value="recent">Recently Viewed</option>
                            </select>
                        </div>
                    </div>

                    <table className="table">
                        <thead>
                            <tr>
                                <th>Subject</th>
                                <th>Teacher Name</th>
                                <th>Teacher id</th>
                                <th>Class Time</th>
                                <th>Contact Number</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedClasses.length > 0 ? (
                                paginatedClasses.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.subject}</td>
                                        <td>{item.name}</td>
                                        <td>{item.id}</td>
                                        <td>{item.classTime}</td>
                                        <td>{item.number}</td>
                                        <td>
                                            <span
                                                className={`badge ${item.status === "Present"
                                                    ? "badge-soft-success"
                                                    : "badge-soft-danger"
                                                    }`}
                                            >
                                                {item.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="text-center">
                                        No Students found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                    {/* Pagination Controls */}
                    <div className="ms-2 my-3 ">
                        <nav aria-label="Page navigation">
                            <ul className="pagination">
                                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                    <button
                                        className="page-link"
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                    >
                                        Previous
                                    </button>
                                </li>
                                <li className="page-item disabled">
                                    <span className="page-link">
                                        Page {currentPage} of {totalPages}
                                    </span>
                                </li>
                                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                    <button
                                        className="page-link"
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                    >
                                        Next
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Teachers;
