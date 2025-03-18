// write product card here
// write product card here
import React from 'react';
import ViewProductButton from '../components/button';


const ProductCard = () => {
  const productImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLPIvQRxNly8mJ8eTU4B2d3yH3RTlLmt84Jg&s';
  const productName = 'light stick';
  const productPrice = '₹5000';

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', textAlign: 'center', borderRadius: '8px', width: '250px' }}>
      <img src={productImage} alt="Product" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }} />
      <h3>{productName}</h3>
      <p style={{ color: 'green', fontWeight: 'bold' }}>{productPrice}</p>
      <ViewProductButton />
    </div>
  );
};

export default ProductCard;
