import Image from "next/image"
import React, { useContext, useEffect, useState } from "react"
import logo from "../images/Devisoft_Title_Transparent.png"
import {
    MainDiv,
    NavbarListLI,
    NavbarListUL,
    SecondaryDiv,
    SimpleButton,
} from "./TailwindSC/Styled"
import { ThemeContext } from "./Context"

const NavBar = () => {
    const { darkMode, emoji, changeTheme } = useContext(ThemeContext)

    return (
        <MainDiv dark={darkMode}>
            <SecondaryDiv>
                <Image src={logo} alt="LOGO" width={200} height={200} />
            </SecondaryDiv>

            <SecondaryDiv>
                <SecondaryDiv>
                    <NavbarListUL dark={darkMode}>
                        <NavbarListLI dark={darkMode}>Home</NavbarListLI>
                        <NavbarListLI dark={darkMode}>About</NavbarListLI>
                        <NavbarListLI dark={darkMode}>Our work</NavbarListLI>
                    </NavbarListUL>
                </SecondaryDiv>
            </SecondaryDiv>

            <SecondaryDiv>
                <SimpleButton dark={darkMode}>Contact Us</SimpleButton>

                <button onClick={changeTheme} className="cursor-pointer">
                    {emoji}
                </button>
            </SecondaryDiv>
        </MainDiv>
    )
}

export default NavBar
