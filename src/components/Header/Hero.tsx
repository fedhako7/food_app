import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div>
      <div>
        {/* Header */}
        <div>
          <h3>Are You Starving?</h3>
          <p>Within a few clicks, find a meals that are accessible near you!</p>
        </div>
        {/* Search  */}
        <div>
          {/* deliver and pickup icons */}
          <div>
            <div>
              {/* react lucide delivery icon here */}
              <div></div>
              <div>Deliver</div>
              {/* react lucide pickup icon here */}
              <div>Pick up</div>

            </div>
          </div>
          {/* search input  and lucide react key icon before both input and button,*/}
          <input type="text" placeholder='What do you want eat today?' />
          <button>Find Meal</button>

        </div>
      </div>

      {/* Placeholder image Image  */}
      <div>
        <Image alt='Food image'>

        </Image>
      </div>
    </div>
  )
}

export default Hero