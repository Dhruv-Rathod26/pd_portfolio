// src/components/SpaceScene.jsx
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';

function MoonMesh({ isMobile, isLargeMobile }) {
  const ref = useRef();
  const texture = useTexture('https://threejs.org/examples/textures/planets/moon_1024.jpg');
  
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.06;
    }
  });
  
  // Adjust moon position and size for different device types
  let moonPosition, moonSize;
  
  if (isLargeMobile) {
    // Galaxy S20 Ultra and similar large phones
    moonPosition = [0.8, 0.3, -1.2];
    moonSize = 1.1;
  } else if (isMobile) {
    // Regular mobile devices
    moonPosition = [1.2, 0.5, -1.8];
    moonSize = 0.9;
  } else {
    // Desktop
    moonPosition = [2.0, 1.0, -2.5];
    moonSize = 1.2;
  }
  
  return (
    <mesh ref={ref} position={moonPosition} castShadow receiveShadow>
      <sphereGeometry args={[moonSize, 64, 64]} />
      <meshStandardMaterial 
        map={texture} 
        roughness={0.8} 
        metalness={0.1}
        emissive="#2a2a4a"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

const SpaceScene = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLargeMobile, setIsLargeMobile] = useState(false);
  
  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const userAgent = navigator.userAgent.toLowerCase();
      
      // Check for Galaxy S20 Ultra and similar large phones
      const isGalaxyS20Ultra = userAgent.includes('samsung') && (width >= 360 && width <= 768 && height >= 800);
      const isLargeMobileDevice = width <= 768 && (width > 400 || height > 800) || isGalaxyS20Ultra;
      const isMobileDevice = width <= 768;
      
      setIsMobile(isMobileDevice);
      setIsLargeMobile(isLargeMobileDevice);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);
  
  // Adjust camera position for different device types
  const cameraPosition = isLargeMobile ? [0, 0, 2.5] : isMobile ? [0, 0, 3] : [0, 0, 4];
  const cameraFov = isLargeMobile ? 80 : isMobile ? 75 : 60;
  
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
      <Canvas 
        camera={{ position: cameraPosition, fov: cameraFov }} 
        dpr={[1, 1.5]} 
        gl={{ alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 3, 2]} intensity={1.5} color="#ffffff" />
        <MoonMesh isMobile={isMobile} isLargeMobile={isLargeMobile} />
        {/* Keep controls disabled for stability */}
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
};

export default SpaceScene;


