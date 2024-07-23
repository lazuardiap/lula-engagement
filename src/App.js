import Layout from './components/Layout';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function App() {

  const container = useRef();

  useGSAP(() => {
    gsap.from('.title', {y: -100, opacity: 0, duration:2, delay:2});
    gsap.from('.names', {y: 100, opacity: 0, duration:2, delay:2});
    gsap.from('.name-logo', {scale: 2, opacity:0, duration:2, delay:2});
  }, { scope: container }
  )

  return (
    <Layout>
      <div className='h-full relative' ref={container}>
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
    </Layout>
  )
}
