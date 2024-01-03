import React from 'react';
import Nav from '../Nav/Nav';
import '../Autcss.css';

const WelcomeHome = () => {
  return (
    <div>
      <div className='q_elements_item_content q_elements_holder_custom_605243' style={{ padding: '1px 1px' }}><Nav/></div>
      
      <div className='App-header'>
        <h2>Welcome</h2>


   

        {/* Animated Banner */}
        <div className="animated-banner">
          <img src=" https://st.depositphotos.com/1194063/3369/i/450/depositphotos_33699059-stock-photo-heart-at-the-human-hands.jpg" />
          <div className="sticker sticker1"><img src=''/> hola</div>
          <div className="sticker sticker2">Sticker 2</div>
        </div>

       
        {/* Side Banners for Image Advertisements */}
        <div className="advertisement-side-banners">
          {/* Left Side Banner */}
          <div className="side-banner left">
            <img src="data:image/jpeg;base64,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" alt="Left Banner" />
            <p className="caption">Left Banner Caption</p>
          </div>

          {/* Right Side Banner */}
          
        </div>

        <div className="q_elements_item_content q_elements_holder_custom_605243" style={{ padding: '50px 100px' }}>
          <div className="wpb_text_column wpb_content_element ">
            <div className="wpb_wrapper">
              <h2>Where are the donors?</h2>
              <p>&nbsp;</p>
              <p>A key area of focus for GBF is recruiting and retaining donors. There is an opportunity to improve donor retention in many parts of the world, where the demand for blood in hospitals is not met.</p>
               {/* Blood Donation Banner */}
        <div className="blood-donation-banner">
          <p className="donation-info">Your chance to save lives! Donate blood today.</p>
        </div>
        <div className="side-banner right">
            <img src="https://png.pngtree.com/png-clipart/20220111/original/pngtree-little-girl-donating-blood-png-image_7084374.png" alt="Right Banner" />
            <p className="caption">Right Banner Caption</p>
          </div>

              <p>&nbsp;</p>
              <p>To combat the shortfall, either relatives of patients are coerced to donate or health authorities resort to the unsafe practice of paid donation.</p>
              <p>&nbsp;</p>
              <p>In countries where testing facilities are limited or non-existent, there is a high threat of transmitting HIV, malaria, hepatitis, or other chronic and potentially deadly diseases.</p>
            </div> 
          </div>
        </div>
        

        {/* Advertisement Banner */}
        <div className="advertisement-banner">
          <p className="advertisement-text">Special offer: Join our blood donation drive and get a free health checkup!</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeHome;
