import React, { useState } from "react";
import jsPDF from "jspdf";
import * as XLSX from "xlsx";

function exportAsPDF() {
  const doc = new jsPDF();
  doc.text("Classes List", 10, 10);
  let rows = classes.map((cls) => [
    cls.id,
    cls.className,
    cls.section,
    cls.students,
    cls.subjects,
    cls.status,
  ]);

  doc.autoTable({
    head: [["ID", "Class", "Section", "Students", "Subjects", "Status"]],
    body: rows,
  });

  doc.save("ClassesList.pdf");
}

function exportAsExcel() {
  const worksheet = XLSX.utils.json_to_sheet(classes);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Classes");
  XLSX.writeFile(workbook, "ClassesList.xlsx");
}


function Classes() {
	// Mock data
	const [classes, setClasses] = useState([
		{
			id: "C138038",
			className: "I",
			section: "A",
			students: 30,
			subjects: 3,
			status: "Active",
		},
		{
			id: "C138039",
			className: "II",
			section: "B",
			students: 25,
			subjects: 4,
			status: "Inactive",
		},
		{
			id: "C138040",
			className: "III",
			section: "A",
			students: 20,
			subjects: 5,
			status: "Active",
		},
	]);

	const [searchTerm, setSearchTerm] = useState("");
	const [filters, setFilters] = useState({
		className: "",
		section: "",
		status: "",
	});
	const [sortOrder, setSortOrder] = useState("ascending");
	const [form, setForm] = useState({
		id: "",
		className: "",
		section: "",
		students: "",
		subjects: "",
		status: "Active",
	});

	const [editMode, setEditMode] = useState(false);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleEditClick = (cls) => {
		setEditMode(true);
		setForm(cls);
	};

	const handleSaveClick = () => {
		if (editMode) {
			setClasses(
				classes.map((cls) => (cls.id === form.id ? { ...cls, ...form } : cls))
			);
		} else {
			setClasses([...classes, { ...form, id: `C${Date.now()}` }]);
		}
		resetForm();
	};

	const handleDeleteClass = (id) => {
		setClasses(classes.filter((cls) => cls.id !== id));
	};

	const resetForm = () => {
		setForm({
			id: "",
			className: "",
			section: "",
			students: "",
			subjects: "",
			status: "Active",
		});
		setEditMode(false);
	};

	// Filter and Sort logic
	const filteredClasses = classes
		.filter((item) => {
			const matchesSearch = item.id.toLowerCase().includes(searchTerm.toLowerCase());
			const matchesFilters =
				(!filters.className || item.className === filters.className) &&
				(!filters.section || item.section === filters.section) &&
				(!filters.status || item.status === filters.status);
			return matchesSearch && matchesFilters;
		})
		.sort((a, b) => {
			if (sortOrder === "ascending") return a.className.localeCompare(b.className);
			if (sortOrder === "descending") return b.className.localeCompare(a.className);
			return 0; // Add "recently viewed" logic if applicable
		});

	// Handlers
	const handleSearch = (e) => setSearchTerm(e.target.value);

	const handleFilterChange = (e) => {
		const { name, value } = e.target;
		setFilters({ ...filters, [name]: value });
	};

	const handleSortChange = (order) => setSortOrder(order);

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
									<li className="breadcrumb-item active" aria-current="page">
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
									<a href="javascript:void(0);" className="dropdown-item rounded-1" onClick={exportAsPDF}>
										<i className="fa fa-file-type-pdf me-1"></i>Export as PDF
									</a>
								</li>
								<li>
									<a href="javascript:void(0);" className="dropdown-item rounded-1" onClick={exportAsExcel}>
										<i className="fa fa-file-type-xls me-1"></i>Export as Excel
									</a>
								</li>
							</ul>
						</div>


					</div>





					<div className="d-flex justify-content-between mb-3">
						<div className="d-flex">

							<select
								className="form-select me-2"
								name="className"
								value={filters.className}
								onChange={handleFilterChange}
							>
								<option value="">All Classes</option>
								<option value="I">I</option>
								<option value="II">II</option>
								<option value="III">III</option>
							</select>
							<select
								className="form-select me-2"
								name="section"
								value={filters.section}
								onChange={handleFilterChange}
							>
								<option value="">All Sections</option>
								<option value="A">A</option>
								<option value="B">B</option>
							</select>
							<select
								className="form-select"
								name="status"
								value={filters.status}
								onChange={handleFilterChange}
							>
								<option value="">All Status</option>
								<option value="Active">Active</option>
								<option value="Inactive">Inactive</option>
							</select>

						</div>
						<div className="w-25 mx-5">
							<input
								type="text"
								className="form-control"
								placeholder="Search by ID"
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
								<option value="ascending">Sort by A-Z</option>
								<option value="descending">Sort by Z-A</option>
								<option value="recent">Recently Viewed</option>
							</select>
						</div>
					</div>


					<table className="table">
						<thead>
							<tr>
								<th>ID</th>
								<th>Class</th>
								<th>Section</th>
								<th>No of Students</th>
								<th>No of Subjects</th>
								<th>Status</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{filteredClasses.length > 0 ? (
								filteredClasses.map((item) => (
									<tr key={item.id}>
										<td>{item.id}</td>
										<td>{item.className}</td>
										<td>{item.section}</td>
										<td>{item.students}</td>
										<td>{item.subjects}</td>
										<td>
											<span
												className={`badge ${item.status === "Active" ? "badge-soft-success" : "badge-soft-danger"
													}`}
											>
												{item.status}
											</span>
										</td>
										<td>
											<div className="dropdown">
												<button
													className="btn btn-sm btn-light dropdown-toggle"
													type="button"
													id={`dropdownMenuButton-${item.id}`}
													data-bs-toggle="dropdown"
													aria-expanded="false"
												>
													<i className="ti ti-dots"></i>
												</button>
												<ul className="dropdown-menu" aria-labelledby={`dropdownMenuButton-${item.id}`}>
													<li>
														<button
															className="dropdown-item"
															onClick={() => handleEditClick(item)}
															data-bs-toggle="modal"
															data-bs-target="#addEditModal"
														>
															Edit
														</button>
													</li>
													<li>
														<button
															className="dropdown-item text-danger"
															onClick={() => handleDeleteClass(item.id)}
														>
															Delete
														</button>
													</li>
												</ul>
											</div>
										</td>

									</tr>
								))
							) : (
								<tr>
									<td colSpan="7" className="text-center">
										No classes found.
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			</div>


			<div
				className="modal fade"
				id="addEditModal"
				tabIndex="-1"
				aria-labelledby="addEditModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="addEditModalLabel">
								{editMode ? "Edit Class" : "Add Class"}
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
								onClick={resetForm}
							></button>
						</div>
						<div className="modal-body">
							<input
								type="text"
								name="className"
								value={form.className}
								onChange={handleInputChange}
								className="form-control mb-3"
								placeholder="Class Name"
							/>
							<input
								type="text"
								name="section"
								value={form.section}
								onChange={handleInputChange}
								className="form-control mb-3"
								placeholder="Section"
							/>
							<input
								type="number"
								name="students"
								value={form.students}
								onChange={handleInputChange}
								className="form-control mb-3"
								placeholder="No of Students"
							/>
							<input
								type="number"
								name="subjects"
								value={form.subjects}
								onChange={handleInputChange}
								className="form-control mb-3"
								placeholder="No of Subjects"
							/>
							<select
								name="status"
								value={form.status}
								onChange={handleInputChange}
								className="form-select"
							>
								<option value="Active">Active</option>
								<option value="Inactive">Inactive</option>
							</select>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-bs-dismiss="modal"
								onClick={resetForm}
							>
								Cancel
							</button>
							<button
								type="button"
								className="btn btn-primary"
								data-bs-dismiss="modal"
								onClick={handleSaveClick}
							>
								Save
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Classes;
