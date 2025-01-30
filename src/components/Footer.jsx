import React from "react";
function Footer() {
  return (
    <>
      <div className="flex grid grid-cols-[3fr_1fr_1fr] gap-20 bg-red-100 rounded-2xl py-10 px-5">
        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-bold">
              <span className="text-3xl text-red-500">We</span> are committed to
              providing the highest quality fresh flowers
            </h1>
            <p className="text-md">
              {" "}
              because we understand that the freshness and beauty of flowers are
              important for every occasion.
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-sm text-center py-5 text-gray-700 ">
          Copyright 2024@ deflore.com - All Right Reserved.
        </p>
      </div>
    </>
  );
}

export default Footer;
