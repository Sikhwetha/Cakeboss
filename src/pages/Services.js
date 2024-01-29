import React from 'react'
import s1 from '../image/s1.jpg'
import s2 from '../image/s2.jpg'
import "./Services.css"

export default function Services() {
  return (
    <div>
      <h2 className='s-head'>What We Offer For You</h2>
      <div className='s-list'>
        <span className='ore'>All</span>
        <span>Breads</span>
        <span>Cakes</span>
        <span>Cookies</span>
        <span>Pastries</span>
        <span>Muffins</span>
      </div>

        <div class="product">
        <div class="product-image">
            <img src={s1} alt="Sourdough "/>
        </div>
        <div class="product-info">
            <h2>Sourdough</h2>
            <p>A classic sourdough bread with a crispy crust and a soft, chewy interior. Perfect for sandwiches or enjoying with your favorite spread.</p>
            <ul>
                <li>Weight: 500g</li>
                <li>Ingredients: Flour, water, salt, sourdough starter</li>
                <li>Origin: Artisan bakery</li>
            </ul>
            <p class="product-price">$3.99</p>
        </div>
    </div>

    <div class="product">
        <div class="product-image">
            <img src={s2} alt="Maple Oat Muffin "/>
        </div>
        <div class="product-info">
            <h2>Maple Oat Muffin</h2>
            <p>A delicious muffin made with oats and sweetened with pure maple syrup. Perfect for a quick breakfast or a sweet treat throughout the day.</p>
            <ul>
                <li>Weight: 150g</li>
                <li>Ingredients: Oats, flour, maple syrup, butter, eggs</li>
                <li>Origin: Gourmet pastry shop</li>
            </ul>
            <p class="product-price">$6.95</p>
        </div>
    </div>
     
    </div>
  )
}
