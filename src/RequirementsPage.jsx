// RequirementsPage.js
import React,{useState} from "react";
import ReqCard from "./reqcards";

const ReqPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const ideas = [
    {
      number: "01",
      title: "UI / UX Creative Design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga.",
    },
    {
      number: "02",
      title: "Web Development Best Practices",
      description:
        "Best practices for web development include optimizing performance and enhancing user experience.",
    },
    {
      number: "03",
      title: "Mobile Application Design",
      description:
        "Creating engaging mobile experiences with a focus on usability and accessibility.",
    },
    {
      number: "04",
      title: "Data Visualization Techniques",
      description:
        "Effective data visualization techniques to convey information clearly and efficiently.",
    },
    {
      number: "05",
      title: "API Design Principles",
      description:
        "Key principles for designing robust and user-friendly APIs.",
    },
    {
      number: "06",
      title: "Content Strategy Planning",
      description:
        "Developing a content strategy that aligns with business goals.",
    },
    // Add more ideas as needed
  ];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter ideas based on search term
  const filteredIdeas = ideas.filter((idea) =>
    idea.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="flex w-full justify-between px-32">
        <h1 className="text-center text-blue-700 text-4xl font-bold mb-8">
          Requirements
        </h1>
        <div className="flex h-8">
          <input
            type="text"
            className="px-2 py-2 bg-[#f0f0f0] w-48 rounded-[5px] w-full border border-white focus:outline-none focus:ring-[#0041E8] focus:border-[#0041E8]"
            placeholder="search"
            value={searchTerm} // Bind the input value to state
            onChange={handleSearchChange} // Update state on input change
            required
          />
          <button className="ml-2 bg-blue-700 px-2 py-1 text-white rounded-sm">
            search
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
        {filteredIdeas.map((idea, index) => (
          <ReqCard
            key={index}
            number={idea.number}
            title={idea.title}
            description={idea.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ReqPage;
