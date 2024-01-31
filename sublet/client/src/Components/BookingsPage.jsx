import React from "react";
import data from "../data";
function BookingsPage() {
  console.log(data[0].img);
  return (
    <div>
      <div>
        {data.map((item) => {
          return (
            <div className="mb-4 flex gap-4 bg-gray-200 rounded-2xl overflow-hidden">
              <div className="w-48">
                <img src={item.img[0]} alt="" />
              </div>
              <div className="py-3 grow">
                <h2>{item.title}</h2>
                <h2>
                  <span>Keeng Arthur</span> : <span>08100934346</span>
                </h2>

                <h3>Booking period : 32 Months</h3>
                <h3>price : {item.price}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BookingsPage;
