  import React, {useState,useEffect} from 'react'
  import { BallCanvas } from "./canvas";
  import { SectionWrapper } from "../hoc";
  import { technologies } from "../constants";

  const Tech = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 500);
      };
  
      handleResize();
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    if (isMobile) {
      return null; // Return null to not render anything in mobile dimensions
    }

    return (
      
      <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    )
  }

  export default SectionWrapper(Tech, "");