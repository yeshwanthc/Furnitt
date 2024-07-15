import React from 'react'

const AboutPage = () => {
  return (
    <div>
       <div
        className="relative banner bg-cover bg-center"
        style={{ backgroundImage: `url('images/banner.jpg')` }}
      >
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center">
            About Us
          </h1>
        </div>
      </div>
    </div>
  )
}

export default AboutPage;