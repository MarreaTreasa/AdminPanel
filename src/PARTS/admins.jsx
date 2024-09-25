import React from 'react';

const AdminCard = ({ name, role, contact }) => {
  return (
    <div className="border-t-4 border-blue-700 bg-gray-100 rounded-lg shadow-lg p-4 flex justify-between items-center mb-4">
      <div>
        <h2 className="text-gray-800 font-semibold">{name}</h2>
        <p className="text-gray-600">Role: {role}</p>
        <p className="text-gray-600">Contact: {contact}</p>
      </div>
      <button className="bg-blue-700 text-white px-4 py-2 rounded-lg">Contact</button>
    </div>
  );
};

const AdminList = () => {
  const admins = [
    { name: "John Doe", role: "System Administrator", contact: "91 XXXXXXXXXX" },
    { name: "Jane Smith", role: "Network Administrator", contact: "91 YYYYYYYYYY" },
    // Add more admins as needed
  ];

  return (
    <div className="min-h-screen bg-white py-8">
      <h1 className="text-center text-blue-700 text-4xl font-bold mb-8">Admins</h1>
      <div className="max-w-4xl mx-auto">
        {admins.map((admin, index) => (
          <AdminCard key={index} name={admin.name} role={admin.role} contact={admin.contact} />
        ))}
      </div>
    </div>
  );
};

export default AdminList;
