const IndustryCard = ({ name, sector, contact }) => {
    return (
      <div className="border-t-4 border-blue-700 bg-gray-100 rounded-lg shadow-lg p-4 flex justify-between items-center mb-4">
        <div>
          <h2 className="text-gray-800 font-semibold">{name}</h2>
          <p className="text-gray-600">Sector: {sector}</p>
          <p className="text-gray-600">Contact: {contact}</p>
        </div>
        <button className="bg-blue-700 text-white px-4 py-2 rounded-lg">Inquire</button>
      </div>
    );
  };
  
  const IndustryList = () => {
    const industries = [
      { name: "Tech Corp", sector: "Technology", contact: "91 XXXXXXXXXX" },
      { name: "Health Inc", sector: "Healthcare", contact: "91 YYYYYYYYYY" },
      // Add more industries here
    ];
  
    return (
      <div className="min-h-screen bg-white py-8">
        <h1 className="text-center text-blue-700 text-4xl font-bold mb-6">Industries</h1>
        <div className="max-w-4xl mx-auto">
          {industries.map((industry, index) => (
            <IndustryCard 
              key={index}
              name={industry.name}
              sector={industry.sector}
              contact={industry.contact}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default IndustryList;
  