// import React, { useRef } from "react";
// import { useGLTF } from "@react-three/drei";

// export function Model(props) {
//   const { nodes, materials } = useGLTF("/master.gltf");
//   return (
//     <group {...props} dispose={null}>
//       <group
//         position={[0, 0.001, 0.001]}
//         rotation={[Math.PI / 2, 0, 0]}
//         scale={[0.38, 0.035, 0.38]}
//       >
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Cube_1.geometry}
//           material={materials.Material}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Cube_2.geometry}
//           material={materials.Material}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Cube_3.geometry}
//           material={materials.Material}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Cube_4.geometry}
//           material={materials.Material}
//         />
//       </group>
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Cylinder.geometry}
//         material={materials.Material}
//         position={[0, 0.001, 0.031]}
//         rotation={[Math.PI / 2, 0, 0]}
//         scale={[1, 0.005, 1]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Cylinder005.geometry}
//         material={materials["Material.001"]}
//         position={[0.208, -0.306, -0.024]}
//         rotation={[Math.PI / 2, 0, 0]}
//         scale={[1, 0.005, 1]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Cylinder006.geometry}
//         material={materials["Material.003"]}
//         position={[0.15, -0.306, -0.024]}
//         rotation={[Math.PI / 2, 0, 0]}
//         scale={[1, 0.005, 1]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Text003.geometry}
//         material={materials["Material.002"]}
//         position={[0, -0.274, 0.036]}
//         rotation={[Math.PI / 2, 0, 0]}
//       />
//     </group>
//   );
// }


import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/master.gltf");
  return (
    <group {...props} dispose={null}>
      <group
        position={[0, 0.001, 0.001]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.38, 0.035, 0.38]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_2.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_3.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_4.geometry}
          material={materials.Material}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
        position={[0, 0.001, 0.031]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1, 0.005, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text001.geometry}
        material={materials["Material.002"]}
        position={[0, -0.274, 0.036]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={materials["Material.001"]}
        position={[0.208, -0.306, -0.024]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1, 0.005, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006.geometry}
        material={materials["Material.003"]}
        position={[0.15, -0.306, -0.024]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1, 0.005, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text002.geometry}
        material={materials["Material.002"]}
        position={[0, -0.274, 0.036]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text003.geometry}
        material={materials["Material.002"]}
        position={[0, -0.274, 0.036]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text004.geometry}
        material={materials["Material.002"]}
        position={[0, -0.274, 0.036]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MasterTag_Logo.geometry}
        material={materials.MasterTag_Logo}
        position={[0, 0.001, -0.139]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}


