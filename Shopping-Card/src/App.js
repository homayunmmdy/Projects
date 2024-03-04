import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Navbar from './components/navbar';
import { ShopContextProvider } from './context/shop-content';
import Cart from './pages/cart/cart';
import Shop from './pages/shop/shop';
function App() {
  return (
    <div className='App'>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
