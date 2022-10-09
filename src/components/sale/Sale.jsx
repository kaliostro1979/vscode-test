import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSaleProducts } from './../../redux/slices/sale.slice'
import SaleCard from './SaleCard'

const Sale = () => {
  const dispatch = useDispatch()
  const saleProducts = useSelector((state) => state.main.sale.products)

  useEffect(() => {
    dispatch(getSaleProducts())
  }, [dispatch])

  return (
    <div className="Sale">
      {saleProducts.map((product) => {
        return <SaleCard product={product} key={product.id}/>
      })}
    </div>
  )
}

export default Sale
