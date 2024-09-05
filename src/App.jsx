import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber"
import { ContactShadows, Environment, Lightformer, OrbitControls, Loader } from "@react-three/drei"

import { CustomizationProvider } from "./context/Customization"
import Configurator from "./components/Configurator";
import { Bronco } from "./vehicles/Bronco";

export default function App() {

  return (

    <CustomizationProvider>
      <div className="App">
      <Loader />
        <Canvas shadows camera={{ position: [0, 0, 20], fov:40 }}>
          <color attach="background" args={['grey']} />
          <Suspense fallback={null}>
          <Bronco scale={1.1} position={[0, -1, 0]} />
          </Suspense>
          <hemisphereLight intensity={0.5} />
          <ContactShadows position={[0, -1, 0.0]} opacity={0.75} scale={10} blur={2.5} far={0.8} />
          <ContactShadows resolution={1024} frames={1} position={[0, -1, 0]} scale={15} blur={0.8} opacity={0.5} far={10} />
          
          <ambientLight intensity={0.7} />
          <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />

          {/* <Environment preset="city" /> */}
          <Environment resolution={1024} files="/studio_small_08_2k.hdr" background ground={{ height: 35, radius: 100, scale: 25 }} backgroundBlurriness={50} backgroundIntensity={10}  environmentIntensity={30}>
           
          </Environment>
         
          {/* <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={true} enablePan={false} /> */}
          <OrbitControls autoRotate enableRotate  enablePan={false} enableZoom={true}  minPolarAngle={Math.PI / 2.8} maxPolarAngle={Math.PI / 2.1} />
        </Canvas>
        <Configurator />
      </div>

    </CustomizationProvider>

  )
}

