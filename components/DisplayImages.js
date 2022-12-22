// import { Image } from "antd";
import Image from "next/image";
import React from "react";

function DisplayImages({ images }) {
  return (
    <>
      {images && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-3 md:gap-x-3">
          {images.map((image) => (
            <div key={image}>
              <Image
                
                src={image}
                alt="image"
                width={300}
                height={300}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default DisplayImages;
