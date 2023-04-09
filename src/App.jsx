import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, AnimatedCursor } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="153, 51, 255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
          <Navbar />
          
          <Hero />
          
          
        </div>
        <div className='relative z-0'>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
