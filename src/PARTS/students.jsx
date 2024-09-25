import React, { useState } from 'react';

const StudentCard = ({ name, address, college, contact }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="border-t-4 border-blue-700 bg-gray-100 rounded-lg shadow-lg p-4 flex justify-between items-center mb-4">
      <div className="flex items-center">
        <div className="bg-gray-300 rounded-full h-16 w-16 mr-4"></div>
        <div>
          <h2 className="text-gray-800 font-semibold">{name}</h2>
          <p className="text-gray-600">Address: {address}</p>
          <p className="text-gray-600">College: {college}</p>
          <p className="text-gray-600">Contact: {contact}</p>
        </div>
      </div>
      <div className="flex">
        <button className="bg-blue-700 text-white px-4 py-2 rounded-lg mr-4">Send Notification</button>
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button className="bg-red-500 text-white p-2 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {isHovered && (
            <div className="absolute top-12 left-0 bg-gray-800 text-white text-xs px-2 py-1 rounded-lg">
              Remove Student
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const StudentList = () => {
  const students = [
    { name: "Student 1", address: "1234 St", college: "ABC College", contact: "91 XXXXXXXXXX" },
    { name: "Student 2", address: "5678 St", college: "XYZ College", contact: "91 YYYYYYYYYY" },
    { name: "Student 3", address: "9101 St", college: "PQR College", contact: "91 ZZZZZZZZZZ" },
    { name: "Student 4", address: "1121 St", college: "LMN College", contact: "91 AAAAAAAAA" },
    { name: "Student 5", address: "3141 St", college: "EFG College", contact: "91 BBBBBBBBB" },
    { name: "Student 6", address: "5161 St", college: "HIJ College", contact: "91 CCCCCCCCC" }
  ];

  return (
    <div className="min-h-screen bg-white py-8">
      <h1 className="text-center text-blue-700 text-4xl font-bold mb-8">Student</h1>
      <div className="max-w-4xl mx-auto">
        {students.map((student, index) => (
          <StudentCard
            key={index}
            name={student.name}
            address={student.address}
            college={student.college}
            contact={student.contact}
          />
        ))}
      </div>
    </div>
  );
};

export default StudentList;
