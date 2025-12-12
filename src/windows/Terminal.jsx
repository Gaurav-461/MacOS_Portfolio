import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {techStack} from "#constants/index.js";
import {Check, Flag} from "lucide-react";
import {WindowsControls} from "#components/index.js";

const Terminal = () => {
    return (
        <>
            <div id="window-header">
                <WindowsControls targetWindow="terminal"/>
                <div>Tech Stack</div>
            </div>
            <div className="techstack">
                <p>
                    <span>@gaurav % show tech stack</span>
                </p>

                <div className="label">
                    <p className="w-32">Category</p>
                    <p>Technologies</p>
                </div>

                <ul className="content">
                    {techStack.map(({category, items}) => (
                        <li key={category} className="flex items-center">
                            <Check className="check" size={20}/>
                            <h3>{category}</h3>
                            <ul>
                                {items.map((item, i) => (
                                    <li key={i}>
                                        {item}
                                        {items.length - 1 !== i && ", "}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>

                <div className="footnote">
                    <p>
                        <Check size={20}/>
                        5 of 5 stacks loaded successfully (100%)
                    </p>

                    <p className="text-black">
                        <Flag size={15} fill="black"/>
                        Render time: 6ms
                    </p>
                </div>
            </div>
        </>
    )
}

const TerminalWindow = WindowWrapper(Terminal, "terminal", "Tech Stack")

export default TerminalWindow
