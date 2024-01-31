import React, { useEffect, useState } from "react";
import data from "../data";
import { useParams } from "react-router-dom";
import BookingWidget from "./BookingWidget";
import PhotoSection from "./PhotoSection";
import PhotoGrid from "./PhotoGrid";
const PlacePage = () => {
  const { placeID } = useParams();
  const [place, setPlace] = useState({});
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  useEffect(() => {
    let thePlace = data.find((item) => {
      return item.id == placeID;
    });
    setPlace(thePlace);
  }, [placeID]);

  if (showAllPhotos) {
    return <PhotoSection place={place} setShowAllPhotos={setShowAllPhotos} />;
  }
  console.log(place);
  return (
    <div className="mt-4 bg-gray-100 px-5 py-8">
      <h1 className="text-2xl">{place.title}</h1>
      <a
        className="my-4 bolck font-semibold underline"
        target="_blank"
        href={`https://maps.google.com/?q=${place.address}`}
      >
        {place.address}
      </a>
      <div className="relative">
        <PhotoGrid place={place} setShowAllPhotos={setShowAllPhotos} />
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr]">
          <div>
            <div className="px-5 my-4 text-gray-700">
              <h2 className="font-semibold  text-2xl ">Description </h2>
              {place.description}
            </div>
            <div className="grid grid-cols-2 px-5 my-4 text-gray-700">
              <div>
                <b>check in </b> : {place.checkIn} <br />
                <b>check out </b> : {place.checkOut} <br />
                <b>Max number of Guests </b> : {place.maxGuests}
              </div>
            </div>
          </div>
          <BookingWidget place={place} />
        </div>
      </div>
      <div className="bg-white border-t px-5 my-4 text-sm text-gray-700 leading-4">
        <h2 className="font-semibold text-2xl mb-3">Extra Info </h2>
        <p className="leading-5 mb-3">{place.extraInfo}</p>
      </div>
    </div>
  );
};

export default PlacePage;
