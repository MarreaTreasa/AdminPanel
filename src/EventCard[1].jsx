import React from "react";

function EventCard({ created_date, title, description, onClick }) {
  return (
    <div className="relative top-0 hover:cursor-pointer" onClick={onClick}>
      <div className="w-[887px] h-[21px] left-0 top-0 relative bg-[#0041e8] rounded-[10px]"></div>
      <div className="w-[887px] h-fit left-0 top-[-15px] relative bg-[#f0f0f0] rounded-[10px] px-3 py-2">
        <div className="flex justify-between text-sm">
          <h1>{created_date}</h1>
          <h1>10 days left</h1>
        </div>
        <div className="my-3 w-80">
          <h1 className="text-3xl font-bold">{title}</h1>
        </div>
        <div className="">
          <h1 className="">{description}</h1>
        </div>
        <div className="my-4">
          <div className="h-[1px] bg-gray-500" />
        </div>
        <div className="flex justify-between my-2">
          <div className="w-[189.35px] h-[34.25px] flex">
            <img
              className="w-[34.25px] h-[34.25px] left-0 relative rounded-full"
              src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726704000&semt=ais_hybrid"
              alt=""
            />
            <img
              className="w-[34.25px] h-[34.25px] left-[-5px] relative rounded-full"
              src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726704000&semt=ais_hybrid"
              alt=""
            />
            <img
              className="w-[34.25px] h-[34.25px] left-[-10px] relative rounded-full"
              src="https://img.freepik.com/psd-gratis/ilustracion-3d-avatar-o-perfil-humano_23-2150671140.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726617600&semt=ais_hybrid"
              alt=""
            />
            <img
              className="w-[34.25px] h-[34.25px] left-[-15px] relative rounded-full"
              src="https://img.freepik.com/psd-gratis/ilustracion-3d-avatar-o-perfil-humano_23-2150671136.jpg"
              alt=""
            />
            <img
              className="w-[34.25px] h-[34.25px] left-[-20px] relative rounded-full"
              src="https://img.freepik.com/psd-gratis/ilustracion-3d-avatar-o-perfil-humano_23-2150671140.jpg"
              alt=""
            />
            <img
              className="w-[34.25px] h-[34.25px] left-[-25px] relative rounded-full"
              src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671118.jpg"
              alt=""
            />
            <div className="flex">
              <div className="w-[34.25px] h-[34.25px] left-[-30px] relative bg-[#0041E8] rounded-full">
                <div className="w-[34.25px] h-[34.25px] flex items-center text-white">
                  <center>
                    <h1>+8</h1>
                  </center>
                </div>
              </div>
            </div>
          </div>
              <div className="flex">
                <h1 className="text-blue-700 hover:cursor-pointer">
                    see all participants
                </h1>
              </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
