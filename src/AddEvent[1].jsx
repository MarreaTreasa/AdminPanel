import { useState } from "react";

function AddEvent() {
  const categories = [
    "workshop",
    "seminar",
    "conference",
    "training",
    "panel discussion",
  ];

  const domains = ["Hospital", "Agriculture", "Sustainability", "Fintech"];

  const colleges = [
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

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedDomain, setSelectedDomain] = useState([]);
  const [selectedColleges, setSelectedColleges] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleCategory = (category,event) => {
    event.preventDefault();
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const toggleDomain = (domain,event) => {
    event.preventDefault();
    if (selectedDomain.includes(domain)) {
      setSelectedDomain(selectedDomain.filter((item) => item !== domain));
    } else {
      setSelectedDomain([...selectedDomain, domain]);
    }
  };

  const handleSelectChange = (college) => {
    setSelectedColleges((prevSelected) =>
      prevSelected.includes(college)
        ? prevSelected.filter((item) => item !== college)
        : [...prevSelected, college]
    );
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredColleges = colleges.filter((college) =>
    college.toLowerCase().includes(searchTerm)
  );

  const handleFocus = () => {
    setDropdownVisible(true);
  };

  const handleBlur = (event) => {
    setTimeout(() => {
      setDropdownVisible(false);
    }, 150);
  };

  return (
    <div className="grid gap-6 px-5 py-0">
      <div className="w-[520px]">
        <h1 className="text-3xl font-semibold">
          Add <span className="text-blue-700">Event</span>
        </h1>
      </div>
      {
            //     form start here
      }
      <form>
        <div className="mb-2">
          <label htmlFor="eventName" className="font-semibold">
            Event name
          </label>
          <input
            type="text"
            className="px-2 py-2 bg-[#f0f0f0] rounded-[5px] w-full border border-white focus:outline-none focus:ring-[#0041E8] focus:border-[#0041E8]"
            placeholder="name"
            required
          />
        </div>
        <div className="mb-2">
          <label htmlFor="eventLocation" className="font-semibold">
            Event Location
          </label>
          <input
            type="text"
            className="px-2 py-2 bg-[#f0f0f0] rounded-[5px] w-full border border-white focus:outline-none focus:ring-[#0041E8] focus:border-[#0041E8]"
            placeholder="location"
            required
          />
        </div>
        <div className="mb-2">
          <label htmlFor="dateTime" className="font-semibold">
            Date & TIme
          </label>
          <input
            type="datetime-local"
            className="px-2 py-2 bg-[#f0f0f0] rounded-[5px] w-full border border-white focus:outline-none focus:ring-[#0041E8] focus:border-[#0041E8]"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="eventDescription" className="font-semibold">
            Event Description
          </label>
          <textarea
            type="text"
            className="px-2 py-2 bg-[#f0f0f0] rounded-[5px] h-52 w-full border border-white focus:outline-none focus:ring-[#0041E8] focus:border-[#0041E8]"
            placeholder="description"
            required
          />
        </div>
        <div className="mb-2">
          <label htmlFor="eventCategory" className="font-semibold">
            Event Category
          </label>
          <br />
          <div className="flex space-x-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={(event) => toggleCategory(category,event)}
                className={`mt-2 px-4 py-1 border-2 rounded-[3px] text-sm ${
                  selectedCategories.includes(category)
                    ? "bg-[#0041E8] text-white border-[#0041E8]"
                    : "bg-white text-[#0041E8] border-[#0041E8]"
                } transition-colors duration-200 ease-in-out`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-2">
          <label htmlFor="eventDomian" className="font-semibold">
            Event Domain
          </label>
          <br />
          <div className="flex space-x-4">
            {domains.map((domain) => (
              <button
                key={domain}
                onClick={(event) => toggleDomain(domain,event)}
                className={`mt-2 px-4 py-1 border-2 rounded-[3px] text-sm ${
                  selectedDomain.includes(domain)
                    ? "bg-[#0041E8] text-white border-[#0041E8]"
                    : "bg-white text-[#0041E8] border-[#0041E8]"
                } transition-colors duration-200 ease-in-out`}
              >
                {domain}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-2">
          <label htmlFor="selectColleges" className="font-semibold">
            Select Colleges
          </label>
          <br />
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={handleSearchChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="mt-1 block w-full py-2 px-3 border bg-[#f0f0f0] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Search for a college"
          />

          {dropdownVisible && (
            <div className=" mt-1 w-fit bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
              {filteredColleges.length > 0 ? (
                filteredColleges.map((college) => (
                  <div
                    key={college}
                    className={`px-4 py-2 cursor-pointer ${
                      selectedColleges.includes(college)
                        ? "bg-blue-500 text-white"
                        : "bg-white text-black"
                    }`}
                    onClick={() => handleSelectChange(college)}
                  >
                    {college}
                  </div>
                ))
              ) : (
                <div className="px-4 py-2 text-gray-500">No results found</div>
              )}
            </div>
          )}
          {selectedColleges.map((college) => (
            <h1 className="text-sm">{`- ${college}`}</h1>
          ))}
        </div>
        <div className="flex justify-between my-2">
          <button
            type="reset"
            className="w-2/5 px-2 py-1 border border-blue-400 rounded-sm mr-2"
          >
            cancel
          </button>
          <button
            type="submit"
            className="w-3/5 bg-[#0041E8] text-white px-2 py-1 rounded-sm"
          >
            save & publish
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddEvent;
