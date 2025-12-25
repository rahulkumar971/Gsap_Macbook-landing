import React from "react";
// import useMacbookstore from "../Store";
import clsx from 'clsx';
import {Canvas} from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";
import { useState } from "react";
import MacbookModel14 from "./models/Macbook-14";



const ProductViewer = () => {
  // const { color, Scale, setcolor, setScale } = useMacbookstore();
  const [color , setcolor] = useState('#abd5db');
   const [Scale , setScale] = useState(0.08);
  return (
    <section id="product-viewer">
      <h2>Take a clear look.</h2>

      <div className="controls">
        <p className="info">MackBook Pro in {Scale} in {color}</p>
        <div className="flex-center gap-5 mt-5">
          <div className="color-control">
            <div
              onClick={() => setcolor('#abd5db')}
              className={clsx('bg-neutral-300', color ==='#abd5db' && 'active')}
            />
            <div
              onClick={() => setcolor('#2e2c2e')}
              className={clsx('bg-neutral-900', color ==='#2e2c2e' && 'active')}
            />
          </div>
          <div className="size-control">
            <div
              onClick={() => setScale(0.06)}
              className={clsx(Scale===0.06 ? 'bg-white text-black' : 'bg-transparent text-white')}>
                <p>14"</p>
            </div>
            <div
              onClick={() => setScale(0.08)}
              className={clsx(Scale===0.08 ? 'bg-white text-black' : 'bg-transparent text-white')}>
                <p>16"</p>
            </div>
          </div>
        </div>
      </div>
      <Canvas id="canvas" camera={{position: [0,2,5],fav:50 , near:0.1,far:100}}>
       <ambientLight intensity={1} />
       <MacbookModel14 scale={0.06} position={[0,0,0]}/>
       <OrbitControls enableZoom={false}/>
        
      </Canvas>
    </section>
  );
};

export default ProductViewer;
