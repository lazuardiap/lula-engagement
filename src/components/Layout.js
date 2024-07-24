import { Children } from 'react';
import '../App.css';
import { useRef } from 'react';

export default function Layout({ children }) {
  const container = useRef();

  return (
    <div className='text-primary w-full max-w-[400px] max-h-screen relative' ref={container}>
      {Children.map(children, child => child 
      )}
      <div className='absolute bottom-0 right-0 w-[60px] animate-spin'>
        <img src="/assets/vinyl.png" alt="" />
      </div>
    </div>
  );
}