import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Welcome to our eCommerce website, your one-stop destination for all your shopping needs! Explore a wide range of products, from the latest fashion trends to cutting-edge electronics and home essentials. We pride ourselves on offering high-quality items at unbeatable prices, ensuring you get the best value for your money. Enjoy a seamless shopping experience with secure payment options and fast delivery to your doorstep. Whether you're looking for a stylish wardrobe update or the perfect gift, we've got you covered. Shop now and discover deals you won’t want to miss!</p>
        <p>Plus, our dedicated customer support team is always here to assist you with any queries or concerns. We regularly update our collections, so be sure to check back for new arrivals and exclusive offers</p>
      </div>
    </div>
  )
}

export default DescriptionBox
