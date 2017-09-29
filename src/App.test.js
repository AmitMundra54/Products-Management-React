import React from 'react';
import ReactDOM from 'react-dom';
import FilterableProductTable from './components/product-table/filterable-product-table.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FilterableProductTable />, div);
});
