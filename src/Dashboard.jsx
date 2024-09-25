import React, { useState } from "react";
import { Link } from "react-router-dom";
import collegeImage from "./Pics/college.png";
import facultyImage from "./Pics/faculty.png";
import industryImage from "./Pics/industry.png";
import sponsorImage from "./Pics/sponsors.png";
import speakerImage from "./Pics/speakers.png";
import organizerImage from "./Pics/organizers.png";
import studentImage from "./Pics/student.png";
import adminImage from "./Pics/admin.png";

function Dashboard() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [role, setRole] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    companyName: "",
    collegeName: "",
  });

  const collegeList = [
    "College of Engineering, Trivandrum",
    "NIT Calicut",
    "Government Engineering College, Thrissur",
    "Rajiv Gandhi Institute of Technology, Kottayam",
    "TKM College of Engineering, Kollam",
    "Model Engineering College, Thrikkakara",
    "Government Engineering College, Barton Hill",
    "Mar Athanasius College of Engineering, Kothamangalam",
    "Government Engineering College, Kozhikode",
    "SCMS School of Engineering and Technology, Ernakulam",
    "Amal Jyothi College of Engineering, Kanjirappally",
    "Federal Institute of Science and Technology (FISAT), Angamaly",
    "Vidya Academy of Science and Technology, Thrissur",
    "LBS Institute of Technology for Women, Trivandrum",
  ];

  const users = [
    {
      title: "Student",
      description: "A good design is not only aesthetically pleasing, but also functional.",
      link: "/students",
      image: studentImage,
    },
    {
      title: "Faculty",
      description: "A good design is not only aesthetically pleasing, but also functional.",
      link: "/faculty",
      image: facultyImage,
    },
    {
      title: "Industry",
      description: "A good design is not only aesthetically pleasing, but also functional.",
      link: "/industry",
      image: industryImage,
    },
    {
      title: "Colleges",
      description: "A good design is not only aesthetically pleasing, but also functional.",
      link: "/colleges",
      image: collegeImage,
    },
    {
      title: "Sponsors",
      description: "A good design is not only aesthetically pleasing, but also functional.",
      link: "/sponsors",
      image: sponsorImage,
    },
    {
      title: "Speakers",
      description: "A good design is not only aesthetically pleasing, but also functional.",
      link: "/speakers",
      image: speakerImage,
    },
    {
      title: "Organizers",
      description: "A good design is not only aesthetically pleasing, but also functional.",
      link: "/organizers",
      image: organizerImage,
    },
    {
      title: "Admins",
      description: "A good design is not only aesthetically pleasing, but also functional.",
      link: "/admins",
      image: adminImage,
    },
  ];

  const handleRoleChange = (event) => {
    setRole(event.target.value);
    setFormData({ ...formData, companyName: "", collegeName: "" });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("User Created:", { role, ...formData });
    setFormData({
      name: "",
      email: "",
      password: "",
      companyName: "",
      collegeName: "",
    });
    setIsPopupOpen(false);
    setRole("");
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center mb-8 px-8">
        <h1 className="text-3xl font-bold text-blue-700">Users</h1>
        <button
          onClick={() => setIsPopupOpen(true)}
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Create User
        </button>
      </div>

      {/* User Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center">
        {users.map((user, index) => (
          <Link
            to={user.link || "#"}
            key={index}
            className="w-64"
            style={{ textDecoration: "none" }}
          >
            <div className="bg-gray-100 border-t-4 border-blue-700 shadow-md rounded-lg p-6 transform transition-transform hover:scale-105 hover:shadow-lg duration-300 cursor-pointer">
              <div className="flex flex-col items-center mb-4">
                <img
                  src={user.image}
                  alt={user.title}
                  className="w-24 h-24 rounded-lg mb-4"
                />
                <h2 className="text-xl font-semibold text-blue-700 text-center">
                  {user.title}
                </h2>
              </div>
              <p className="text-gray-600 text-center">{user.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Popup for creating new user */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-2xl font-semibold mb-4">Create New User</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Role</label>
                <select
                  value={role}
                  onChange={handleRoleChange}
                  className="border border-gray-300 rounded-lg w-full p-2"
                  required
                >
                  <option value="" disabled>
                    Select Role
                  </option>
                  <option value="Student">Student</option>
                  <option value="Faculty">Faculty</option>
                  <option value="Industry">Industry</option>
                  <option value="College">College</option>
                  <option value="Organizer">Organizer</option>
                  <option value="Sponsor">Sponsor</option>
                  <option value="Speaker">Speaker</option>
                  <option value="Alumni">Alumni</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>

              {/* Name field for Students, Faculty, Alumni, Admin */}
              {(role === "Student" || role === "Faculty" || role === "Alumni" || role === "Admin") && (
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">{role}'s Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-lg w-full p-2"
                    required
                  />
                </div>
              )}

              {/* College dropdown for everyone except Industry */}
              {role !== "Industry" && (
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">College Name</label>
                  <select
                    name="collegeName"
                    value={formData.collegeName}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-lg w-full p-2"
                    required
                  >
                    <option value="">Select College</option>
                    {collegeList.map((college, index) => (
                      <option key={index} value={college}>
                        {college}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Company name only for Industry role */}
              {role === "Industry" && (
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-lg w-full p-2"
                    required
                  />
                </div>
              )}

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg w-full p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg w-full p-2"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsPopupOpen(false)}
                  className="mr-2 bg-gray-400 text-white py-2 px-4 rounded-lg hover:bg-gray-500 transition duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Create User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
