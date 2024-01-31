import React, { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import app from "../axiosInstance";
import PlacesList from "./PlacesList";
import PlaceFormPage from "./PlaceFormPage";
const Places = ({ setOpen, open }) => {
  let { action } = useParams();
  const [placeValue, setPlaceValue] = useState({});
  const [photos, setPhotos] = useState([]);
  const [pics, setPics] = useState("");
  const [photoList, setPhotoList] = useState([]);
  const [placeId, setPlaceId] = useState("");

  const editPlace = (id) => {
    setPlaceId(id);
    setOpen(true);
  };
  const changeHandler = (e) => {
    let name = e.target.name,
      value = e.target.value;
    setPlaceValue({ ...placeValue, [name]: value });
  };
  const addPhotos = (e) => {
    e.preventDefault();
    [...pics].map((pic) => {
      setPhotoList((prev) => {
        return [...prev, pic.name];
      });
      setPhotos((prev) => {
        return [...prev, pics];
      });
    });
    setPics("");
  };

  const exit = () => {
    setOpen(false);
    <Navigate to="/account/places" />;
  };
  const uploadPhotos = async (e) => {
    e.preventDefault();
    const datas = new FormData();
    for (let i = 0; i < photos.length; i++) {
      datas.append("photos", photos[i]);
    }
    const { data } = await app.post("/upload", datas, {
      headers: { "Content-type": "multipart/form-data" },
    });
  };
  const addNewPlace = async (e) => {
    e.preventDefault();
    // if(place)
    <Navigate to="/account/places/" />;
    const datas = { ...placeValue, photos };
    try {
      console.log(datas);
      // const { data } = await app.post("/places/add", datas);
    } catch (error) {
      alert("something went wrong");
    }
  };

  return (
    <div className="">
      {(action !== "new" || !open) && (
        <div className="text-center mb-4">
          <Link
            onClick={() => setOpen(true)}
            to="/account/places/new"
            className="
        mx-auto inline-flex
        bg-red-300  text-white font-bold py-2 px-6 rounded-full"
          >
            Add New Place
          </Link>
        </div>
      )}
      <div>{!open && <PlacesList editPlace={(id) => editPlace(id)} />}</div>
      {action === "new" && open && (
        <PlaceFormPage
          placeId={placeId}
          addNewPlace={addNewPlace}
          exit={exit}
          changeHandler={changeHandler}
          setPics={setPics}
          photoList={photoList}
          uploadPhotos={uploadPhotos}
          addPhotos={addPhotos}
        />
      )}
    </div>
  );
};

export default Places;
