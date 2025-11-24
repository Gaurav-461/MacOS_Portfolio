import React from 'react'
import { Navbar, Welcome, Dock} from "#components";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const App = () => {
    return (
        <main>
            <Navbar />
            <Welcome />
            <Dock/>
        </main>
    )
}

export default App
