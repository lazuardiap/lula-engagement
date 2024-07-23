import { Children } from 'react';

export default function Layout({children}) {
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
      <div className="absolute -bottom-16 [transform:rotatex(180deg)]">
        <img src="/assets/flower-1.png" alt="" />
      </div>
    </div>
  );
}