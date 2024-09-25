import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import Calendar styles
import EventCard from "./EventCard[1]";
import AddEventPopup from "./AddEventPopup"; // Import the popup component

const EventPage = () => {
  const [date, setDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null); // Manage selected event
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State for popup visibility

  const handleEventClick = (eventDetails) => {
    setSelectedEvent(eventDetails);
    const eventDate = new Date(eventDetails.created_date);
    setDate(eventDate); // Update the calendar's date with the event date
    console.log("Event clicked:", eventDetails);
  };

  const handleAddEventClick = () => {
    setIsPopupOpen(true); // Open the popup
  };

  const closePopup = () => {
    setIsPopupOpen(false); // Close the popup
  };

  return (
    <div className="flex h-screen p-6 bg-gray-100">
      {/* Left section for Upcoming Events with a scrollable area */}
      <div className="p-4" style={{ maxHeight: "80vh", overflowY: "auto" }}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Upcoming <span className="text-blue-700">Events</span>
          </h2>
          {/* Add Event Button */}
          <button
            className="bg-blue-700 text-white p-2 rounded-md text-lg hover:bg-blue-800 relative group"
            title="Add New Event" // Tooltip for accessibility
            onClick={handleAddEventClick} // Set the onClick handler to open the popup
          >
            + Add event{/* Tooltip text */}
          </button>
        </div>
        {/* Reuse the EventCard component */}
        <EventCard
          created_date="2024-11-02"
          title="Sample Event 1"
          description="This is a sample event description."
          onClick={() =>
            handleEventClick({
              created_date: "2024-11-02",
              title: "Sample Event 1",
              description: "This is a sample event description.",
            })
          }
        />

        <EventCard
          created_date="2024-09-24"
          title="Sample Event 2"
          description="This is a sample event description."
          onClick={() =>
            handleEventClick({
              created_date: "2024-09-24",
              title: "Sample Event 2",
              description: "This is a sample event description.",
            })
          }
        />
        <EventCard
          created_date="2024-10-26"
          title="Sample Event 3"
          description="This is a sample event description."
          onClick={() =>
            handleEventClick({
              created_date: "2024-10-26",
              title: "Sample Event 3",
              description: "This is a sample event description.",
            })
          }
        />
        {/* Add more EventCards as needed */}
      </div>

      {/* Right section for Event Overview and Notifications */}
      <div className="w-1/3 grow ml-6">
        {/* Event Overview - Conditionally rendered based on selectedEvent */}
        {selectedEvent && (
          <div className="mb-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              {/* Event Overview Heading */}
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">
                  Events <span className="text-blue-700">Overview</span>
                </h2>
                {/* Toggle Arrow */}
                <button
                  onClick={() => setSelectedEvent(null)} // Clear selected event on click
                  className="text-red-700"
                  title="Close Overview"
                >
                  X {/* Change to a downward arrow if needed */}
                </button>
              </div>
              {/* Display calendar */}
              <div className="flex justify-center mt-4">
                <Calendar
                  onChange={setDate}
                  value={date} // Set the calendar's value to the selected event date
                  className="rounded-lg"
                />
              </div>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg w-full">
                View Full Schedule
              </button>

              {/* Selected Event Details */}
              <div className="mb-6 bg-white p-6 rounded-lg">
                <p className="text-lg text-gray-700 my-2">
                  <strong>Title:</strong> {selectedEvent.title}
                </p>
                <p className="text-lg text-gray-700 my-2">
                  <strong>Created Date:</strong> {selectedEvent.created_date}
                </p>
                <p className="text-lg text-gray-700 my-2">
                  <strong>Description:</strong> {selectedEvent.description}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Notifications */}
        <div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Notifications
            </h2>
            {/* Notification Item */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <img
                  src="https://via.placeholder.com/24"
                  alt="Avatar"
                  className="rounded-full mr-2"
                />
                <div>
                  <p className="text-gray-900">Name</p>
                  <p className="text-gray-400 text-sm">Role</p>
                </div>
              </div>
              <a href="#" className="text-blue-500">
                View
              </a>
            </div>
            {/* Add more notifications as needed */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <img
                  src="https://via.placeholder.com/24"
                  alt="Avatar"
                  className="rounded-full mr-2"
                />
                <div>
                  <p className="text-gray-900">Name</p>
                  <p className="text-gray-400 text-sm">Role</p>
                </div>
              </div>
              <a href="#" className="text-blue-500">
                View
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Render the AddEventPopup if it is open */}
      {isPopupOpen && <AddEventPopup onClose={closePopup} />}
    </div>
  );
};

export default EventPage;
