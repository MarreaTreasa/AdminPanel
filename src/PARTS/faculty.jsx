const FacultyCard = ({ name, department, contact }) => {
    return (
      <div className="border-t-4 border-blue-700 bg-gray-100 rounded-lg shadow-lg p-4 flex justify-between items-center mb-4">
        <div>
          <h2 className="text-gray-800 font-semibold">{name}</h2>
          <p className="text-gray-600">Department: {department}</p>
          <p className="text-gray-600">Contact: {contact}</p>
        </div>
        <button className="bg-blue-700 text-white px-4 py-2 rounded-lg">View Profile</button>
      </div>
    );
  };
  
  const FacultyList = () => {
    const faculty = [
      { name: "Dr. Smith", department: "Computer Science", contact: "91 XXXXXXXXXX" },
      { name: "Prof. Johnson", department: "Mathematics", contact: "91 YYYYYYYYYY" },
      // Add more faculty members
    ];
  
    return (
      <div className="min-h-screen bg-white py-8">
        <h1 className="text-center text-blue-700 text-4xl font-bold mb-8">Faculty</h1>
        <div className="max-w-4xl mx-auto">
          {faculty.map((member, index) => (
            <FacultyCard key={index} name={member.name} department={member.department} contact={member.contact} />
          ))}
        </div>
      </div>
    );
  };
  
  export default FacultyList;
  