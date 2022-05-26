import { FcAbout } from "react-icons/fc"
import { AiFillProject, AiFillContacts } from "react-icons/ai"

import { CgVoicemailO } from "react-icons/cg"
import { IoIosContact, IoIosCodeWorking } from "react-icons/io"
import { RiGithubLine } from "react-icons/ri"
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai"
import { FiLinkedin } from "react-icons/fi"

export const configData = {
  email: "bilaal441@hotmail.com",

  socialMedia: [
    {
      name: "GitHub",
      url: "https://github.com/bilaal441",
      icon: RiGithubLine,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/bill_galydh",
      icon: AiOutlineInstagram,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/BilalSh48310984",
      icon: AiOutlineTwitter,
    },
    {
      name: "Linkedin",
      url: "https://linkedin.com/in/bilal-sharif-66619813a",
      icon: FiLinkedin,
    },
  ],

  navLinks: [
    {
      name: "About",
      url: "/#about",
      Icon: IoIosContact,
    },

    {
      name: "projects",
      url: "/#projects",
      Icon: IoIosCodeWorking,
    },
    {
      name: "Contact",
      url: "/#contact",
      Icon: CgVoicemailO,
    },
  ],

  colors: {
    purple: "#907AD6",
    navy: " #44446E",
    purpleLight: "#DABFFF",
    dark: "#1C1C33",
    skyBlue: "#7FDEFF",
    white: "#fff",
  },
}
