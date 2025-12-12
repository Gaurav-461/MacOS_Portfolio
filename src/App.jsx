import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";

import { Navbar, Welcome, Dock } from "#components";
import {
  TerminalWindow,
  SafariWindow,
  ResumeWindow,
  FinderWindow,
  TextWindow,
  ImageWindow,
  ContactWindow,
} from "#windows";

gsap.registerPlugin(useGSAP, Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <TerminalWindow />
      <SafariWindow />
      <ResumeWindow />
      <FinderWindow />
      <TextWindow />
      <ImageWindow />
      <ContactWindow />
    </main>
  );
};

export default App;
