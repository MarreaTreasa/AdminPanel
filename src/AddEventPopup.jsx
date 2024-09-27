import React, { useState } from "react";

const AddEventPopup = ({ onClose }) => {
  const [eventName, setEventName] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventDomain, setEventDomain] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventCategory, setEventCategory] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [newEventType, setNewEventType] = useState("");
  const [newEventDomain, setNewEventDomain] = useState("");
  const [newEventCategory, setNewEventCategory] = useState("");
  const eventCategories=["Microevent","Main event"]
  const eventTypes = ["Workshop", "Seminar", "Conference", "Training", "Other"];
  const eventDomains = [
    "Hospital",
    "Agriculture",
    "Sustainability",
    "Fintech",
    "Other",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      eventName,
      eventType,
      eventDomain,
      eventDate,
      eventCategory,
      eventDescription,
    });
    onClose(); // Close the popup after submission
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Add New Event</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1">Event Name:</label>
            <input
              type="text"
              className="border border-gray-300 p-2 w-full"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1">Event Category:</label>
            <select
              className="border border-gray-300 p-2 w-full"
              value={eventCategory}
              onChange={(e) => {
                const value = e.target.value;
                setEventCategory(value);
                if (value === "Other") {
                  setNewEventCategory(""); // Reset input field
                }
              }}
            >
              <option value="">Select Event Category</option>
              {eventCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            {eventCategory === "Other" && (
              <input
                type="text"
                className="border border-gray-300 p-2 mt-2 w-full"
                placeholder="Enter new event domain"
                value={newEventCategory}
                onChange={(e) => setNewEventCategory(e.target.value)}
              />
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1">Event Type:</label>
            <select
              className="border border-gray-300 p-2 w-full"
              value={eventType}
              onChange={(e) => {
                const value = e.target.value;
                setEventType(value);
                if (value === "Other") {
                  setNewEventType(""); // Reset input field
                }
              }}
            >
              <option value="">Select Event Type</option>
              {eventTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {eventType === "Other" && (
              <input
                type="text"
                className="border border-gray-300 p-2 mt-2 w-full"
                placeholder="Enter new event type"
                value={newEventType}
                onChange={(e) => setNewEventType(e.target.value)}
              />
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1">Event Domain:</label>
            <select
              className="border border-gray-300 p-2 w-full"
              value={eventDomain}
              onChange={(e) => {
                const value = e.target.value;
                setEventDomain(value);
                if (value === "Other") {
                  setNewEventDomain(""); // Reset input field
                }
              }}
            >
              <option value="">Select Event Domain</option>
              {eventDomains.map((domain) => (
                <option key={domain} value={domain}>
                  {domain}
                </option>
              ))}
            </select>
            {eventDomain === "Other" && (
              <input
                type="text"
                className="border border-gray-300 p-2 mt-2 w-full"
                placeholder="Enter new event domain"
                value={newEventDomain}
                onChange={(e) => setNewEventDomain(e.target.value)}
              />
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-1">Event Date:</label>
            <input
              type="date"
              className="border border-gray-300 p-2 w-full"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Event Description:</label>
            <textarea
              className="border border-gray-300 p-2 w-full"
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-700 text-white px-4 py-2 rounded"
            >
              Add Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEventPopup;
