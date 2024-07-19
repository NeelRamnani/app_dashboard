import React from 'react'

const Documentation = () => {
  setTimeout(() => {
    window.location.reload();
  }, 3500.0);
  return (
    <div className="ImaginAi_fn_content">
      {/* PAGE (all pages go inside this div) */}
      <div className="ImaginAi_fn_page">
        {/* Documentation Page */}
        <div className="ImaginAi_fn_doc_page">
          <div className="docpage">
            {/* Page Title */}
            <div className="ImaginAi_fn_pagetitle">
              <h2 className="title">Documentation</h2>
            </div>
            {/* !Page Title */}
            <div className="doccontent">
              <div className="container small">
                <div id="doc_introduction">
                  <h4>Welcome to Imagin-AI</h4>
                  <p>Dear User,</p>
                  <p>Thank you for choosing Imagin-AI. This documentation aims to guide you through the features and functionalities of our AI platform, which utilizes Stable Diffusion models and prompt suggestions to generate high-quality images.</p>
                  <p>Our documentation is crafted to provide you with clear instructions and best practices to maximize the potential of Imagin-AI. We encourage you to explore and customize the documentation to meet your specific needs and project requirements.</p>
                  <p>Our team is committed to helping you achieve your goals, and we are available to provide further assistance and support. Should you have any questions or require additional information, please do not hesitate to reach out to us.</p>
                  <p>We look forward to working with you and contributing to your success.</p>
                  <p>Best regards,<br />The Imagin-AI Team</p>
                  <h4>Introduction</h4>
                  <p><b>Overview:</b> Discover how Imagin-AI leverages advanced AI techniques to generate contextually appropriate images based on user input prompts.</p>
                  <p><b>Key Features:</b> Explore the key features of Imagin-AI, including prompt suggestions, customization options, and high-quality image generation using Stable Diffusion models.</p>
                  <p><b>System Requirements:</b> Review the necessary hardware and software prerequisites for deploying and running Imagin-AI, including supported operating systems, browsers, and server requirements.</p>
                </div>
                <div id="doc_customization">
                  <h4>Customization</h4>
                  <p><b>Appearance:</b> Learn how to modify the visual elements of Imagin-AI, including layout, typography, icons, and overall design to align with your brand's aesthetics.</p>
                  <p><b>Prompt Suggestions:</b> Understand how to customize the prompt suggestions feature to enhance user engagement and improve the relevance of generated images.</p>
                  <p><b>Personalization:</b> Explore advanced customization options, such as user profiling and personalized recommendations, to tailor the user experience and make interactions more relevant.</p>
                </div>
         
                <div id="doc_darkmode">
                  <h4>Dark Mode</h4>
                  <p><b>Enabling Dark Mode:</b> Understand how to implement and toggle the dark mode feature within Imagin-AI's user interface, allowing users to switch between light and dark themes based on their preference.</p>
                </div>
                <div id="doc_assets">
                  <h4>Build Assets</h4>
                  <p><b>Integration APIs:</b> Explore a comprehensive guide on integrating Imagin-AI with various platforms, utilizing APIs to send and receive data and leverage additional functionalities offered by external services.</p>
                  <p><b>SDKs and Libraries:</b> Discover software development kits (SDKs) and libraries that provide pre-built components and tools for seamless integration, simplifying the development process and reducing implementation time.</p>
                </div>
                <div id="doc_multidemo">
                  <h4>Multi-Demo</h4>
                  <p><b>Multi-Language Support:</b> Learn about language localization techniques and how to incorporate multiple languages into Imagin-AI, enabling effective communication with users from diverse linguistic backgrounds.</p>
                  <p><b>Multi-Platform Deployment:</b> Gain insights into deploying Imagin-AI across different platforms, such as websites, mobile apps, social media, and messaging platforms, ensuring broad accessibility and a consistent user experience.</p>
                </div>
                <div id="doc_structure">
                  <h4>File Structure</h4>
                  <p><b>Project Organization:</b> Explore an in-depth overview of Imagin-AI's file structure, including the organization of code files, assets, configuration files, and third-party libraries. Understand how different components interact within the project.</p>
                  <p>Remember, the documentation should provide clear instructions, explanations, and examples to assist users in understanding and implementing Imagin-AI effectively. It should also incorporate diagrams and flowcharts where applicable, to enhance comprehension.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="docsidebar">
            <ul>
              <li>
                <a href="#doc_introduction">Introduction</a>
              </li>
              <li className="menu-item-has-children">
                <a href="#">
                  Quick Setup
                  <span className="trigger"><img src="svg/arrow.svg" alt className="fn__svg" /></span>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="#doc_customization"><span className="text">Customization</span></a>
                  </li>
                  <li>
                    <a href="#doc_video"><span className="text">Video Tutorials</span></a>
                  </li>
                  <li>
                    <a href="#doc_darkmode"><span className="text">Dark Mode</span></a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#doc_assets">Build Assets</a>
              </li>
              <li>
                <a href="#doc_multidemo">Multi-Demo</a>
              </li>
              <li>
                <a href="#doc_structure">File Structure</a>
              </li>
            </ul>
          </div>
        </div>
        {/* !Documentation Page */}
      </div>
    </div>
  )
}

export default Documentation
