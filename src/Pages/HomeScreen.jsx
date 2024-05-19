import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/another.css'

import PhotoSizeSelectActualOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
const HomeScreen = () => {
  return (
    
    <div>
  
  {/* end body bg gradient */}
  {/* Navbar Start */}
  
  {/* Navbar End */}
  {/* Hero Section Start */}
  
  <section id="home" className="relative overflow-hidden pt-[72px] pb-20">
    <div className="px-6 py-4">
      <div className="bg-default-950/40 rounded-2xl">
        <div className="container">
          <div className="p-6">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 items-center relative">
              <div className="absolute h-14 w-14 bg-primary/10 top-0 start-0 -z-1 rounded-2xl rounded-tl-none rounded-br-none animate-[spin_10s_linear_infinite]" />
              <div className="absolute h-14 w-14 bg-primary/20 bottom-0 end-0 -z-1 rounded-full animate-ping" />
              <div className data-aos="fade-right" data-aos-easing="ease" data-aos-duration={1000}>
                <span className="py-1 px-3 rounded-md text-sm font-medium uppercase tracking-wider text-primary bg-primary/20">MEET YOUR CO-PILOT</span>
                <h1 className="md:text-5xl/tight text-4xl font-medium text-white max-w-lg my-4">Image generate with our ai instantly.</h1>
                <p className="md:text-lg text-default-300">Get AI generated images from text straight from your <br /> browser very easily.</p>
                <a href="#" className="group mt-10 inline-flex items-center justify-center gap-2 border border-white/10 text-white py-1 px-1 pe-4 rounded-full hover:bg-primary-hover transition-all duration-300">
                <PhotoSizeSelectActualOutlinedIcon/>
                    <i data-lucide="image" className="h-10 w-55" />
                  
                    <Link to='/Login'>  Generate Images</Link><span class=""></span>
                </a>
              </div>
              <div className="mx-auto h-[595px] overflow-hidden" data-aos="zoom-in" data-aos-easing="ease" data-aos-duration={1000}>
                <div className="marquee grid grid-cols-2 gap-6">
                  <div className="relative gap-6 m-auto flex flex-col overflow-hidden">
                    <div className="marquee-hero gap-6 flex flex-col items-center justify-around flex-shrink-0 min-h-full">
                      <img className="aspect-1 object-cover rounded-xl h-full w-60" src="src/assets/images/ai/img-9.jpg" alt />
                      <img className="aspect-1 object-cover rounded-xl h-full w-60" src="src/assets/images/ai/img-14.jpg" alt />
                      <img className="aspect-1 object-cover rounded-xl h-full w-60" src="src/assets/images/ai/img-21.jpg" alt />
                      <img className="aspect-1 object-cover rounded-xl h-full w-60" src="src/assets/images/ai/img-22.jpg" alt />
                      <img className="aspect-1 object-cover rounded-xl h-full w-60" src="src/assets/images/ai/img-10.jpg" alt />
                    </div>
                    <div aria-hidden="true" className="marquee-hero gap-6 flex flex-col items-center justify-around flex-shrink-0 min-h-full">
                      <img className="aspect-1 object-cover rounded-xl h-full w-60" src="src/assets/images/ai/img-9.jpg" alt />
                      <img className="aspect-1 object-cover rounded-xl h-full w-60" src="src/assets/images/ai/img-14.jpg" alt />
                      <img className="aspect-1 object-cover rounded-xl h-full w-60" src="src/assets/images/ai/img-21.jpg" alt />
                      <img className="aspect-1 object-cover rounded-xl h-full w-60" src="src/assets/images/ai/img-22.jpg" alt />
                      <img className="aspect-1 object-cover rounded-xl h-full w-60" src="src/assets/images/ai/img-10.jpg" alt />
                    </div>
                  </div>
                  <div className="marquee-reverse gap-6 m-auto flex flex-col overflow-hidden">
                    <div className="marquee-hero gap-6 flex flex-col items-center justify-around flex-shrink-0 min-h-full">
                      <img className="aspect-1 object-cover rounded-xl h-full w-60" src="src/assets/images/ai/img-6.jpg" alt />
                      <img className="aspect-1 object-cover rounded-xl h-full w-60" src="src/assets/images/ai/img-10.jpg" alt />
                      <img className="aspect-1 object-cover rounded-xl h-full w-60" src="src/assets/images/ai/img-11.jpg" alt />
                      <img className="aspect-1 object-cover rounded-xl h-full w-60" src="src/assets/images/ai/img-12.jpg" alt />
                      <img className="aspect-1 object-cover rounded-xl h-full w-60" src="src/assets/images/ai/img-13.jpg" alt />
                    </div>
                    <div aria-hidden="true" className="marquee-hero gap-6 flex flex-col items-center justify-around flex-shrink-0 min-h-full">
                      <img className="aspect-1 object-cover rounded-xl h-full w-60" src="src/assets/images/ai/img-6.jpg" alt />
                      <img className="aspect-1 object-cover rounded-xl h-full w-60" src="src/assets/images/ai/img-10.jpg" alt />
                      <img className="aspect-1 object-cover rounded-xl h-full w-60" src="src/assets/images/ai/img-11.jpg" alt />
                      <img className="aspect-1 object-cover rounded-xl h-full w-60" src="src/assets/images/ai/img-12.jpg" alt />
                      <img className="aspect-1 object-cover rounded-xl h-full w-60" src="src/assets/images/ai/img-13.jpg" alt />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>{/* Container End */}
  </section>
  {/* Hero end  */}
  <section className="pb-24">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="relative rounded-lg overflow-hidden" data-aos="fade-right" data-aos-easing="ease" data-aos-duration={1000}>
          <img className="mx-auto h-full w-full object-cover object-top ransition duration-500 group-hover:scale-105" src="src/assets/images/ai/img-10.jpg" alt="woman" loading="lazy" width={640} height={805} />
          <div className="absolute inset-0">
            <div className="h-full w-full">
              <div className="flex items-end h-full w-full p-5">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded w-full">
                  <h2 className="text-lg font-normal text-center text-default-300">Gaze upon the awe-inspiring creation of artificial intelligence, a majestic dragon of epic proportions. </h2>
                </div>
              </div>
            </div>
          </div>
        </div>{/* end gid-col */}
        <div className="grid md:grid-cols-2 gap-6" data-aos="fade-left" data-aos-easing="ease" data-aos-duration={1000}>
          <div className="relative rounded-lg overflow-hidden">
            <img className="mx-auto h-full w-full object-cover object-top ransition duration-500 group-hover:scale-105" src="src/assets/images/ai/img-13.jpg" alt="woman" loading="lazy" width={640} height={805} />
            <div className="absolute inset-0">
              <div className="h-full w-full">
                <div className="flex items-end h-full w-full p-5">
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded w-full">
                    <h3 className="text-lg font-normal text-center text-default-200">An enchanting ice dragon born from the algorithms of AI</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>{/* col end  */}
          <div className="relative rounded-lg overflow-hidden">
            <img className="mx-auto h-full w-full object-cover object-top ransition duration-500 group-hover:scale-105" src="src/assets/images/ai/img-8.jpg" alt="woman" loading="lazy" width={640} height={805} />
            <div className="absolute inset-0">
              <div className="h-full w-full">
                <div className="flex items-end h-full w-full p-5">
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded w-full">
                    <h3 className="text-lg font-normal text-center text-default-200">A marvel of mechanical artistry and AI ingenuity</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>{/* col end  */}
        </div>
        {/* end grid-col */}
        <div className="relative rounded-lg overflow-hidden" data-aos="fade-right" data-aos-easing="ease" data-aos-duration={1000}>
          <img className="mx-auto h-full w-full object-cover object-top ransition duration-500 group-hover:scale-105" src="src/assets/images/ai/img-11.jpg" alt="woman" loading="lazy" width={640} height={805} />
          <div className="absolute inset-0">
            <div className="h-full w-full">
              <div className="flex items-end h-full w-full p-5">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded w-full">
                  <h3 className="text-lg font-normal text-center text-default-200">In the heart of an enchanted forest, an AI-born dragon stands as a guardian of the woods</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end grid-col */}
        <div className="relative rounded-lg overflow-hidden" data-aos="fade-left" data-aos-easing="ease" data-aos-duration={1000}>
          <img className="mx-auto h-full w-full object-cover object-top ransition duration-500 group-hover:scale-105" src="src/assets/images/ai/img-12.jpg" alt="woman" loading="lazy" width={640} height={805} />
          <div className="absolute inset-0">
            <div className="h-full w-full">
              <div className="flex items-end justify-end h-full w-full p-5">
                <a href="#" className="py-2 px-3 flex items-center gap-6 rounded-full text-default-300 bg-white/10 backdrop-blur-md">Explore more
                  <i data-lucide="send" className="h-5 w-5 stroke-white" />
                </a>
              </div>
            </div>
          </div>
        </div>{/* end grid-col */}
      </div>{/* grid end  */}
    </div>{/* container end  */}
  </section>
  <section id="features" className="pb-24">
    <div className="container">
      <div className="flex items-end justify-between mb-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-medium capitalize text-white mb-4">The AI Generator that helps you Create amazing image taster.</h2>
        </div>
      </div>{/* end flex */}
      <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
        <div className="p-10 rounded-lg bg-default-950/40" data-aos="fade-up" data-aos-easing="ease" data-aos-duration={1000}>
          <div className="text-center">
            <i data-lucide="activity" className="h-10 w-10 text-primary mx-auto" />
            <h2 className="text-2xl font-medium text-default-200 mt-4">Built for speed</h2>
            <p className="text-base font-normal text-default-300 mt-4">Generate up to 10 images in seconds. Our AI is super fast and flexible that can generate image for you in quick times</p>
            <a href="#" className="inline-flex gap-2 items-center relative text-primary group mt-5">
              <span className="absolute h-px w-7/12 group-hover:w-full transition-all duration-500 rounded bg-primary/80 -bottom-0" />
              Lead more <i data-lucide="move-right" className="h-4 w-4" />
            </a>
          </div>
        </div>{/* end grid-col */}
        <div className="p-10 rounded-lg bg-default-950/40" data-aos="fade-up" data-aos-easing="ease" data-aos-duration={1000}>
          <div className="text-center">
            <i data-lucide="layers" className="h-10 w-10 text-primary mx-auto" />
            <h2 className="text-2xl font-medium text-default-200 mt-4">10+ AI models</h2>
            <p className="text-base font-normal text-default-300 mt-4">From Starble Diffusion to custom community styles. We have over 10+ AI models that will works better for you.</p>
            <a href="#" className="inline-flex gap-2 items-center relative text-primary group mt-5">
              <span className="absolute h-px w-7/12 group-hover:w-full transition-all duration-500 rounded bg-primary/80 -bottom-0" />
              Lead more <i data-lucide="move-right" className="h-4 w-4" />
            </a>
          </div>
        </div>{/* end grid-col */}
        <div className="p-10 rounded-lg bg-default-950/40" data-aos="fade-up" data-aos-easing="ease" data-aos-duration={1000}>
          <div className="text-center">
            <i data-lucide="dribbble" className="h-10 w-10 text-primary mx-auto" />
            <h2 className="text-2xl font-medium text-default-200 mt-4">Works for everything</h2>
            <p className="text-base font-normal text-default-300 mt-4">Generate up to 10 images in seconds. Our AI is super fast and flexible that can generate image for you in quick times</p>
            <a href="#" className="inline-flex gap-2 items-center relative text-primary group mt-5">
              <span className="absolute h-px w-7/12 group-hover:w-full transition-all duration-500 rounded bg-primary/80 -bottom-0" />
              Lead more <i data-lucide="move-right" className="h-4 w-4" />
            </a>
          </div>
        </div>{/* end grid-col */}
      </div>{/* end grid */}
    </div>{/* end container */}
  </section>
  <section id="ai_made" className="pb-24">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div className="relative" data-aos="fade-right" data-aos-easing="ease" data-aos-duration={1000}>
          <img src="src/assets/images/ai/img-7.jpg" className="rounded-xl" alt />
          <div className="absolute inset-0 bg-default-950/50 rounded-xl" />
          <div className="hidden lg:block">
            <div className="absolute top-10 -end-52">
              <div className="inline-block">
                <div className="rounded-full border border-white/10 bg-default-950/60 backdrop-blur-lg">
                  <div className="max-w-sm text-center p-6">
                    <p className="text-base font-medium text-default-300">The image is original and not copied or borroweb from someone else's work</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-auto bottom-20 -start-20">
              <div className="inline-block">
                <div className="rounded-full border border-white/10 bg-default-950/60 backdrop-blur-lg">
                  <div className="py-4 px-6 ">
                    <h5>Detailed Work</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{/* end grid-col */}
        <div data-aos="fade-left" data-aos-easing="ease" data-aos-duration={1000}>
          <div className="max-w-md text-end ms-auto">
            <span className="py-1 px-3 rounded-md text-sm font-medium uppercase tracking-wider text-primary bg-primary/10">Unique Images</span>
            <h2 className="text-3xl font-medium capitalize text-default-200 mt-4">Unique Images means no copyright issues</h2>
            <p className="text-base font-medium text-default-300 mt-5 mb-8">The image is original and not copied or borrowed from someone else's work, which ensures that there are no legal restrictions on its use or distribution.</p>
            <a href="#" className="inline-flex items-center justify-center gap-2 border border-white/10 text-white py-2 px-6 rounded-full bg-primary hover:bg-primary-hover transition-all duration-300">Read More
              <i data-lucide="move-right" className="h-5 w-5" />
            </a>
          </div>
        </div>{/* end grid-col */}
      </div>{/* end grid */}
      <div className="grid md:grid-cols-2 gap-6 items-center mt-12">
        <div data-aos="fade-right" data-aos-easing="ease" data-aos-duration={1000}>
          <div className="max-w-md p-3">
            <span className="py-1 px-3 rounded-md text-sm font-medium uppercase tracking-wider text-primary bg-primary/10">custom Images</span>
            <h2 className="text-3xl font-medium capitalize text-default-200 mt-4">Create images your custom AI mode</h2>
            <p className="text-base font-medium text-default-300 mt-5 mb-8">Every element in this image, from the smallest brushstroke to the grandest panorama, is a product of AI's creative prowess.</p>
            <a href="#" className="inline-flex items-center justify-center gap-2 border border-white/10 text-white py-2 px-6 rounded-full bg-primary hover:bg-primary-hover transition-all duration-300">Read More
              <i data-lucide="move-right" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div></div></section></div>

  )
}

export default HomeScreen