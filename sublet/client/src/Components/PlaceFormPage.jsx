import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import app from "../axiosInstance";
const PlaceFormPage = ({
  placeId,
  addNewPlace,
  exit,
  changeHandler,
  setPics,
  photoList,
  uploadPhotos,
  addPhotos,
}) => {
  useEffect(() => {
    if (placeId) {
      (async function () {
        await app.get(`/places/${placeId}`);
      })();
    }
  });
  return (
    <div className="text-center">
      <button
        onClick={exit}
        className="font-bold rounded-2xl p-2 bg-green-100 max-w-sm mx-auto"
      >
        x
      </button>

      <form
        onSubmit={addNewPlace}
        onChange={changeHandler}
        className=" rounded-2xl p-4 bg-green-100 max-w-lg mx-auto"
      >
        <p>Add title</p>
        <input
          className="font-bold inline-block max-w-lg border"
          placeholder=" Enter title of place"
          name="title"
          type="text"
        />
        <hr />
        <p className="mt-4">Add address of place</p>
        <input
          className="font-bold inline-block max-w-lg "
          placeholder="Enter address"
          name="address"
          type="text"
        />
        <hr />
        <p className="mt-4">upload photos of place</p>
        <input
          multiple
          className="font-bold inline-block max-w-lg "
          placeholder="Upload photos"
          onChange={(e) => setPics(e.target.files)}
          type="file"
        />

        <button
          onClick={addPhotos}
          className="font-bold text-lg border bg-red-200 rounded-2xl
            p-4
            "
        >
          +
        </button>
        {photoList.map((pic) => (
          <p>{pic}</p>
        ))}
        <button
          className="block mx-auto text-sm border bg-red-200 rounded-2xl
               p-4
               "
          onClick={uploadPhotos}
        >
          Upload images
        </button>
        <hr />
        <p className="mt-4">Give place description</p>
        <textarea
          className="d max-w-lg font-bold"
          placeholder="Enter place description"
          name="description"
          type="text"
        />
        <hr />
        <p className="mt-4">List perks of place</p>
        <input
          className="font-bold inline-block max-w-lg "
          placeholder="List of perks. Use / to turn to a list"
          name="perks"
          type="text"
        />
        <hr />
        <p className="mt-4">Give extra information</p>
        <input
          className="font-bold inline-block max-w-lg "
          placeholder="Give extra info"
          name="extraInfo"
          type="text"
        />
        <hr />
        <p className="mt-4">Check in time</p>
        <input
          className="font-bold inline-block max-w-lg "
          placeholder="check in time"
          name="checkIn"
          type="number"
        />
        <hr />
        <p className="mt-4">Check out time</p>
        <input
          className="font-bold inline-block max-w-lg "
          placeholder="check out time"
          name="checkOut"
          type="number"
        />
        <hr />
        <p className="mt-4">max number of guests</p>
        <input
          className="font-bold inline-block max-w-lg "
          placeholder="max number of guests"
          name="maxGuests"
          type="number"
        />
        {!placeId ? (
          <button
            type="submit"
            className="p-3 w-full bg-red-100 cursor-pointer"
          >
            Submit
          </button>
        ) : (
          <button className="p-3 w-full bg-red-100 cursor-pointer">Edit</button>
        )}
      </form>
    </div>
  );
};

export default PlaceFormPage;
