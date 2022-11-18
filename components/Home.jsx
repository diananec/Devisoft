//libraries imports
import React, { useContext } from "react"
import tw from "tailwind-styled-components"
import logo from "../images/Devisoft_Title_Transparent.png"

//components imports
import { ThemeContext } from "./Context"
import Colors from "../components/TailwindSC/Colors"
import Image from "next/image"

const Home = () => {
    const { darkMode, emoji, changeTheme } = useContext(ThemeContext)

    return (
        <HomeDiv dark={darkMode}>
            <Title>
                Welcome to<Title2>DEVISOFT!</Title2>
            </Title>

            <Description>We build together.</Description>
            <Description>We grow together.</Description>
            <Description>We succeed together.</Description>
            <Footer></Footer>
        </HomeDiv>
    )
}

export default Home

const HomeDiv = tw.div`
   flex flex-col justify-center 
   p-2 px-4 h-screen items-center
   ${({ dark }) => Colors(dark).background}
`

const Title = tw.div`
  flex items-center justify-center font-sans text-5xl  text-yellow-800 p-5
`
const Title2 = tw.span`
  flex items-center justify-center font-sans text-5xl  text-yellow-900 p-5 hover:font-bold
`

const Description = tw.div`
  flex justify-center font-sans text-xl text-black-300 text-center hover:text-sky-300 p-2
  hover:font-bold

`

const Footer = tw.div`
  flex justify-center font-sans text-xl text-black-300 text-center hover:text-sky-300 p-2
  hover:font-bold

`
