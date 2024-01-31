import React, { useState } from "react";
export default function BookingWidget({ place }) {
  const [option, setOption] = useState("");

  const changeOption = (e) => {
    if (e.target.name === "6") {
      setOption(true);
    } else {
      setOption(false);
    }
  };

  return (
    <div className="mt-4 bg-gray-300 shadow p-4 rounded-2xl">
      <div className="text-1xl font-bold text-center">
        Price : {place.price} / per month
      </div>
      <div className="mt-4">Available Time : {place.checkIn}</div>
      <div className="mt-4">Vacate Time : {place.checkOut}</div>
      <input
        onChange={changeOption}
        type="radio"
        name="6"
        value="6 months"
        checked={option}
      />
      <span className="m-4">6 Months</span>
      <input
        onChange={changeOption}
        type="radio"
        name="12"
        value="12 months"
        checked={!option}
      />
      <span className="ml-4 ">12 Months</span>
      <label htmlFor="fullName" className="block mt-3">
        Your Full Name
      </label>
      <input type="text" name="fullName" placeholder="Enter name" />
      <label htmlFor="phone">Enter Phone Number</label>
      <input type="tel" name="phone" id="NGN" />
      <button className="rounded-full mt-3 p-2 w-full bg-red-300 cursor-pointer">
        Book this place
      </button>
    </div>
  );
}
