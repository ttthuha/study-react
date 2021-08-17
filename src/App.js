import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route

} from 'react-router-dom'

import TestProductManagerComponent from './ProductManagerComponent'
import ProductDetail from './ProductDetail';
import Login from './LoginComponent'


const App = () => {

  return (
    <div className='App'>

      {/* <BrowserRouter>
        <Switch>
          <Route path='/products/:productId'>
            <ProductDetail />
          </Route>
          <Route path='/products'>
            <TestProductManagerComponent />
          </Route>

          <Route path='/'>
            <p>Day la homepage</p>
          </Route>

        </Switch>
      </BrowserRouter> */}

      <Login/>
    </div>
  );
}

export default App;