import React from 'react'

const ProductCard = ({product}) => {
  return <>
    <div className='w-60 m-3 cursor-pointer shadow-lg mx-auto  shadow-gray-500'>
      <div className='h-80'>
      <img className='w-full h-full object-cover object-top-left' src={product.imageUrl} alt="" />
      </div>
    <div className='p-3 transition ease-out  bg-white delay-150 hover:-translate-y-5 '>
        <h4 className='font-bold text-gray-600'>{product.brand}</h4>
        <p>{product.title}</p>
        <div className='space-x-2'>
          <span className='font-semibold'>&#8377;{product.price*(100-product.discountPersent)/100}  </span>
          <span className='line-through'>&#8377; {product.price} </span>
          <span className='text-green-600 font-semibold'>{product.discountPersent}% off</span>
        </div>
    </div>
    </div>
  </>
}

export default ProductCard