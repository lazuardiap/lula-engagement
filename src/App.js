import Layout from './components/Layout';
import { useRef } from 'react';

export default function App() {

  const container = useRef();

  return (
    <Layout>
      <div className='h-full relative'>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-[80%] space-y-8'>
          <div className='title justify-center flex relative text-2xl font-lora font-bold'>
            <h1>THE ENGAGEMENT OF</h1>
          </div>
          <img src="/assets/logo.png" alt="" className='w-full' />
          <div className='names justify-center flex relative text-5xl font-tangerine font-bold'>
            <h1>Luthfia & Lazuardi</h1>
          </div>
        </div>
      </div>
    </Layout>
  )
}
