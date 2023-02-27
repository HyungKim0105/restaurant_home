import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar'
import Footer from './components/footer'
import MenuPage from "./pages/menupage"
import AboutPage from "./pages/aboutpage"
import HomePage from './pages/homePage';
import OrderPage from './pages/orderPage'
import ScrollToTop from './components/scrollToTop';
import Contact from './pages/contact';
import Reservation from './pages/reservation';
import OrderContextProvider from './components/orderContext';

function App() {

  return (
    <div className="App">
      <OrderContextProvider>
        <Router>
          <ScrollToTop />
            <Navbar />
              <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/Menu" element={<MenuPage/>} />
                <Route path="Order" element={<OrderPage/>} />
                <Route path="Reservation" element={<Reservation/>} />
                <Route path="/About" element={<AboutPage/>} />
                <Route path="/Contact" element={<Contact/>} />
              </Routes>
            <hr style={{width: "90%"}} />
            <Footer />
        </Router>
      </OrderContextProvider>
    </div>
  );
}

export default App;
