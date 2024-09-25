const OrganizerCard = ({ name, role, contact }) => {
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
  
  const OrganizerList = () => {
    const organizers = [
      { name: "Alice", role: "Event Coordinator", contact: "91 XXXXXXXXXX" },
      { name: "Bob", role: "Logistics Manager", contact: "91 YYYYYYYYYY" },
      // Add more organizers
    ];
  
    return (
      <div className="min-h-screen bg-white py-8">
        <h1 className="text-center text-blue-700 text-4xl font-bold mb-8">Organizers</h1>
        <div className="max-w-4xl mx-auto">
          {organizers.map((organizer, index) => (
            <OrganizerCard key={index} name={organizer.name} role={organizer.role} contact={organizer.contact} />
          ))}
        </div>
      </div>
    );
  };
  
  export default OrganizerList;
  