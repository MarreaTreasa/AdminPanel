const SpeakerCard = ({ name, topic, contact }) => {
    return (
      <div className="border-t-4 border-blue-700 bg-gray-100 rounded-lg shadow-lg p-4 flex justify-between items-center mb-4">
        <div>
          <h2 className="text-gray-800 font-semibold">{name}</h2>
          <p className="text-gray-600">Topic: {topic}</p>
          <p className="text-gray-600">Contact: {contact}</p>
        </div>
        <button className="bg-blue-700 text-white px-4 py-2 rounded-lg">View Profile</button>
      </div>
    );
  };
  
  const SpeakerList = () => {
    const speakers = [
      { name: "Dr. Jane", topic: "AI Innovations", contact: "91 XXXXXXXXXX" },
      { name: "Mr. John", topic: "Future of Tech", contact: "91 YYYYYYYYYY" },
      // Add more speakers
    ];
  
    return (
      <div className="min-h-screen bg-white py-8">
        <h1 className="text-center text-blue-700 text-4xl font-bold mb-8">Speakers</h1>
        <div className="max-w-4xl mx-auto">
          {speakers.map((speaker, index) => (
            <SpeakerCard key={index} name={speaker.name} topic={speaker.topic} contact={speaker.contact} />
          ))}
        </div>
      </div>
    );
  };
  
  export default SpeakerList;
  