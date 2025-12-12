import React from 'react'
import clsx from "clsx";
import {Search} from "lucide-react";

import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {WindowsControls} from "#components/index.js";
import {locations} from "#constants/index.js";
import useLocationStore from "#store/location.js";
import useWindowStore from "#store/window.js";

const Finder = () => {
    const {openWindow} = useWindowStore();
    const {setActiveLocation, activeLocation} = useLocationStore();

    const openItem = (item) => {
        if (item.fileType === "pdf") {
            return openWindow("resume")
        }
        if (item.kind === "folder") {
            return setActiveLocation(item);
        }
        if (["fig", "url"].includes(item.fileType) && item.href) {
            return window.open(item.href, "_blank")
        }

        openWindow(`${item.fileType}${item.kind}`, item)
    }

    const renderList = (name, items) => (
        <div>
            <h3>{name}</h3>
            <ul>
                {items.map((item) => (
                    <li key={item.id} onClick={() => setActiveLocation(item)}
                        className={clsx(item.id === activeLocation.id ? "active" : "not-active")}>
                        <img className="w-4" src={item.icon} alt={item.name}/>
                        <p className="text-sm font-medium truncate">{item.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )

    // TODO: implement to show text or image in different window

    return (
        <>
            <div id="window-header">
                <WindowsControls targetWindow="finder"/>
                <Search className="icon"/>
            </div>

            <div className="bg-white flex h-full">
                <div className="sidebar">
                    {renderList("Favourites", Object.values(locations))}
                    {renderList("Works", locations.work.children)}
                </div>

                <ul className="content">
                    {activeLocation.children.map((item) => (
                        <li key={item.id} className={item.position} onClick={() => openItem(item)}>
                            <img src={item.icon} alt={item.name}/>
                            <p>{item.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

const FinderWindow = WindowWrapper(Finder, "finder")
export default FinderWindow
