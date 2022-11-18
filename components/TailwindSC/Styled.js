import tw from "tailwind-styled-components"
import Colors from "./Colors"

export const Container = tw.div`
flex flex-col min-h-screen w-screen
`

export const MainDiv = tw.div`
   flex justify-between p-2 px-32 py-4
   ${({ dark }) => Colors(dark).background}
`

export const SecondaryDiv = tw.div`
   w-auto flex items-center
`

export const NavbarListUL = tw.ul`
   flex flex-row justify-between items-center 
   rounded-full text-xl
   ${({ dark }) => Colors(dark).list.static}
`

export const NavbarListLI = tw.li`
   flex flex-row justify-between items-center
   mx-5 bg-slate-100 px-3 py-2 rounded-xl
   ${({ dark }) => Colors(dark).buttons.primary}
   ${({ dark }) => `hover:${Colors(dark).list.hover}`}
`

export const SimpleButton = tw.button`
   flex flex-row justify-between items-center
   mx-5 bg-slate-100 px-3 py-2 rounded-full text-xl
   ${({ dark }) => Colors(dark).buttons.primary}
`
