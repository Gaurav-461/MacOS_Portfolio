import React from 'react'
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {WindowsControls} from "#components/index.js";
import useWindowStore from "#store/window.js";

const Text = () => {
    const {windows} = useWindowStore();
    const data = windows.txtfile.data;

    if (!data) return null;

    const {name, subtitle, description, image} = data;
    return (
        <>
            <div id="window-header">
                <WindowsControls targetWindow="txtfile"/>
                <h2>{name}</h2>
            </div>

            <div className="p-5 flex flex-col items-center gap-2 bg-white">
                {image ? <div className="rounded-xl overflow-hidden">
                    <img src={image} alt={name}/>
                </div> : null}
                {subtitle ? <h3 className="text-lg font-semibold">{subtitle}</h3> : null}

                <div className="space-y-3">
                    {(Array.isArray(description) && description.length > 0)
                        ? description.map((item, i) => (
                                <p key={i}>{item}</p>
                            )
                        )
                        : null}
                </div>
            </div>
        </>
    )
}

const TextWindow = WindowWrapper(Text, "txtfile")
export default TextWindow
