import React from 'react'
import { Link } from 'react-router-dom'
import {ToastContainer, toast } from 'react-toastify';
const Home = () => {
  
  return (
  <div><div className="ImaginAi_fn_fixedsub">
    <ul />
  </div>
  {/* !Moving Submenu */}
  {/* Preloader */}
  {/* !Preloader */}
  {/* MAIN WRAPPER */}

      {/* !LEFT PANEL */}
      {/* CONTENT */}
      <div className="ImaginAi_fn_content">
        {/* PAGE (all pages go inside this div) */}
        <div className="ImaginAi_fn_page">
          {/* Home Page */}
          <div className="ImaginAi_fn_home">
            <div className="section_home">
              <div className="section_left">
                {/* Title Shortcode */}
                <div className="ImaginAi_fn_title_holder">
                  <h1 className="title">Unleash Your Creativity with AI</h1>
                  <p className="desc">Generate your ideas into stunning visuals</p>
                </div>
                {/* !Title Shortcode */}
                {/* Interactive List Shortcode */}
                <div className="ImaginAi_fn_interactive_list">
                  <ul>
                    <li>
                      <div className="item">
                        <Link to="/ImageGenerate">
                          <span className="icon">
                            <img src="svg/image.svg"  className="fn__svg" />
                          </span>
                          <h2 className="title">Image Generation</h2>
                          <p className="desc">This field of AI combines deep learning algorithms and generative models to create new images that resemble real-world photographs or exhibit creative and imaginative qualities.</p>
                          <span className="arrow"><img src="svg/arrow.svg"  className="fn__svg" /></span>
                        </Link>
                      </div>
                      
                    </li>
                    <li>
                    </li>
                  </ul>
                </div>
                
                {/* !Interactive List Shortcode */}
              </div>
              {/* !Home Page */}
            </div>
            {/* !PAGE (all pages go inside this div) */}
            {/* FOOTER (inside the content) */}
           
            {/* !FOOTER (inside the content) */}
          </div>
          {/* !CONTENT */}
        </div>
        <div>
          <ToastContainer/>
        </div>
      </div></div>
 

  )
}

export default Home