import React from 'react'
import { Link, Links } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
            {/* Sidebar */}
            <div className="sidebar" id="sidebar">
                <div className="sidebar-inner slimscroll">
                    <div id="sidebar-menu" className="sidebar-menu">
                        <ul>
                            <li>
                                <a href="javascript:void(0);" className="d-flex align-items-center border bg-white rounded p-2 mb-4">
                                    <img src="assets/img/icons/global-img.svg" className="avatar avatar-md img-fluid rounded" alt="Profile" />
                                    <span className="text-dark ms-2 fw-normal">Global International</span>
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <h6 className="submenu-hdr"><span>Main</span></h6>
                                <ul>
                                    <li className="submenu">
                                        <a href="javascript:void(0);" className="subdrop active"><i className="ti ti-layout-dashboard" /><span>Dashboard</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="index.html" className="active">Admin Dashboard</a></li>
                                            <li><a href="teacher-dashboard.html">Teacher Dashboard</a></li>
                                            <li><a href="student-dashboard.html">Student Dashboard</a></li>
                                            <li><a href="parent-dashboard.html">Parent Dashboard</a></li>
                                            <li><Link to="/attendencetable">Attendence Table</Link></li>

                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><i className="ti ti-layout-list" /><span>Application</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="chat.html">Chat</a></li>
                                            <li><a href="call.html">Call</a></li>
                                            <li><a href="calendar.html">Calendar</a></li>
                                            <li><a href="email.html">Email</a></li>
                                            <li><a href="todo.html">To Do</a></li>
                                            <li><a href="notes.html">Notes</a></li>
                                            <li><a href="file-manager.html">File Manager</a></li>
                                            
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h6 className="submenu-hdr"><span>Peoples</span></h6>
                                <ul>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><i className="ti ti-school" /><span>Students</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><Link to="/detail">Overview Section</Link></li>
                                            <li><Link to="">Courses</Link></li>
                                            <li><Link to="">Assignments</Link></li>
                                            <li><Link to="/exams">Exams and tests</Link></li>
                                            <li><Link to="">Exam Results</Link></li>
                                            <li><Link to="">Communication</Link></li>
                                            <li><Link to="/time">Timetable</Link></li>
                                            <li><Link to="/teacher">Teacher List</Link></li>
                                            <li><Link to="/profile">Profile and Settings</Link></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><i className="ti ti-user-bolt" /><span>Parents</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="parent-grid.html">All Parents</a></li>
                                            <li><a href="parents.html">Parent List</a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><i className="ti ti-user-shield" /><span>Guardians</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="guardian-grid.html">All Guardians</a></li>
                                            <li><a href="guardians.html">Guardian List</a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><i className="ti ti-users" /><span>Teachers</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="teacher-grid.html">All Teachers</a></li>
                                            <li><a href="teachers.html">Teacher List</a></li>
                                            <li><a href="teacher-details.html">Teacher Details</a></li>
                                            <li><a href="routine-teachers.html">Routine</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h6 className="submenu-hdr"><span>Academic</span></h6>
                                <ul>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><i className="ti ti-school-bell" /><span>Classes</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li> <Link to={'/class'}>Classes</Link> </li>
                                            <li><a href="schedule-classes.html">Schedule</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="class-room.html"><i className="ti ti-building" /><span>Class Room</span></a>
                                    </li>
                                    <li><a href="class-routine.html"><i className="ti ti-bell-school" /><span>Class
                                        Routine</span></a></li>
                                    <li><a href="class-section.html"><i className="ti ti-square-rotated-forbid-2" /><span>Section</span></a></li>
                                    <li><a href="class-subject.html"><i className="ti ti-book" /><span>Subject</span></a></li>
                                    <li><a href="class-syllabus.html"><i className="ti ti-book-upload" /><span>Syllabus</span></a></li>
                                    <li><a href="class-time-table.html"><i className="ti ti-table" /><span>Time
                                        Table</span></a></li>
                                    <li><a href="class-home-work.html"><i className="ti ti-license" /><span>Home
                                        Work</span></a></li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><i className="ti ti-hexagonal-prism-plus" /><span>Examinations</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="exam.html">Exam</a></li>
                                            <li><a href="exam-schedule.html">Exam Schedule</a></li>
                                            <li><a href="grade.html">Grade</a></li>
                                            <li><a href="exam-attendance.html">Exam Attendance</a></li>
                                            <li><a href="exam-results.html">Exam Results</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="academic-reasons.html"><i className="ti ti-lifebuoy" /><span>Reasons</span></a></li>
                                </ul>
                            </li>
                            <li>
                                <h6 className="submenu-hdr"><span>Management</span></h6>
                                <ul>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><i className="ti ti-report-money" /><span>Fees
                                            Collection</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="fees-group.html">Fees Group</a></li>
                                            <li><a href="fees-type.html">Fees Type</a></li>
                                            <li><a href="fees-master.html">Fees Master</a></li>
                                            <li><a href="fees-assign.html">Fees Assign</a></li>
                                            <li><a href="collect-fees.html">Collect Fees</a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><i className="ti ti-notebook" /><span>Library</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="library-members.html">Library Members</a></li>
                                            <li><a href="library-books.html">Books</a></li>
                                            <li><a href="library-issue-book.html">Issue Book</a></li>
                                            <li><a href="library-return.html">Return</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="sports.html"><i className="ti ti-run" /><span>Sports</span></a></li>
                                    <li><a href="players.html"><i className="ti ti-play-football" /><span>Players</span></a>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><i className="ti ti-building-fortress" /><span>Hostel</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="hostel-list.html">Hostel List</a></li>
                                            <li><a href="hostel-rooms.html">Hostel Rooms</a></li>
                                            <li><a href="hostel-room-type.html">Room Type</a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><i className="ti ti-bus" /><span>Transport</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="transport-routes.html">Routes</a></li>
                                            <li><a href="transport-pickup-points.html">Pickup Points</a></li>
                                            <li><a href="transport-vehicle-drivers.html">Vehicle Drivers</a></li>
                                            <li><a href="transport-vehicle.html">Vehicle</a></li>
                                            <li><a href="transport-assign-vehicle.html">Assign Vehicle</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h6 className="submenu-hdr"><span>HRM</span></h6>
                                <ul>
                                    <li><a href="staffs.html"><i className="ti ti-users-group" /><span>Staffs</span></a></li>
                                    <li><a href="departments.html"><i className="ti ti-layout-distribute-horizontal" /><span>Departments</span></a>
                                    </li>
                                    <li><a href="designation.html"><i className="ti ti-user-exclamation" /><span>Designation</span></a></li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><i className="ti ti-calendar-share" /><span>Attendance</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="student-attendance.html">Student Attendance</a></li>
                                            <li><a href="teacher-attendance.html">Teacher Attendance</a></li>
                                            <li><a href="staff-attendance.html">Staff Attendance</a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><i className="ti ti-calendar-stats" /><span>Leaves</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="list-leaves.html">List of leaves</a></li>
                                            <li><a href="approve-request.html">Approve Request</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="holidays.html"><i className="ti ti-briefcase" /><span>Holidays</span></a>
                                    </li>
                                    <li><a href="payroll.html"><i className="ti ti-moneybag" /><span>Payroll</span></a></li>
                                </ul>
                            </li>
                            <li>
                                <h6 className="submenu-hdr"><span>Finance &amp; Accounts</span></h6>
                                <ul>
                                    <li className="submenu">
                                        <a href="javascript:void(0);">
                                            <i className="ti ti-swipe" /><span>Accounts</span><span className="menu-arrow" />
                                        </a>
                                        <ul>
                                            <li><a href="expenses.html">Expenses</a></li>
                                            <li><a href="expenses-category.html">Expense Category</a></li>
                                            <li><a href="accounts-income.html">Income</a></li>
                                            <li><a href="accounts-invoices.html">Invoices</a></li>
                                            <li><a href="invoice.html">Invoice View</a></li>
                                            <li><a href="accounts-transactions.html">Transactions</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h6 className="submenu-hdr"><span>Announcements</span></h6>
                                <ul>
                                    <li><a href="notice-board.html"><i className="ti ti-clipboard-data" /><span>Notice
                                        Board</span></a></li>
                                    <li><a href="events.html"><i className="ti ti-calendar-question" /><span>Events</span></a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h6 className="submenu-hdr"><span>Reports</span></h6>
                                <ul>
                                    <li><a href="attendance-report.html"><i className="ti ti-calendar-due" /><span>Attendance
                                        Report</span></a></li>
                                    <li><a href="class-report.html"><i className="ti ti-graph" /><span>Class Report</span></a>
                                    </li>
                                    <li><a href="student-report.html"><i className="ti ti-chart-infographic" /><span>Student
                                        Report</span></a></li>
                                    <li><a href="grade-report.html"><i className="ti ti-calendar-x" /><span>Grade
                                        Report</span></a></li>
                                    <li><a href="leave-report.html"><i className="ti ti-line" /><span>Leave Report</span></a>
                                    </li>
                                    <li><a href="fees-report.html"><i className="ti ti-mask" /><span>Fees Report</span></a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h6 className="submenu-hdr"><span>User Management</span></h6>
                                <ul>
                                    <li><a href="users.html"><i className="ti ti-users-minus" /><span>Users</span></a></li>
                                    <li><a href="roles-permission.html"><i className="ti ti-shield-plus" /><span>Roles &amp;
                                        Permissions</span></a></li>
                                    <li><a href="delete-account.html"><i className="ti ti-user-question" /><span>Delete
                                        Account Request</span></a></li>
                                </ul>
                            </li>
                            <li>
                                <h6 className="submenu-hdr"><span>Membership</span></h6>
                                <ul>
                                    <li><a href="membership-plans.html"><i className="ti ti-user-plus" /><span>Membership
                                        Plans</span></a></li>
                                    <li><a href="membership-addons.html"><i className="ti ti-cone-plus" /><span>Membership
                                        Addons</span></a></li>
                                    <li><a href="membership-transactions.html"><i className="ti ti-file-power" /><span>Transactions</span></a></li>
                                </ul>
                            </li>
                            <li>
                                <h6 className="submenu-hdr"><span>Content</span></h6>
                                <ul>
                                    <li><a href="pages.html"><i className="ti ti-page-break" /><span>Pages</span></a></li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);">
                                            <i className="ti ti-brand-blogger" /><span>Blog</span><span className="menu-arrow" />
                                        </a>
                                        <ul>
                                            <li><a href="blog.html">All Blogs</a></li>
                                            <li><a href="blog-categories.html">Categories</a></li>
                                            <li><a href="blog-comments.html">Comments</a></li>
                                            <li><a href="blog-tags.html">Tags</a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);">
                                            <i className="ti ti-map-pin-search" /><span>Location</span><span className="menu-arrow" />
                                        </a>
                                        <ul>
                                            <li><a href="countries.html">Countries</a></li>
                                            <li><a href="states.html">States</a></li>
                                            <li><a href="cities.html">Cities</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="testimonials.html"><i className="ti ti-quote" /><span>Testimonials</span></a>
                                    </li>
                                    <li><a href="faq.html"><i className="ti ti-question-mark" /><span>FAQ</span></a></li>
                                </ul>
                            </li>
                            
                            <li>
                                <h6 className="submenu-hdr"><span>Pages</span></h6>
                                <ul>
                                    <li><a href="profile.html"><i className="ti ti-user" /><span>Profile</span></a></li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);">
                                            <i className="ti ti-lock-open" /><span>Authentication</span><span className="menu-arrow" />
                                        </a>
                                        <ul>
                                            <li className="submenu submenu-two"><a href="javascript:void(0);" className>Login<span className="menu-arrow inside-submenu" /></a>
                                                <ul>
                                                    <li><a href="login.html">Cover</a></li>
                                                    <li><a href="login-2.html">Illustration</a></li>
                                                    <li><a href="login-3.html">Basic</a></li>
                                                </ul>
                                            </li>
                                            <li className="submenu submenu-two"><a href="javascript:void(0);" className>Register<span className="menu-arrow inside-submenu" /></a>
                                                <ul>
                                                    <li><a href="register.html">Cover</a></li>
                                                    <li><a href="register-2.html">Illustration</a></li>
                                                    <li><a href="register-3.html">Basic</a></li>
                                                </ul>
                                            </li>
                                            <li className="submenu submenu-two"><a href="javascript:void(0);">Forgot
                                                Password<span className="menu-arrow inside-submenu" /></a>
                                                <ul>
                                                    <li><a href="forgot-password.html">Cover</a></li>
                                                    <li><a href="forgot-password-2.html">Illustration</a></li>
                                                    <li><a href="forgot-password-3.html">Basic</a></li>
                                                </ul>
                                            </li>
                                            <li className="submenu submenu-two"><a href="javascript:void(0);">Reset
                                                Password<span className="menu-arrow inside-submenu" /></a>
                                                <ul>
                                                    <li><a href="reset-password.html">Cover</a></li>
                                                    <li><a href="reset-password-2.html">Illustration</a></li>
                                                    <li><a href="reset-password-3.html">Basic</a></li>
                                                </ul>
                                            </li>
                                            <li className="submenu submenu-two"><a href="javascript:void(0);">Email
                                                Verification<span className="menu-arrow inside-submenu" /></a>
                                                <ul>
                                                    <li><a href="email-verification.html">Cover</a></li>
                                                    <li><a href="email-verification-2.html">Illustration</a></li>
                                                    <li><a href="email-verification-3.html">Basic</a></li>
                                                </ul>
                                            </li>
                                            <li className="submenu submenu-two"><a href="javascript:void(0);">2 Step
                                                Verification<span className="menu-arrow inside-submenu" /></a>
                                                <ul>
                                                    <li><a href="two-step-verification.html">Cover</a></li>
                                                    <li><a href="two-step-verification-2.html">Illustration</a></li>
                                                    <li><a href="two-step-verification-3.html">Basic</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="lock-screen.html">Lock Screen</a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);">
                                            <i className="ti ti-error-404" /><span>Error Pages</span><span className="menu-arrow" />
                                        </a>
                                        <ul>
                                            <li><a href="404-error.html">404 Error</a></li>
                                            <li><a href="500-error.html">500 Error</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="blank-page.html"><i className="ti ti-brand-nuxt" /><span>Blank
                                        Page</span></a></li>
                                    <li><a href="coming-soon.html"><i className="ti ti-file" /><span>Coming Soon</span></a>
                                    </li>
                                    <li><a href="under-maintenance.html"><i className="ti ti-moon-2" /><span>Under
                                        Maintenance</span></a></li>
                                </ul>
                            </li>
                            <li>
                                <h6 className="submenu-hdr"><span>Settings</span></h6>
                                <ul>
                                    <li className="submenu">
                                        <a href="javascript:void(0);">
                                            <i className="ti ti-shield-cog" /><span>General Settings</span><span className="menu-arrow" />
                                        </a>
                                        <ul>
                                            <li><a href="profile-settings.html">Profile Settings</a></li>
                                            <li><a href="security-settings.html">Security Settings</a></li>
                                            <li><a href="notifications-settings.html">Notifications Settings</a></li>
                                            <li><a href="connected-apps.html">Connected Apps</a></li>
                                        </ul>
                                    </li>
                                    {/* Till */}
                                    <li className="submenu">
                                        <a href="javascript:void(0);">
                                            <i className="ti ti-device-laptop" /><span>Website Settings</span><span className="menu-arrow" />
                                        </a>
                                        <ul>
                                            <li><a href="company-settings.html">Company Settings</a></li>
                                            <li><a href="localization.html">Localization</a></li>
                                            <li><a href="prefixes.html">Prefixes</a></li>
                                            <li><a href="preferences.html">Preferences</a></li>
                                            <li><a href="social-authentication.html">Social Authentication</a></li>
                                            <li><a href="language.html">Language</a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);">
                                            <i className="ti ti-apps" /><span>App Settings</span><span className="menu-arrow" />
                                        </a>
                                        <ul>
                                            <li><a href="invoice-settings.html">Invoice Settings</a></li>
                                            <li><a href="custom-fields.html">Custom Fields</a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);">
                                            <i className="ti ti-file-symlink" /><span>System Settings</span><span className="menu-arrow" />
                                        </a>
                                        <ul>
                                            <li><a href="email-settings.html">Email Settings</a></li>
                                            <li><a href="email-templates.html">Email Templates</a></li>
                                            <li><a href="sms-settings.html">SMS Settings</a></li>
                                            <li><a href="otp-settings.html">OTP</a></li>
                                            <li><a href="gdpr-cookies.html">GDPR Cookies</a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);">
                                            <i className="ti ti-zoom-money" /><span>Financial Settings</span><span className="menu-arrow" />
                                        </a>
                                        <ul>
                                            <li><a href="payment-gateways.html">Payment Gateways </a></li>
                                            <li><a href="tax-rates.html">Tax Rates</a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);">
                                            <i className="ti ti-calendar-repeat" /><span>Academic Settings</span><span className="menu-arrow" />
                                        </a>
                                        <ul>
                                            <li><a href="school-settings.html">School Settings </a></li>
                                            <li><a href="religion.html">Religion</a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);">
                                            <i className="ti ti-flag-cog" /><span>Other Settings</span><span className="menu-arrow" />
                                        </a>
                                        <ul>
                                            <li><a href="storage.html">Storage</a></li>
                                            <li><a href="ban-ip-address.html">Ban IP Address</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h6 className="submenu-hdr"><span>Help</span></h6>
                                <ul>
                                    <li><a href="../../../preschool.dreamstechnologies.com/documentation/index.html"><i className="ti ti-file-text" /><span>Documentation</span></a></li>
                                    <li><a href="../../../preschool.dreamstechnologies.com/documentation/changelog.html"><i className="ti ti-exchange" /><span>Changelog</span><span className="badge badge-primary badge-xs text-white fs-10 ms-auto">v1.8.3</span></a></li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><i className="ti ti-menu-2" /><span>Multi
                                            Level</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="javascript:void(0);">Multilevel 1</a></li>
                                            <li className="submenu submenu-two"><a href="javascript:void(0);">Multilevel 2<span className="menu-arrow inside-submenu" /></a>
                                                <ul>
                                                    <li><a href="javascript:void(0);">Multilevel 2.1</a></li>
                                                    <li className="submenu submenu-two submenu-three"><a href="javascript:void(0);">Multilevel 2.2<span className="menu-arrow inside-submenu inside-submenu-two" /></a>
                                                        <ul>
                                                            <li><a href="javascript:void(0);">Multilevel 2.2.1</a></li>
                                                            <li><a href="javascript:void(0);">Multilevel 2.2.2</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="javascript:void(0);">Multilevel 3</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h6 className="submenu-hdr"><span>Support</span></h6>
                                <ul>
                                    <li><a href="contact-messages.html"><i className="ti ti-message" /><span>Contact
                                        Messages</span></a></li>
                                    <li><a href="tickets.html"><i className="ti ti-ticket" /><span>Tickets</span></a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* /Sidebar */}
        </>
    )
}

export default Sidebar
