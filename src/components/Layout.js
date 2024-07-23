import { Children } from 'react';
import '../App.css';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Layout({ children }) {
  const container = useRef();

  useGSAP(() => {
    gsap.from('.flower-1-top', {y: -100, opacity: 0, duration:2});
    gsap.from('.flower-1-bot', {y: 100, opacity: 0, duration:2, delay:1});
    gsap.from('.flower-2', {opacity: 0, duration:1, stagger:0.5, delay: 3})
  }, { scope: container }
  )

  return (
    <div className='text-primary bg-nude h-screen w-full max-w-[400px] max-h-screen relative overflow-hidden' ref={container}>
      <div className="absolute -top-16 flower-1-top">
        <img src="/assets/flower-1.png" alt="" />
      </div>
      {Children.map(children, child =>
        <div className="h-screen">
          {child}
        </div>
      )}
      <img src="/assets/flower-2.png" alt="" className='w-[30%] absolute top-1/2 transform -translate-y-full -right-[3rem] flower-2' />
      <img src="/assets/flower-2.png" alt="" className='w-[30%] absolute top-1/2 -translate-y-full -left-[3rem] transform scale-x-[-1] flower-2' />
      <div className="absolute -bottom-16 [transform:rotatex(180deg)] flower-1-bot">
        <img src="/assets/flower-1.png" alt="" />
      </div>
    </div>
  );
}