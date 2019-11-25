import React from 'react';
import FilterBar from '../../components/FilterBar/FilterBar';
import ProductList from '../../components/ProductList/ProductList';

const Home = () => {
  return (
    <React.Fragment>
      <div className="container" style={{ paddingTop: '6rem' }}>
        <div className="row">
          <FilterBar />
          <ProductList />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
