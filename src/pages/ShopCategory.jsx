import React, { useContext } from 'react'
import './css/ShopCategory.css'
import { ShopContext } from '../context/ShopContext'

import Item from '../components/item/Item'
import dropdown_icon from '../assets/dropdown_icon.png'

const ShopCategory = (props) => {

  const { all_product } = useContext(ShopContext)

  return (
    <div className='shop-category main-container'>
      <img src={props.banner} alt="banner" className='shopcategory-banner' />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
      </div>
      <div className="shopcategory-products">
        {all_product && all_product.map((item,i)=>{
          if(props.category===item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          } else {
            return null
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore more
      </div>
    </div>
  )
}

export default ShopCategory