import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Nav from "./components/Nav/Nav"
import Badges from "./components/Badges/Badges"
import Banners from "./components/Banners/Banners"
import Cards from "./components/Cards/Cards"
import Testimonials from "./components/Testimonials/Testimonials"

function App() {
  return (
    <div className="container">
      <Nav />
      <Badges />
      <Banners />
      <Cards />
      <Testimonials />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
