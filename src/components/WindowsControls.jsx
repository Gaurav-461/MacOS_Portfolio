import React from 'react'
import useWindowStore from "#store/window.js";
import {Minus, Plus} from "lucide-react";

const FullIcon = ({ size, className }) => (
  <svg
    className={className}
    viewBox="0 0 13 13"
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit={2}
  >
    <path d="M9.26 12.03L.006 2.73v9.3H9.26zM2.735.012l9.3 9.3v-9.3h-9.3z" />
  </svg>
);

const ExitFullIcon = ({ size }) => (
  <svg
    className="icon"
    viewBox="0 0 19 19"
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit={2}
  >
    <path d="M18.373 9.23L9.75.606V9.23h8.624zM.6 9.742l8.623 8.624V9.742H.599z" />
  </svg>
);

const WindowsControls = ({targetWindow}) => {
    const {closeWindow} = useWindowStore()
    return (
        <div id="window-controls" className="group">
            <div className="close" onClick={() => closeWindow(targetWindow)} title="Close">
               <Plus  size="11" className="opacity-0 group-hover:opacity-100 text-black"/>
            </div>
            <div className="minimize">
                <Minus size="11" className="opacity-0 group-hover:opacity-100 text-black" />
            </div>
            <div className="maximize">
                <FullIcon size="6" className="opacity-0 group-hover:opacity-100 text-black"/>
            </div>
        </div>
    )
}
export default WindowsControls
