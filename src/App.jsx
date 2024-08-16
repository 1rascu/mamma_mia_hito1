import Footer from './componets/Footer'
import Header from './componets/Header'
import Home from './componets/Home'
import Navbar from './componets/Navbar'
import './App.css'

function App() {
  return <>
  <div className='container'>
          <div className='nav-container'>
          <Navbar 
            navtitle={'Pizzería Mamma Mia!'}
            home={'🍕 Home'}
            login={'🔐 Login'}
            register={'🔐 Register'}
            profile={'🔒 Profile'}
            logout={'🔒 Logout'}
            total={'🛒 Total: $'}/>
          </div>
        <Header 
        headerTitle={'¡Pizzería Mamma Mia!'}
        headerSubtitle={'¡Tenemos las mejores pizzas que podrás encontrar!'}/>
        <Home/> 
        <Footer footerContent={'©2021 - Pizzería Mamma Mia! - Todos los derechos reservados'}/>
  </div>
  </>
}

export default App