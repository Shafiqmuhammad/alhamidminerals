import Newsletter from './components/Newsletter/Newsletter';
import Packages from './components/Packages/Packages';
import Title from './components/Title/Title';

import MovingSlider from './components/MovingSlider/MovingSlider';
import Slider from './components/Slider/Slider';
import Why from './components/Why';
import Projects from './components/Projects/Projects';



export default function Home() {
  return (
    <main>  
      <Slider />
      <Title />
      <Packages />
      <MovingSlider />


      
      {/* <Clientsay /> */}
      <Newsletter />

      <Projects />
      <Why />
      {/* < ProductsTabs /> */}
    </main>
  )
}
