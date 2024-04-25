import Navbar from "./modules/components/navbar";
import ParticlesComponent from "./modules/handlers/particles";
import 'animate.css';
export default function Home() {
  return (
    <>
        <div> 
        <ParticlesComponent id="particles" className="animate__animated animate__fadeIn  animate__slower"/>
              <Navbar/>
        </div> 
    </>
  );
}
