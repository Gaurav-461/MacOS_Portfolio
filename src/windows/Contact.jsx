import React from "react";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { WindowsControls } from "#components/index.js";
import { socials } from "#constants/index.js";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowsControls targetWindow="contact" />
        <h2>Contact</h2>
      </div>
      <div className="p-5 space-y-5">
        <img
          src="/images/adrian.jpg"
          alt="gaurav"
          className="w-20 rounded-full"
        />

        <h3>Let's Connect</h3>
        <p>Got an interesting project or want to work together?</p>
        <p>mauryagaurav1612@gmail.com</p>
        <ul>
          {socials.map(({ id, bg, icon, link, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
              >
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow;
