import React from 'react';
import Header from './components/header';
import About from './components/about';
import Resume from './components/resume';
import Portfolio from './components/portfolio';
import Testimonials from './components/testimonials';
import ContactUs from './components/contactUs';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Resume />
      <Portfolio />
      <Testimonials />
      {/* <ContactUs />Î */}
      <Footer />
    </div>
  );
}

export default App;
