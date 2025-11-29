import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Draggable } from 'gsap/Draggable';

import { Navbar, Welcome, Dock} from "#components";
import TerminalWindow from "#windows/Terminal.jsx";

gsap.registerPlugin(useGSAP, Draggable);

const App = () => {
    return (
        <main>
            <Navbar />
            <Welcome />
            <Dock/>
            <TerminalWindow />
        </main>
    )
}

export default App
