import './App.css'
import Header from './Components/Header.jsx'
import PageWrapper from './Components/PageWrapper.jsx';
import Sidebar from './Components/Sidebar.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Classes from './Components/Classes/Classes.jsx';
import Teachers from './Components/Teachers.jsx';
import StudentDetail from './Components/StudentDetail.jsx';
import ProfileSettings from './Components/ProfileSettings.jsx';
import PersonalSettings from './Components/PersonalSettings.jsx';
import Timetable from './Components/Timetable.jsx';
import AttendenceTable from './Components/AttendenceTable.jsx';
import AdminExam from './Components/AdminExam.jsx';
import ExamPaper from './Components/ExamPaper.jsx';
import TeacherForm from './Components/TeacherForm.jsx';
import ApiFetch from './Components/ApiFetch.jsx';
import Admission from './Components/Admission.jsx';
import StudentPanel from './Components/StudentExam.jsx';
import TeacherExam from './Components/TeacherExam.jsx';
import StudentEnquiry from './Components/StudentEnquiry.jsx';
function App() {

  return (
    <>
      <Router>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<PageWrapper />} />
          <Route path="/class" element={<Classes />} />
          <Route path="/teacher" element={<Teachers />} />
          <Route path="/detail" element={<StudentDetail />} />
          <Route path="/profile" element={<ProfileSettings />} />
          <Route path="/personal" element={<PersonalSettings />} />
          <Route path="/attendencetable" element={<AttendenceTable />} />
          <Route path="/exams" element={<AdminExam />} />
          <Route path="/exampaper/35005" element={<ExamPaper />} />
          <Route path="/time" element={<Timetable/>} />
          <Route path="/teacherform" element={<TeacherForm/>} /> 
          <Route path="/admission" element={<Admission/>} /> 
          <Route path="/api" element={<ApiFetch/>} /> 
          <Route path="/examteacher" element={<TeacherExam/>} /> 
          <Route path="/examstudent" element={<StudentPanel/>} /> 
          <Route path="/studentenquiry" element={<StudentEnquiry/>} /> 
        </Routes> 
      </Router>
    </>
  )
}

export default App
