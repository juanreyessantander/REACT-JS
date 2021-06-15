import React from 'react';
import Product from './Product';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <main className="block col-12">
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
}
