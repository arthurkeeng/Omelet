import React, { useContext, useState } from "react";
import { UserContext } from "../App";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import Places from "./Places";
import PlacesList from "./PlacesList";
import BookingsPage from "./BookingsPage";
const Account = () => {
  const [open, setOpen] = useState(false);
  const { person, ready, setPerson } = useContext(UserContext);
  const { subpage } = useParams();
  const navigate = useNavigate();
  const goToLogin = () => {
    setPerson("");
    navigate("/login");
  };

  if (!ready) {
    return <div>Loading...</div>;
  }

  if (ready && !person) {
    <Navigate to="/login" />;
  }
  function linkClasses(type = undefined) {
    let classes = "bg-gray-400 rounded-full p-2 px-4 ";

    if (type === subpage) {
      classes += "rounded-full text-white font-bold";
    }
    return classes;
  }

  return (
    <>
      <div>
        <nav className="w-full flex gap-4 mt-8 justify-center mb-4">
          <Link className={linkClasses()} to="/account">
            Profile
          </Link>
          <Link className={linkClasses("bookings")} to="/account/bookings">
            Bookings
          </Link>
          <Link className={linkClasses("places")} to="/account/places">
            My Accommodation
          </Link>
        </nav>
        {subpage === undefined && (
          <div className=" text-center max-w-lg mx-auto">
            Logged in as {person} <br />
            <button
              onClick={goToLogin}
              className="mt-4 font-bold bg-red-200 rounded-full px-3 max-w-sm mt-2"
            >
              Logout
            </button>
          </div>
        )}

        {subpage === "places" && <Places open={open} setOpen={setOpen} />}
        {subpage === "bookings" && (
          <BookingsPage open={open} setOpen={setOpen} />
        )}
      </div>
      ;
    </>
  );
};

export default Account;
