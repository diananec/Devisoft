import React, { useEffect } from "react"

const lightPalette = {
    background: "bg-white",
    greenish: "honeydew",
    defGray: "#aaa",
    orangeish: "rgba(255, 100, 25, 0.1)",
    kaki: "#62807e",
    light: "#e1e5f0",
    darkBlue: "#315481",
    lightBeige: "#eee",
    hotRed: "#ff3046",
    darkBrown: "rgba(34, 25, 25, 0.1)",
    mint: "#C1E1D2",
    whiteBg: "bg-white",

    buttons: {
        primary: "bg-black text-white",
    },
    list: { static: "bg-black", hover: "bg-slate-200" },
}

const darkPalette = {
    background: "bg-black",
    buttons: {
        primary: "bg-white text-black",
    },
    list: { static: "bg-white", hover: "bg-slate-800" },
}

const Colors = (darkMode) => (darkMode ? darkPalette : lightPalette)

export default Colors
