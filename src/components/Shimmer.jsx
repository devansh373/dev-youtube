import React from "react";

function Shimmer() {
  return Array(20)
    .fill("")
    .map((arr, index) => (
      <div
        key={index}
        data-testid="shimmer-test-id"
        className=" w-[300px] h-[300px] bg-gray-300 m-2 rounded-lg"
      ></div>
    ));
}

export default Shimmer;
