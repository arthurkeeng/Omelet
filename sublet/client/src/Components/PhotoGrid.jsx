import React from "react";

export default function PhotoGrid({ place, setShowAllPhotos }) {
  return (
    <>
      <div className="grid gap-2 grid-cols-[2fr_1fr] mt-3 rounded-3xl overflow-hidden">
        <div className="w-full h-50">
          {place.img?.[0] && (
            <div>
              <img
                onClick={() => setShowAllPhotos(true)}
                className="w-full h-full cursor-pointer aspect-square object-cover"
                src={place.img[0]}
              />
            </div>
          )}
        </div>
        <div className="grid">
          {place.img?.[1] && (
            <img
              onClick={() => setShowAllPhotos(true)}
              className="aspect-square cursor-pointer object-cover"
              src={place.img[1]}
            />
          )}
          <div className="overflow-hidden">
            {place.img?.[2] && (
              <img
                onClick={() => setShowAllPhotos(true)}
                className="relative top-2 cursor-pointer aspect-square object-cover"
                src={place.img[2]}
              />
            )}
          </div>
        </div>
      </div>
      {place.img?.length > 3 && (
        <button
          onClick={() => setShowAllPhotos(true)}
          className="bg-white rounded-2xl shadow shadow-md shadow-gray-400 absolute bottom-3 right-1 py-1 px-3"
        >
          show more phtotos
        </button>
      )}
    </>
  );
}
