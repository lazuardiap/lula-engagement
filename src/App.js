import Layout from './components/Layout';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function App() {

  const container = useRef();

  useGSAP(() => {

    gsap.from('.title', { y: -100, opacity: 0, duration: 2, delay: 2 });
    gsap.from('.names', { y: 100, opacity: 0, duration: 2, delay: 2 });
    gsap.from('.name-logo', { scale: 2, opacity: 0, duration: 2, delay: 2 });

    gsap.from('.flower-1-top', {y: -100, opacity: 0, duration:2});
    gsap.from('.flower-1-bot', {y: 100, opacity: 0, duration:2, delay:1});
    gsap.from('.flower-2', {opacity: 0, duration:1, stagger:0.5, delay: 3})

    // gsap.from('.nd-flower-1-top', { y: -100, opacity: 0, duration: 2 });
    gsap.from('.nd-flower-1-bot', { y: 100, opacity: 0, duration: 2, delay: 1 });
    gsap.from('.nd-flower-2', { opacity: 0, duration: 1, stagger: 0.5, delay: 3 })

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "bottom bottom",
        end: "top top",
        endTrigger: ".content",
        pin: true,
        pinSpacing: false,
        // markers: true
      },
    })

    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".content",
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: true,
        markers: true
      },
    })

    // tl2.from('.nd-flower-1-top', { y: -100, opacity: 0, duration: 3 });
    tl2.to('.name-logo', { scale: 0, opacity: 0, duration: 5 });
    tl2.to('.flower-1-top', {y: -100, opacity: 0, duration:4 }, 1);
    tl2.to('.title', { y: -100, opacity: 0, duration:3 }, 1);
    tl2.to('.flower-2', {opacity: 0, duration:1}, 1)
    tl2.to('.names', { y: 100, opacity: 0, duration: 2 }, 1);
    tl2.to('.flower-1-bot', {y: 100, opacity: 0, duration:4}, 1);
    


  }, { scope: container }
  )

  return (
    <div className='swipe-section' ref={container}>
      <section className='hero'>
        <div className='text-primary bg-nude h-screen w-full max-w-[400px] max-h-screen relative overflow-hidden' ref={container}>
          <div className="absolute -top-16 flower-1-top">
            <img src="/assets/flower-1.png" alt="" />
          </div>
          <div className="h-screen">
            <div className='h-full relative'>
              <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-[80%] space-y-8'>
                <div className='title justify-center flex relative text-2xl font-lora font-bold'>
                  <h1>THE ENGAGEMENT OF</h1>
                </div>
                <img src="/assets/logo.png" alt="" className='w-full name-logo' />
                <div className='names justify-center flex relative text-5xl font-tangerine font-bold'>
                  <h1>Luthfia & Lazuardi</h1>
                </div>
              </div>
            </div>
          </div>
          <img src="/assets/flower-2.png" alt="" className='w-[30%] absolute top-1/2 transform -translate-y-full -right-[3rem] flower-2' />
          <img src="/assets/flower-2.png" alt="" className='w-[30%] absolute top-1/2 -translate-y-full -left-[3rem] transform scale-x-[-1] flower-2' />
          <div className="absolute -bottom-16 [transform:rotatex(180deg)] flower-1-bot">
            <img src="/assets/flower-1.png" alt="" />
          </div>
        </div>
      </section>

      <section className='content'>
        <div className='text-primary bg-nude h-screen w-full max-w-[400px] max-h-screen relative overflow-hidden' ref={container}>
          {/* <div className="absolute -top-16 nd-flower-1-top">
            <img src="/assets/flower-1.png" alt="" />
          </div>
          <div>
            aa
          </div>
          <img src="/assets/flower-2.png" alt="" className='w-[30%] absolute top-1/2 transform -translate-y-full -right-[3rem] nd-flower-2' />
          <img src="/assets/flower-2.png" alt="" className='w-[30%] absolute top-1/2 -translate-y-full -left-[3rem] transform scale-x-[-1] nd-flower-2' />
          <div className="absolute -bottom-16 [transform:rotatex(180deg)] nd-flower-1-bot">
            <img src="/assets/flower-1.png" alt="" />
          </div> */}
        </div>
      </section>
    </div>
  )
}
