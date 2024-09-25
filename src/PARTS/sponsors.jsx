const SponsorCard = ({ name, amount, contact }) => {
    return (
      <div className="border-t-4 border-blue-700 bg-gray-100 rounded-lg shadow-lg p-4 flex justify-between items-center mb-4">
        <div>
          <h2 className="text-gray-800 font-semibold">{name}</h2>
          <p className="text-gray-600">Contribution: {amount}</p>
          <p className="text-gray-600">Contact: {contact}</p>
        </div>
        <button className="bg-blue-700 text-white px-4 py-2 rounded-lg">View Details</button>
      </div>
    );
  };
  
  const SponsorList = () => {
    const sponsors = [
      { name: "Company A", amount: "$10,000", contact: "91 XXXXXXXXXX" },
      { name: "Company B", amount: "$15,000", contact: "91 YYYYYYYYYY" },
      // Add more sponsors
    ];
  
    return (
      <div className="min-h-screen bg-white py-8">
        <h1 className="text-center text-blue-700 text-4xl font-bold mb-8">Sponsors</h1>
        <div className="max-w-4xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <SponsorCard key={index} name={sponsor.name} amount={sponsor.amount} contact={sponsor.contact} />
          ))}
        </div>
      </div>
    );
  };
  
  export default SponsorList;
  