
import { useState } from 'react';
import './App.css';
import Header from './Componenets/Header';
import ProductList from './Componenets/ProductList';
import CartList from './Componenets/CartList';


function App() {
  const[product,setProduct]=useState([
    {
    url: 'https://images.unsplash.com/photo-1511385348-a52b4a160dc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
    name :'laptop',
    price :60000
    },
    {
     url:'https://img.freepik.com/premium-psd/mobile-phone-mockup-with-editable-design-changeable-colors_196070-196.jpg?w=360',
     name:'mobile',
     price:20000
    },
    {
      url:'https://www.pngimages.in/uploads/png-webp/2022/2022-November/shoes_Free_Download_Image_Hd.webp',
      name:'shoes',
      price:1800
    },
    {
      url:'https://freepngimg.com/convert-png/55163-school-bag-download-hq-image-free-png',
      name:"backpack",
      price:1200

    },
  ])
  const [cart,setCart]=useState([])
  const [showCart,setShowCart]=useState(false)
  console.log(cart)
  const addtoCart=(data)=>{
  
   setCart([...cart,{...data,quantity:1}])
  }
  const handleShow=(value)=>{
    setShowCart(value)
  }
  return (
    <div>
      <Header count={cart.length}handleShow={handleShow}/>
      {
        showCart?
        <CartList cart={cart}/>:
        <ProductList product={product} addtoCart={addtoCart}/>
      }
      
      
      </div>
   
  );
}

export default App;
