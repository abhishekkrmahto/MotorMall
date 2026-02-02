import NavBar from "../Navbar/NavBar"
import logoNoBg from '../../assets/logo-no-bg.png'
import '../Content1/Content1.css'

import '../LandingPage/LandingPage.css'
import { useEffect, useEffectEvent, useState } from "react"
import Content1 from "../Content1/Content1"
import Content2 from "../Content2/Content2"

const LandingPage = () => {
  const [animationSetter, setAnimationSetter] = useState("");

  const introAnimationHandler = (e)=>{
    setAnimationSetter("carIntroAnimation");
  }

useEffect(() => {
  const startTimer = setTimeout(() => {
    setAnimationSetter("carIntroAnimation");

    const removeTimer = setTimeout(() => {
      setAnimationSetter("hidden");
    }, 6000); 

    return () => clearTimeout(removeTimer);
  }, 100);

  return () => clearTimeout(startTimer);
}, []);

  



  return (
    <div className="">
      <NavBar></NavBar>
      <div className="logoAnimation">
        <img className={`invert-100 w-[600px] absolute top-18 left-[-1000px] ${animationSetter}`} src={logoNoBg} alt="" />
      </div>
      <Content1/>
      <Content2/>
    </div>
  )
}

export default LandingPage
