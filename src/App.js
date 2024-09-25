import Navbar from './NavBar[1]';
import IdeasPage from './IdeasPage';
import ProductsPage from './productsPage';
import StudentList from './PARTS/students';
import CollegeList from './PARTS/colleges';
import FacultyList from './PARTS/faculty';
import OrganizerList from './PARTS/organizers';
import SpeakerList from './PARTS/speakers';
import SponsorList from './PARTS/sponsors';
import IndustryList from './PARTS/industry';
import Dashboard from './Dashboard';
import EventPage from './EventPage';
import AdminList from './PARTS/admins';
import ReqPage from './RequirementsPage';
import './index.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/events" element={<EventPage/>}/>
          <Route path="/particapants" element={<Dashboard />} />
          <Route path="/admins" element={<AdminList />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/faculty" element={<FacultyList />} />
          <Route path="/colleges" element={<CollegeList />} />
          <Route path="/organizers" element={<OrganizerList />} />
          <Route path="/speakers" element={<SpeakerList />} />
          <Route path="/sponsors" element={<SponsorList />} />
          <Route path="/industry" element={<IndustryList />} />
          <Route path="/ideas" element={<IdeasPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/requirements" element={<ReqPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
