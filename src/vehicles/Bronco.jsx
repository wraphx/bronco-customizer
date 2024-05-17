import React, { useRef } from 'react'
import { useSnapshot } from "valtio"

import { useGLTF } from '@react-three/drei'
import { useCustomization } from '../context/Customization';
import { state } from '../components/ColorPicker';


export function Bronco(props) {
  const { nodes, materials } = useGLTF('models/Bronco.glb')
  const { overlay } = useCustomization()
  const snap1 = useSnapshot(state)

  const canvasRef = useRef(document.createElement("canvas"));
  const textureRef = useRef();
  const context = useRef(canvasRef.current.getContext("2d"));


  canvasRef.current.width = 1600;
  canvasRef.current.height = 1600;

  let ctx = context.current;

  ctx.globalCompositeOperation = "hue";

  const img = document.getElementById(`overlay${overlay}`);
  if (img.complete) {
    ctx.drawImage(img, 0, 0);
    if (snap1.base.BaseMtl !== "none") {
      if(overlay!==1){
      ctx.fillStyle = snap1.base.BaseMtl;
      ctx.fillRect(0, 0, 1600, 1600);
    }
  }


    if (textureRef.current) {
      textureRef.current.needsUpdate = true;
    }
  }

  else {
    img.onload = function () {
      ctx.drawImage(img, 0, 0);
      if (snap1.base.BaseMtl !== "none") {
        if(overlay!==1){
        ctx.fillStyle = snap1.base.BaseMtl;
        ctx.fillRect(0, 0, 1600, 1600);
        }
      }


      if (textureRef.current) {
        textureRef.current.needsUpdate = true;
      }
    }
  }



  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.body.geometry}>
        <meshStandardMaterial {...materials.BaseMtl} color={overlay==1 || overlay==13 ? (snap1.base.BaseMtl!=="none" ? snap1.base.BaseMtl : 0xffffff) : 0xffffff}>
          <canvasTexture
            flipY={false}
            wrapS={1000}
            wrapT={1000}
            colorSpace='srgb'
            ref={textureRef}
            attach="map"
            image={canvasRef.current}
          />
        </meshStandardMaterial>
    </mesh>
      {/* Other mesh elements */}
      <mesh
        geometry={nodes.plate.geometry}
        material={materials.plate}
        position={[0, 1.337, 5.003]}
        rotation={[-1.566, 0, 0]}
        scale={[0.139, 0.225, 0.225]}
      />
      <mesh geometry={nodes.Object_10.geometry} material={materials.glasss} />
      <mesh
        geometry={nodes.Object_11.geometry}
        material={materials.refl_black}
      />
      <mesh geometry={nodes.Object_12.geometry} material={materials.toyo} />
      <mesh geometry={nodes.Object_13.geometry} material={materials.GlassRed} />
      <mesh geometry={nodes.Object_14.geometry} material={materials.GlassRed} />
      <mesh geometry={nodes.Object_15.geometry} material={materials.GlassRed} />
      <mesh geometry={nodes.Object_16.geometry} material={materials.black} />
      <mesh geometry={nodes.Object_17.geometry} material={materials.black} />
      <mesh geometry={nodes.Object_18.geometry} material={materials.black} />
      <mesh geometry={nodes.Object_19.geometry} material={materials.black} />
      <mesh geometry={nodes.Object_20.geometry} material={materials.black} />
      <mesh geometry={nodes.Object_21.geometry} material={materials.black} />
      <mesh geometry={nodes.Object_22.geometry} material={materials.black} />
      <mesh geometry={nodes.Object_23.geometry} material={materials.black} />
      <mesh geometry={nodes.Object_24.geometry} material={materials.black} />
      <mesh geometry={nodes.Object_25.geometry} material={materials.black} />
      <mesh geometry={nodes.Object_26.geometry} material={materials.black} />
      <mesh geometry={nodes.Object_27.geometry} material={materials.black} />
      <mesh geometry={nodes.Object_28.geometry} material={materials.black} />
      <mesh geometry={nodes.Object_29.geometry} material={materials.black} />
      <mesh geometry={nodes.Object_3.geometry} material={materials.mirror} />
      <mesh geometry={nodes.Object_30.geometry} material={materials.black} />
      <mesh geometry={nodes.Object_31.geometry} material={materials.black} />
      <mesh geometry={nodes.Object_32.geometry} material={materials.black} />
      <mesh geometry={nodes.Object_33.geometry} material={materials.black} />
      <mesh geometry={nodes.Object_34.geometry} material={materials.black} />
      <mesh geometry={nodes.Object_35.geometry} material={materials.black} />
      <mesh geometry={nodes.Object_36.geometry} material={materials.black} />
      <mesh geometry={nodes.Object_37.geometry} material={materials.black} />
      <mesh geometry={nodes.Object_38.geometry} material={materials.black} />
      <mesh geometry={nodes.Object_39.geometry} material={materials.black} />
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.turn_light}
      />
      <mesh geometry={nodes.Object_40.geometry} material={materials.black} />
      <mesh geometry={nodes.Object_41.geometry} material={materials.black} />
      <mesh geometry={nodes.Object_42.geometry} material={materials.black} />
      <mesh geometry={nodes.Object_43.geometry} material={materials.black} />
      <mesh geometry={nodes.Object_44.geometry} material={materials.black} />
      <mesh geometry={nodes.Object_45.geometry} material={materials.black} />
      <mesh geometry={nodes.Object_46.geometry} material={materials.black} />
      <mesh geometry={nodes.Object_47.geometry} material={materials.black} />
      <mesh geometry={nodes.Object_48.geometry} material={materials.black} />
      <mesh geometry={nodes.Object_49.geometry} material={materials.black} />
      <mesh
        geometry={nodes.Object_5.geometry}
        material={materials.white_Light223}
      />
      <mesh geometry={nodes.Object_50.geometry} material={materials.black} />
      <mesh geometry={nodes.Object_51.geometry} material={materials.black} />
      <mesh geometry={nodes.Object_52.geometry} material={materials.black} />
      <mesh geometry={nodes.Object_53.geometry} material={materials.black} />
      <mesh geometry={nodes.Object_54.geometry} material={materials.black} />
      <mesh geometry={nodes.Object_55.geometry} material={materials.black} />
      <mesh geometry={nodes.Object_56.geometry} material={materials.black} />
      <mesh geometry={nodes.Object_59.geometry} material={materials.chrome} />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials.white_Light223}
      />
      <mesh geometry={nodes.Object_60.geometry} material={materials.chrome} />
      <mesh geometry={nodes.Object_61.geometry} material={materials.chrome} />
      <mesh geometry={nodes.Object_62.geometry} material={materials.chrome} />
      <mesh geometry={nodes.Object_63.geometry} material={materials.chrome} />
      <mesh geometry={nodes.Object_64.geometry} material={materials.chrome} />
      <mesh geometry={nodes.Object_65.geometry} material={materials.chrome} />
      <mesh geometry={nodes.Object_66.geometry} material={materials.chrome} />
      <mesh geometry={nodes.Object_67.geometry} material={materials.chrome} />
      <mesh geometry={nodes.Object_68.geometry} material={materials.chrome} />
      <mesh geometry={nodes.Object_69.geometry} material={materials.material} />
      <mesh
        geometry={nodes.Object_7.geometry}
        material={materials["BaseMtl.001"]}
      />
      <mesh geometry={nodes.Object_70.geometry} material={materials.material} />
      <mesh geometry={nodes.Object_71.geometry} material={materials.material} />
      <mesh geometry={nodes.Object_72.geometry} material={materials.material} />
      <mesh geometry={nodes.Object_73.geometry} material={materials.material} />
      <mesh geometry={nodes.Object_74.geometry} material={materials.material} />
      <mesh geometry={nodes.Object_75.geometry} material={materials.material} />
      <mesh geometry={nodes.Object_76.geometry} material={materials.material} />
      <mesh geometry={nodes.Object_77.geometry} material={materials.material} />
      <mesh
        geometry={nodes.Object_78.geometry}
        material={materials.refl_black}
      />
      <mesh
        geometry={nodes.Object_79.geometry}
        material={materials.refl_black}
      />
      <mesh geometry={nodes.Object_8.geometry} material={materials.chrome} />
      <mesh
        geometry={nodes.Object_80.geometry}
        material={materials.refl_black}
      />
      <mesh
        geometry={nodes.Object_81.geometry}
        material={materials.refl_black}
      />
      <mesh
        geometry={nodes.Object_82.geometry}
        material={materials.refl_black}
      />
      <mesh
        geometry={nodes.Object_83.geometry}
        material={materials.refl_black}
      />
      <mesh
        geometry={nodes.Object_84.geometry}
        material={materials.refl_black}
      />
      <mesh
        geometry={nodes.Object_85.geometry}
        material={materials.refl_black}
      />
      <mesh geometry={nodes.Object_9.geometry} material={materials.glasss} />
    </group>
  );
}

useGLTF.preload("/models/Bronco.glb");
