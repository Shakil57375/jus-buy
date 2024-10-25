"use client"
import { useShopContext } from '@/app/context/ShopContext'
import ProductItem from '@/components/custom/ProductItem'
import React from 'react'

const AllProduct = () => {
  const {products} = useShopContext()
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6 mt-10">
        {products.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default AllProduct