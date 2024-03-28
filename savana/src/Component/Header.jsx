import { Link, NavLink } from 'react-router-dom'
import userSVG from '../assets/images/user.svg'
import cartSVG from '../assets/images/cart.svg'
import ScrollToTop from './ScrollToTop'

const Header = () => {
   return (
      <>
         {/* Start Header/Navigation */}
         <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Woodwork navigation bar">
            <div className="container">
               <Link className="navbar-brand" to="/">Woodwork<span>.</span></Link>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsWoodwork" aria-controls="navbarsWoodwork" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
               </button>
               <div className="collapse navbar-collapse" id="navbarsWoodwork">
                  <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                     <li><NavLink className="nav-link active" to="/">Home</NavLink></li>
                     <li><a className="nav-link" href="shop.html">Shop</a></li>
                     <li><a className="nav-link" href="about.html">About us</a></li>
                     <li><a className="nav-link" href="services.html">Services</a></li>
                     <li><a className="nav-link" href="blog.html">Blog</a></li>
                     <li><a className="nav-link" href="contact.html">Contact us</a></li>
                  </ul>
                  <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                     <li><a className="nav-link" href="#"><img src={userSVG} alt='profile' title='Profile' /></a></li>
                     <li><a className="nav-link" href="cart.html"><img src={cartSVG} alt='cart' title='Cart' /></a></li>
                  </ul>
               </div>
            </div>
            <ScrollToTop />
         </nav>
         {/* End Header/Navigation */}
      </>
   )
}
export default Header