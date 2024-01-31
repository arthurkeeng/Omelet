import React from "react";
import { Link } from "react-router-dom";
import img1 from "../images/artic.jpg";
const places = {
  _id: 23455321,
};
const PlacesList = ({ editPlace }) => {
  return (
    <main>
      <div
        onClick={(id) => editPlace(places._id)}
        className="
      cursor-pointer flex gap-4 bg-gray-200 p-4 rounded-2xl"
      >
        <div className=" grow shrink-0 w-32 h-32 bg-gray-300">
          <img src={img1} className="w-full h-full" />
        </div>
        <div className="grow-0 shrink">
          <h4 className="text-lg font-bold">This is the title of the place</h4>
          <p>
            The description goes here and a few of the information needed The
            description goes here and a few of the information needed The
            description goes here and a few of the information needed
          </p>
        </div>
      </div>
    </main>
  );
};

export default PlacesList;
