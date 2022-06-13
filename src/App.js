
import { BrowserRouter, Link, Route,Routes} from 'react-router-dom';
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from './screens/CartScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
        <header className="row">
            <div>
                <Link className="brand" to="/">Guerilla GanG</Link>
            </div>
            <div>
                <Link to="/cart">cart</Link>
                <Link to="/signin">sign in</Link>
            </div>
        </header>

        <main>
          <Routes>
            <Route path="/cart/:id"element={<CartScreen />} ></Route>
            <Route path="/product/:id" element={<ProductScreen/>}></Route>
            <Route path="/" element={<HomeScreen/>}></Route>
          </Routes>  
        </main>

        <footer className="row center">
            all right reserved
        </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
