import React from 'react'
const timetableData = [
  {
    day: "Monday",
    sessions: [
      {
        time: "09:00 - 09:45 AM",
        subject: "Maths",
        teacher: { name: "Jacquelin", image: "assets/img/teachers/teacher-07.jpg" },
      },
      {
        time: "09:45 - 10:30 AM",
        subject: "English",
        teacher: { name: "Hellana", image: "assets/img/teachers/teacher-03.jpg" }
      },
      
      {
        time: "11:30 - 12:30 PM",
        subject: "Physics",
        teacher: { name: "Daniel", image: "assets/img/teachers/teacher-02.jpg" },
      },
      {
        time: "12:30 - 01:30 PM",
        subject: "Chemistry",
        teacher: { name: "Daniel", image: "assets/img/teachers/teacher-02.jpg" },
      },
      {
        time: "01:30 - 02:30 PM",
        subject: "Biology",
        teacher: { name: "Daniel", image: "assets/img/teachers/teacher-02.jpg" },
      },
    ],
  },
  {
    day: "Tuesday",
    sessions: [
      {
        time: "09:00 - 09:45 AM",
        subject: "Maths",
        teacher: { name: "Jacquelin", image: "assets/img/teachers/teacher-07.jpg" },
      },
      {
        time: "09:45 - 10:30 AM",
        subject: "English",
        teacher: { name: "Hellana", image: "assets/img/teachers/teacher-03.jpg" }
      },
      
      {
        time: "11:30 - 12:30 PM",
        subject: "Physics",
        teacher: { name: "Daniel", image: "assets/img/teachers/teacher-02.jpg" },
      },
      {
        time: "12:30 - 01:30 PM",
        subject: "Chemistry",
        teacher: { name: "Daniel", image: "assets/img/teachers/teacher-02.jpg" },
      },
      {
        time: "01:30 - 02:30 PM",
        subject: "Biology",
        teacher: { name: "Daniel", image: "assets/img/teachers/teacher-02.jpg" },
      },
    ],
  },
  {
    day: "Wednesday",
    sessions: [
      {
        time: "09:00 - 09:45 AM",
        subject: "Maths",
        teacher: { name: "Jacquelin", image: "assets/img/teachers/teacher-07.jpg" },
      },
      {
        time: "09:45 - 10:30 AM",
        subject: "English",
        teacher: { name: "Hellana", image: "assets/img/teachers/teacher-03.jpg" }
      },
      
      {
        time: "11:30 - 12:30 PM",
        subject: "Physics",
        teacher: { name: "Daniel", image: "assets/img/teachers/teacher-02.jpg" },
      },
      {
        time: "12:30 - 01:30 PM",
        subject: "Chemistry",
        teacher: { name: "Daniel", image: "assets/img/teachers/teacher-02.jpg" },
      },
      {
        time: "01:30 - 02:30 PM",
        subject: "Biology",
        teacher: { name: "Daniel", image: "assets/img/teachers/teacher-02.jpg" },
      },
    ],
  },
  {
    day: "Thursday",
    sessions: [
      {
        time: "09:00 - 09:45 AM",
        subject: "Maths",
        teacher: { name: "Jacquelin", image: "assets/img/teachers/teacher-07.jpg" },
      },
      {
        time: "09:45 - 10:30 AM",
        subject: "English",
        teacher: { name: "Hellana", image: "assets/img/teachers/teacher-03.jpg" }
      },
      
      {
        time: "11:30 - 12:30 PM",
        subject: "Physics",
        teacher: { name: "Daniel", image: "assets/img/teachers/teacher-02.jpg" },
      },
      {
        time: "12:30 - 01:30 PM",
        subject: "Chemistry",
        teacher: { name: "Daniel", image: "assets/img/teachers/teacher-02.jpg" },
      },
      {
        time: "01:30 - 02:30 PM",
        subject: "Biology",
        teacher: { name: "Daniel", image: "assets/img/teachers/teacher-02.jpg" },
      },
    ],
  },
  {
    day: "Friday",
    sessions: [
      {
        time: "09:00 - 09:45 AM",
        subject: "Maths",
        teacher: { name: "Jacquelin", image: "assets/img/teachers/teacher-07.jpg" },
      },
      {
        time: "09:45 - 10:30 AM",
        subject: "English",
        teacher: { name: "Hellana", image: "assets/img/teachers/teacher-03.jpg" }
      },
      
      {
        time: "11:30 - 12:30 PM",
        subject: "Physics",
        teacher: { name: "Daniel", image: "assets/img/teachers/teacher-02.jpg" },
      },
      {
        time: "12:30 - 01:30 PM",
        subject: "Chemistry",
        teacher: { name: "Daniel", image: "assets/img/teachers/teacher-02.jpg" },
      },
      {
        time: "01:30 - 02:30 PM",
        subject: "Biology",
        teacher: { name: "Daniel", image: "assets/img/teachers/teacher-02.jpg" },
      },
    ],
  },
  {
    day: "Saturday",
    sessions: [
      {
        time: "09:00 - 09:45 AM",
        subject: "Maths",
        teacher: { name: "Jacquelin", image: "assets/img/teachers/teacher-07.jpg" },
      },
      {
        time: "09:45 - 10:30 AM",
        subject: "English",
        teacher: { name: "Hellana", image: "assets/img/teachers/teacher-03.jpg" }
      },
      
      {
        time: "11:30 - 12:30 PM",
        subject: "Physics",
        teacher: { name: "Daniel", image: "assets/img/teachers/teacher-02.jpg" },
      },
      {
        time: "12:30 - 01:30 PM",
        subject: "Chemistry",
        teacher: { name: "Daniel", image: "assets/img/teachers/teacher-02.jpg" },
      },
      {
        time: "01:30 - 02:30 PM",
        subject: "Biology",
        teacher: { name: "Daniel", image: "assets/img/teachers/teacher-02.jpg" },
      },
    ],
  },
  
  
];

function Timetable() {
    return (
      <>
        <div className="page-wrapper">
          <div className="content">
            <h3 className="page-title mb-3">Time Table</h3>
            <div className="card">
              <div className="card-body pb-0">
                <div className="d-flex flex-nowrap overflow-auto">
                  {timetableData.map((dayData, index) => (
                    <div key={index} className="d-flex flex-column me-4 flex-fill">
                      <div className="mb-3">
                        <h6>{dayData.day}</h6>
                      </div>
                      {dayData.sessions.map((session, idx) => (
                        <div key={idx} className={`bg-light rounded p-3 mb-4`}>
                          <p className="d-flex align-items-center text-nowrap mb-1">
                            <i className="ti ti-clock me-1"></i>
                            {session.time}
                          </p>
                          <p className="text-dark">Subject: {session.subject}</p>
                          <div className="bg-white rounded p-1 mt-3">
                            <a href="teacher-details.html" className="text-muted d-flex align-items-center">
                              <span className="avatar avatar-sm me-2">
                                <img src={session.teacher.image} alt="Teacher" />
                              </span>
                              {session.teacher.name}
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Timetable;