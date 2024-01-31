import React from "react";
import data from "../data";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <main className="p-5 mt-8 gap-6 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {data.length > 0 &&
        data.map((item) => (
          <Link to={`/place/${item.id}`}>
            <div className="cursor-pointer">
              <div className=" bg-gray-300 rounded-2xl flex">
                <img
                  className=" w-full aspect-square rounded-2xl object-cover"
                  src={item.img[0]}
                  alt=""
                />
              </div>
              <h3 className="text-sm font-bold">{item.title}</h3>
              <h3 className="text-sm">{item.address}</h3>
              <div className="mt-2 text-gray-500">
                <span className="font-bold">#{item.price} per Month</span>{" "}
              </div>
            </div>
          </Link>
        ))}
    </main>
  );
};

export default HomePage;
