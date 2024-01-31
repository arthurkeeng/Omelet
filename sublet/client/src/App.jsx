import React, { createContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import FormPage from "./Components/FormPage";
import HomePage from "./Components/HomePage";
import app from "./axiosInstance";
import Account from "./Components/AccountsPage";
import SpecificPage from "./Components/SpecificPage";
import { trusted } from "mongoose";
import PlaceFormPage from "./Components/PlaceFormPage";
import PlacePage from "./Components/PlacePage";
import BookingsPage from "./Components/BookingsPage";
import SingleBooking from "./Components/SingleBooking";
// import { UserContextProvider } from "./UsereContext";

export const UserContext = createContext();
const App = () => {
  const [ready, setReady] = useState(true);
  const [person, setPerson] = useState(null);
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    (async function getUserInfo() {
      if (!person) {
        const { data } = await app.get("/users/profile");
        setPerson(data.username.split("@")[0]);
        setReady(true);
        setRedirect(true);
        <Navigate to="/" />;
      }
    })();
  }, []);
  return (
    <main className="max-w-5xl mx-auto">
      <UserContext.Provider value={{ person, setPerson, ready }}>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<FormPage />} />
            <Route path="/account/:subpage?" element={<Account />} />
            <Route path="/account/:subpage/:action" element={<Account />} />
            <Route
              path="/account/places/new/:placesID"
              element={<PlaceFormPage />}
            />
            <Route path="/place/:placeID" element={<PlacePage />} />
            {/* <Route path="/account/bookings" element={<BookingsPage />} /> */}
            <Route path="/bookings/:bookID" element={<SingleBooking />} />
          </Route>
        </Routes>
        {/* <Navbar /> */}
      </UserContext.Provider>
    </main>
  );
};

export default App;
