import React from 'react';
import BrandFilter from './../BrandFilter/BrandFilter';
import OrderFilter from './../OrderFilter/OrderFilter';
const FilterBar = () => {
  return (
    <div className="col-lg-3">
      <div
        className="row"
        style={{
          position: 'sticky',
          top: '80px'
        }}
      >
        <div className="col-12">
          <BrandFilter />
        </div>
        <div className="col-12">
          <OrderFilter />
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
