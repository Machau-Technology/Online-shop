// 'use client'
// import dynamic from 'next/dynamic'
// const {Canvas} = dynamic(() => import('@react-three/fiber'), {
//   ssr: false,
// });
// import { Canvas } from 'react-three-fiber'

// function ThreeScene() {
//   return (
//     <Canvas>
//       <mesh>
        
//         <boxGeometry args={[1, 1, 1]} />
//         <meshBasicMaterial color="blue" />
//       </mesh>
//     </Canvas>
//   );
// }

// export default ThreeScene;

"use client"
import React from 'react';
import dynamic from 'next/dynamic'
const {Canvas} = dynamic(() => import('@react-three/fiber'), {
    ssr: true,
});


const ThreeScene = () => {
   
    return (
        <>
        <Canvas>
       <mesh>
        
         <boxGeometry args={[1, 1, 1]} />
         <meshBasicMaterial color="blue" />       
         </mesh>
    </Canvas>
        </>
    );
};

export default ThreeScene;
