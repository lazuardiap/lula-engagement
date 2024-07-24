import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIntersection } from 'react-use';
gsap.registerPlugin(ScrollTrigger);

export default function App() {

  const [isIntersect, setIsIntersect] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 5000)

  const container = useRef(null);

  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "2px",
    threshold: 1
  })

  useGSAP(() => {

    gsap.from('.title', { y: -100, opacity: 0, duration: 2, delay: 2 });
    gsap.from('.names', { y: 100, opacity: 0, duration: 2, delay: 2 });
    gsap.from('.name-logo', { scale: 2, opacity: 0, duration: 2, delay: 2 });

    gsap.from('.flower-1-top', { y: -100, opacity: 0, duration: 2 });
    gsap.from('.flower-1-bot', { y: 100, opacity: 0, duration: 2, delay: 1 });
    gsap.from('.flower-2', { opacity: 0, duration: 1, stagger: 0.5, delay: 3 })

    // gsap.from('.nd-flower-1-top', { y: -100, opacity: 0, duration: 2 });
    // gsap.from('.nd-flower-1-bot', { y: 100, opacity: 0, duration: 2, delay: 1 });
    // gsap.from('.nd-flower-2', { opacity: 0, duration: 1, stagger: 0.5, delay: 3 })

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "bottom bottom",
        end: "top top",
        endTrigger: ".content",
        pin: true,
        pinSpacing: false,
        snap: { duration: 1, ease: 'power4.out', snapTo: 1 },
        // markers: true
      },
    })

    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".content",
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: true,
        // markers: true,
        // onLeave: () => {
        //   setIsIntersect(true);
        //   gsap.from('.nd-flower-1-top', { y: -100, opacity: 0, duration: 2 });
        // }
      },
    })

    // let tl3 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".content",
    //     start: 'top center',
    //     end: 'bottom bottom',
    //     scrub: true,
    //     markers: true,
    //     onLeave: () => {
    //       // console.log('aa')
    //       // gsap.from('.nd-flower-1-top', { y: -100, opacity: 0, duration: 2 });
    //     },
    //   },
    // });

    // tl3.from('.nd-flower-1-top', { y: -100, opacity: 0, duration: 4 }, 1);
    // tl3.from('.nd-flower-1-bot', { y: 100, opacity: 0, duration: 4, delay: 1 }, 2);

    // tl2.from('.nd-flower-1-top', { y: -100, opacity: 0, duration: 3 });
    tl2.to('.name-logo', { scale: 0, opacity: 0, duration: 5 });
    tl2.to('.flower-1-top', { y: -100, opacity: 0, duration: 4 }, 1);
    tl2.to('.title', { y: -100, opacity: 0, duration: 3 }, 1);
    tl2.to('.flower-2', { opacity: 0, duration: 1 }, 1)
    tl2.to('.names', { y: 100, opacity: 0, duration: 2 }, 1);
    tl2.to('.flower-1-bot', { y: 100, opacity: 0, duration: 4 }, 1);

    // intersection && intersection.intersectionRatio < 0.9 ?
    //   console.log('aa')
    //   :
    //   console.log('bb')
  }, { scope: container }
  )

  useGSAP(() => {

    const fadeIn = () => {
      console.log('fadeIn')
      gsap.fromTo('.nd-flower-1-top', { y: -100, opacity: 0, duration: 2 }, { y: 0, opacity: 1, duration: 2 });
      gsap.fromTo('.nd-flower-1-bot', { y: 100, opacity: 0, duration: 2 }, { y: 0, opacity: 1, duration: 2, delay: 1 });
      gsap.fromTo('.nd-flower-2', { opacity: 0, duration: 1, stagger: 0.5 }, { opacity: 1, duration: 1, stagger: 0.5, delay: 3 })
    }

    const fadeOut = () => {
      console.log('fadeOut')
    }

    if (!sectionRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([event]) => {
        if (event.isIntersecting) {
          setIsIntersect(true);
          fadeIn()
          setIsLoading(true);
          setTimeout(() => {
            setIsLoading(false);
          }, 4000)
        } else {
          // setIsIntersect(false);
          fadeOut()
        }
      },
      { threshold: [1], rootMargin: '2px' }
    )
    observer.observe(sectionRef.current);
    return () => {
      observer.disconnect();
    }
  }, { dependencies: [isIntersect, intersection, sectionRef.current], scope: sectionRef })

  useGSAP(() => {
    let tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".content",
        start: 'top center',
        end: 'bottom center',
        // markers: true,
        onLeaveBack: () => {
          // setIsIntersect(false);
          gsap.to('.nd-flower-1-top', { y: -100, opacity: 0, duration: 2 });
          gsap.to('.nd-flower-1-bot', { y: 100, opacity: 0, duration: 2 });
          gsap.to('.nd-flower-2', { opacity: 0, duration: 1, stagger: 0.5 })
        }
      },
    });
  }, { scope: container })

  useEffect(() => {
    isLoading ? document.documentElement.style.overflow = "hidden" : document.documentElement.style.overflow = ""
  }, [isLoading])

  return (
    <div className='swipe-section snap-y' ref={container}>
      <section className='hero snap-start'>
        <div className='text-primary bg-nude h-screen w-full max-w-[400px] max-h-screen relative overflow-hidden'>
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

      <section className='content snap-start relative' ref={sectionRef}>
        <div className='text-primary bg-nude h-screen w-full max-w-[400px] max-h-screen relative overflow-hidden'>
          <div className={`absolute -top-16 nd-flower-1-top ${isIntersect ? 'visible' : 'invisible'}`}>
            <img src="/assets/flower-1.png" alt="" />
          </div>
          <div className="h-screen">
            <div className='h-full relative'>
              <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-[80%]'>
                <div className='flex flex-col space-y-2 mb-3'>
                  <div className='justify-center flex relative text-sm font-lora font-medium'>
                    <h1>SAVE THE DATE</h1>
                  </div>
                  <div className='justify-center flex relative text-3xl font-lora font-medium'>
                    <h1>AUGUST</h1>
                  </div>
                </div>
                <img src="/assets/date.png" alt="" className='w-3/4 mb-4' />
                <div className='flex flex-col space-y-2 mb-4'>
                  <div className='justify-center flex relative text-base font-inter tracking-[.2em]'>
                    <h1>SATURDAY | 03.08.2024</h1>
                  </div>
                  <div className='flex flex-col items-center'>
                    <div className='justify-center flex relative text-base font-inter tracking-[.2em]'>
                      <h1>09.30 AM</h1>
                    </div>
                    <div className='w-[30%]'>
                      <img src="/assets/fence.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className='justify-center flex relative font-inter tracking-widest text-center text-sm'>
                  <h1>Perum Prima Sukaharja Blok G1 No.3, Sukaharja, Telukjambe Timur, Karawang</h1>
                </div>
              </div>
            </div>
          </div>
          <img src="/assets/flower-2.png" alt="" className={`w-[30%] absolute top-1/2 transform -translate-y-full -right-[3rem] nd-flower-2 ${isIntersect ? 'visible' : 'invisible'}`} />
          <img src="/assets/flower-2.png" alt="" className={`w-[30%] absolute top-1/2 -translate-y-full -left-[3rem] transform scale-x-[-1] nd-flower-2 ${isIntersect ? 'visible' : 'invisible'}`} />
          <div className={`absolute -bottom-16 [transform:rotatex(180deg)] nd-flower-1-bot ${isIntersect ? 'visible' : 'invisible'}`}>
            <img src="/assets/flower-1.png" alt="" />
          </div>
        </div>

        <div className='absolute z-999 bottom-[40%] right-0 p-2'>
          <a href="https://maps.app.goo.gl/qbYFoj98rd8UiKwg7" target='_blank'>
            <div className='bg-semi-nude p-4 rounded-full flex'>
              <img src="/assets/location.png" alt="" width="25px" height="25px" />
            </div>
          </a>
        </div>
      </section>
    </div>
  )
}
