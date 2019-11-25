import React from 'react';
import './App.scss';
import rootReducer from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import ShoppingCart from './Pages/ShoppingCart/ShoppingCart';

export const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Switch>
            <Route
              exact
              path={'/'}
              render={() => {
                return <Redirect to={'/products'} />;
              }}
            />
            <Route exact path={'/products'} component={Home} />
            <Route exact path={'/products/:id'} component={ProductDetail} />
            <Route exact patr={'/cart'} component={ShoppingCart} />
          </Switch>
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
