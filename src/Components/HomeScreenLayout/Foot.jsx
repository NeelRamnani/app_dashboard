import React from 'react'
import '../../assets/css/another.css'

const Foot = () => {
  return (
    <div> <footer className="bg-default-950/40 backdrop-blur-3xl">
  <div className="container py-20">
    <div className="grid md:grid-cols-4 grid-cols-2 gap-10 lg:gap-16">
      <div className="md:col-span-2 col-span-2">
        <img src="public/img/logo.png" className="h-10"  />
        <p className="md:w-3/4 text-base font-medium text-default-200 mt-6">Image generate with our ai instantly..</p>
      
      </div>
      <div>
        <ul className="flex flex-col gap-3">
          <h5 className="xl:text-xl lg:text-lg font-medium text-default-200 mb-2">Company</h5>
          <li>
            <a href="#" className="text-base font-normal text-slate-300 hover:text-primary transition-all">About</a>
          </li>
          <li>
            <a href="=" className="text-base font-normal text-slate-300 hover:text-primary transition-all">Developers</a>
          </li>
          <li>
            <a href="="className="text-base font-normal text-slate-300 hover:text-primary transition-all">Blog</a>
          </li>
          <li>
            <a href="=" className="text-base font-normal text-slate-300 hover:text-primary transition-all">Contact</a>
          </li>
        </ul>
      </div>
     
    </div>
  </div>{/* Container End */}
  <div className="border-t border-white/10 py-6">
    <div className="container flex flex-wrap justify-center items-center gap-4 h-full md:justify-between text-center md:text-start">
      <p className="text-base font-medium text-default-400">
        © Imagin Ai - <a href="#">Design &amp; Crafted <i data-lucide="heart" className="inline h-4 w-4 text-red-500 fill-red-500" /> by ImaginAi</a>
      </p>
      <p className="text-base font-medium text-default-400">
        <a href="#">Terms Conditions &amp; Policy</a>
      </p>
    </div>{/* Flex End */}
  </div>{/* Container End */}
</footer>
</div>
  )
}

export default Foot