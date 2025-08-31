import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const { productId } = useParams();
  const { products,currency,addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size,setSize] = useState('')

  useEffect(() => {
    const item = products.find((item) => item._id === productId);
    if (item) {
      setProductData(item);
      setImage(item.image[0]);
    }
  }, [productId, products]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Product images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          {/* Thumbnails */}
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image?.map((item, index) => (
              <img onClick={() => setImage(item)}
                key={index}
                src={item}
                alt={`Product thumbnail ${index}`}
                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
              />
            ))}
          </div>

          {/* Main image */}
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="Main Product"  />
          </div>
        </div>

        {/* ----------product info------- */}
        <div className='flex-1'>
            <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
            <div className='flex item-center gap-1 mt-2'>
              <img className="w-3 5" src={assets.star_icon} alt="" />
              <img className="w-3 5" src={assets.star_icon} alt="" />
              <img className="w-3 5" src={assets.star_icon} alt="" />
              <img className="w-3 5" src={assets.star_icon} alt="" />
              <img className="w-3 5" src={assets.star_dull_icon} alt="" />
              <p className='pl-2'>(122)</p>
            </div>
            <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
            <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
            <div className='flex flex-col gap-4 my-8'>
                <p>Select Size</p>
                <div className='flex gap-2'>
                  {productData.sizes.map((item,index)=>(
                    <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : '' }`} key={index}>{item}</button>
                  ))}
                </div>
            </div>
            <button onClick={()=> addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
            <hr className='mt-8 sm:w-4/5'/>
            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p>100% Original product.</p>
              <p>Cash on delivery is avilable on this product.</p>
              <p>Easy return and exchange policy within 7 days.</p>
            </div>
        </div>
      </div>
      {/* ---------Discription and review section --------- */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Discription</b>
          <p className='border px-5 py-3 text-sm'>Review (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. it serves as a virtual marketplace where business and individuals can showcase their products, interact with customer and conduct transactions without the need for a physical presence.e-commerce website have gained immense popularity due to ther convence and the global reach. </p>
          <p>An E-commerce website is an online platform that enables businesses or individuals to buy and sell goods or services over the internet. Examples: Amazon, Flipkart, Myntra, Meesho.</p>
        </div>
      </div>

      {/* ------display related products--------*/}
      <RelatedProducts category={productData.category} subcategory={productData.subcategory}/>

    </div>
  ) : (
    <div className='opacity-0'></div>
  );
};

export default Product;
