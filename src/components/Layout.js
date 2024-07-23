import { Children } from 'react';
import '../App.css';

export default function Layout({ children }) {
  return (
    <div className='text-primary bg-nude h-screen w-full max-w-[400px] max-h-screen relative overflow-hidden'>
      <div className="absolute -top-16">
        <img src="/assets/flower-1.png" alt="" />
      </div>
      {Children.map(children, child =>
        <div className="h-screen">
          {child}
        </div>
      )}
      <img src="/assets/flower-2.png" alt="" className='w-[30%] absolute top-1/2 transform -translate-y-full -right-[3rem]' />
      <img src="/assets/flower-2.png" alt="" className='w-[30%] absolute top-1/2 -translate-y-full -left-[3rem] transform scale-x-[-1]' />
      <div className="absolute -bottom-16 [transform:rotatex(180deg)]">
        <img src="/assets/flower-1.png" alt="" />
      </div>
    </div>
  );
}