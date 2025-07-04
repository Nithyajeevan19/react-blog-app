/* No need to use BrowserRouter here as it is already used in main.jsx */
import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import './App.css'
import {Route, Routes} from 'react-router'
import BlogItemDetails from './components/BlogItemDetails'

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs/:id" element={<BlogItemDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </div>
)

export default App
