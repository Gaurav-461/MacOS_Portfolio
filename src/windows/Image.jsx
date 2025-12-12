import React from "react";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { WindowsControls } from "#components/index.js";
import useWindowStore from "#store/window.js";

const Image = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile.data;

  if (!data) return null;

  const { imageUrl, name } = data;
  return (
    <>
      <div id="window-header">
        <WindowsControls targetWindow="imgfile" />
        <h2>{name}</h2>
      </div>

      <div className="p-5 bg-white">
        {imageUrl && (
          <div className="w-full">
            <img
              className="w-full h-full object-contain object-center rounded  max-h-[70vh]"
              src={imageUrl}
              alt={name}
            />
          </div>
        )}
      </div>
    </>
  );
};
const ImageWindow = WindowWrapper(Image, "imgfile");
export default ImageWindow;
