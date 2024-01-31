import React from "react";

export default function PhotoSection({ place, setShowAllPhotos }) {
  return (
    <div className="absolute  inset-0 bg-black text-white min-h-screen">
      <div className=" bg-black p-10 grid gap-4">
        <div>
          <h3>Photos of {place.title}</h3>
          <button
            className="fixed bottom-7 text-black right-10 bg-white rounded-2xl shadow shadow-md shadow-gray-400 py-1 px-3"
            onClick={() => setShowAllPhotos(false)}
          >
            close photos
          </button>
        </div>
        {place.img.length > 0 &&
          place.img.map((photo) => {
            return (
              <div className="max-w-4xl mx-auto ">
                <img className="w-full object-cover" src={photo} alt="" />
              </div>
            );
          })}
      </div>
    </div>
  );
}
