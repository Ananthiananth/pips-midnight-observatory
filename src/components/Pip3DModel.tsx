import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { RotateCcw } from 'lucide-react';

interface Pip3DModelProps {
  theme: 'light' | 'dark';
}

export const Pip3DModel: React.FC<Pip3DModelProps> = ({ theme }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  // References to three.js objects for interaction and reset
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const characterGroupRef = useRef<THREE.Group | null>(null);
  const sparklesGroupRef = useRef<THREE.Group | null>(null);

  // Interaction tracking
  const isDraggingRef = useRef(false);
  const previousPointerPosition = useRef({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0.1, y: 0.2 });
  const currentRotation = useRef({ x: 0.1, y: 0.2 });
  const initialCameraZ = 3.8;

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    let animationFrameId: number;
    let renderer: THREE.WebGLRenderer;

    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      rendererRef.current = renderer;
    } catch (err) {
      console.warn('WebGL is unavailable:', err);
      setHasWebGL(false);
      return;
    }

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const aspect = container.clientWidth / container.clientHeight;
    const camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 100);
    camera.position.set(0, 0.3, initialCameraZ);
    cameraRef.current = camera;

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(
      theme === 'dark' ? 0x9d8bff : 0xffffff,
      theme === 'dark' ? 1.2 : 1.4
    );
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xfff5e6, 2.0);
    mainLight.position.set(2, 4, 3);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 1024;
    mainLight.shadow.mapSize.height = 1024;
    scene.add(mainLight);

    const fillLight = new THREE.PointLight(theme === 'dark' ? 0xd946ef : 0xf472b6, 1.5, 10);
    fillLight.position.set(-2, 1, 2);
    scene.add(fillLight);

    // --- Pip Character Group ---
    const characterGroup = new THREE.Group();
    characterGroupRef.current = characterGroup;
    scene.add(characterGroup);

    // 1. Head (Peach sphere)
    const headGeo = new THREE.SphereGeometry(0.65, 32, 32);
    const headMat = new THREE.MeshStandardMaterial({
      color: 0xffd2b8,
      roughness: 0.45,
      metalness: 0.05
    });
    const head = new THREE.Mesh(headGeo, headMat);
    head.position.y = 0.45;
    head.castShadow = true;
    head.receiveShadow = true;
    characterGroup.add(head);

    // 2. Eyes
    const eyeGeo = new THREE.SphereGeometry(0.065, 16, 16);
    const eyeMat = new THREE.MeshStandardMaterial({ color: 0x241d3b, roughness: 0.2 });
    
    const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
    leftEye.position.set(-0.2, 0.5, 0.58);
    leftEye.scale.set(1, 1.4, 0.7);
    characterGroup.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
    rightEye.position.set(0.2, 0.5, 0.58);
    rightEye.scale.set(1, 1.4, 0.7);
    characterGroup.add(rightEye);

    // 3. Cute Blushing Cheeks
    const cheekGeo = new THREE.SphereGeometry(0.09, 16, 16);
    const cheekMat = new THREE.MeshStandardMaterial({ color: 0xff8fa3, roughness: 0.6 });
    
    const leftCheek = new THREE.Mesh(cheekGeo, cheekMat);
    leftCheek.position.set(-0.35, 0.38, 0.48);
    leftCheek.scale.set(1.2, 0.8, 0.5);
    characterGroup.add(leftCheek);

    const rightCheek = new THREE.Mesh(cheekGeo, cheekMat);
    rightCheek.position.set(0.35, 0.38, 0.48);
    rightCheek.scale.set(1.2, 0.8, 0.5);
    characterGroup.add(rightCheek);

    // 4. Smile
    const smileCurve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(-0.09, 0.35, 0.61),
      new THREE.Vector3(0, 0.28, 0.62),
      new THREE.Vector3(0.09, 0.35, 0.61)
    );
    const smileGeo = new THREE.TubeGeometry(smileCurve, 12, 0.02, 8, false);
    const smileMat = new THREE.MeshBasicMaterial({ color: 0x3d294d });
    const smile = new THREE.Mesh(smileGeo, smileMat);
    characterGroup.add(smile);

    // 5. Acorn / Beret Hat with little stem
    const hatDomeGeo = new THREE.SphereGeometry(0.68, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.45);
    const hatMat = new THREE.MeshStandardMaterial({
      color: 0x826593, // stylish muted purple-acorn
      roughness: 0.5,
      metalness: 0.1
    });
    const hat = new THREE.Mesh(hatDomeGeo, hatMat);
    hat.position.set(0, 0.8, 0);
    hat.rotation.x = -0.05;
    hat.castShadow = true;
    characterGroup.add(hat);

    // Hat brim / cushion ring
    const brimGeo = new THREE.TorusGeometry(0.63, 0.09, 16, 32);
    const brim = new THREE.Mesh(brimGeo, hatMat);
    brim.position.set(0, 0.83, 0);
    brim.rotation.x = Math.PI / 2 - 0.05;
    brim.castShadow = true;
    characterGroup.add(brim);

    // Hat stem / stalk on top
    const stemGeo = new THREE.CylinderGeometry(0.045, 0.06, 0.18, 12);
    const stemMat = new THREE.MeshStandardMaterial({ color: 0x5a416b, roughness: 0.7 });
    const stem = new THREE.Mesh(stemGeo, stemMat);
    stem.position.set(0.05, 1.28, -0.03);
    stem.rotation.z = -0.2;
    stem.castShadow = true;
    characterGroup.add(stem);

    // 6. Body (Soft pink cozy egg/capsule body)
    const bodyGeo = new THREE.SphereGeometry(0.52, 32, 32);
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0xefa2b3,
      roughness: 0.6,
      metalness: 0.05
    });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.set(0, -0.3, 0);
    body.scale.set(0.9, 1.25, 0.9);
    body.castShadow = true;
    body.receiveShadow = true;
    characterGroup.add(body);

    // 7. Little golden arms / mittens
    const armGeo = new THREE.SphereGeometry(0.18, 20, 20);
    const armMat = new THREE.MeshStandardMaterial({ color: 0xf5bf4f, roughness: 0.5 });
    
    const leftArm = new THREE.Mesh(armGeo, armMat);
    leftArm.position.set(-0.46, -0.2, 0.1);
    leftArm.scale.set(0.85, 1.3, 0.85);
    leftArm.rotation.z = 0.35;
    characterGroup.add(leftArm);

    const rightArm = new THREE.Mesh(armGeo, armMat);
    rightArm.position.set(0.46, -0.2, 0.1);
    rightArm.scale.set(0.85, 1.3, 0.85);
    rightArm.rotation.z = -0.35;
    characterGroup.add(rightArm);

    // 8. Glowing soft podium on floor
    const podiumGeo = new THREE.CylinderGeometry(1.2, 1.2, 0.06, 32);
    const podiumMat = new THREE.MeshStandardMaterial({
      color: theme === 'dark' ? 0xd946ef : 0xfbcfe8,
      roughness: 0.3,
      metalness: 0.1,
      transparent: true,
      opacity: theme === 'dark' ? 0.35 : 0.6
    });
    const podium = new THREE.Mesh(podiumGeo, podiumMat);
    podium.position.set(0, -0.98, 0);
    podium.receiveShadow = true;
    scene.add(podium);

    // 9. Orbiting Stardust Sparkles
    const sparklesGroup = new THREE.Group();
    sparklesGroupRef.current = sparklesGroup;
    scene.add(sparklesGroup);

    const sparkleGeo = new THREE.SphereGeometry(0.035, 12, 12);
    const sparkleMat = new THREE.MeshStandardMaterial({
      color: 0xfacc15,
      emissive: 0xfacc15,
      emissiveIntensity: 0.8,
      roughness: 0.2
    });

    const sparkleCount = 18;
    for (let i = 0; i < sparkleCount; i++) {
      const angle = (i / sparkleCount) * Math.PI * 2;
      const radius = 1.35 + (i % 3) * 0.15;
      const height = Math.sin(i * 1.8) * 0.35 + 0.1;
      const s = new THREE.Mesh(sparkleGeo, sparkleMat);
      s.position.set(Math.cos(angle) * radius, height, Math.sin(angle) * radius);
      sparklesGroup.add(s);
    }

    // --- Resize Handler ---
    const updateSize = () => {
      if (!container || !renderer) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    updateSize();

    window.addEventListener('resize', updateSize);

    // --- Animation Render Loop ---
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth damped rotation towards targetRotation
      currentRotation.current.x += (targetRotation.current.x - currentRotation.current.x) * 0.1;
      currentRotation.current.y += (targetRotation.current.y - currentRotation.current.y) * 0.1;

      characterGroup.rotation.x = currentRotation.current.x;
      characterGroup.rotation.y = currentRotation.current.y;

      // Gentle floating breathing animation
      characterGroup.position.y = Math.sin(elapsed * 2.2) * 0.06;

      // Orbit sparkles
      sparklesGroup.rotation.y = elapsed * 0.5;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', updateSize);
      renderer.dispose();
    };
  }, [theme]);

  // Handle pointer drag to rotate
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    previousPointerPosition.current = { x: e.clientX, y: e.clientY };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - previousPointerPosition.current.x;
    const deltaY = e.clientY - previousPointerPosition.current.y;

    targetRotation.current.y += deltaX * 0.012;
    targetRotation.current.x += deltaY * 0.008;

    // Limit vertical pitch so character doesn't flip
    targetRotation.current.x = Math.max(-0.6, Math.min(0.6, targetRotation.current.x));

    previousPointerPosition.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDraggingRef.current = false;
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}
  };

  // Handle wheel to zoom
  const handleWheel = (e: React.WheelEvent) => {
    if (!cameraRef.current) return;
    e.preventDefault();
    const zoomDelta = e.deltaY * 0.003;
    cameraRef.current.position.z = Math.max(2.4, Math.min(5.2, cameraRef.current.position.z + zoomDelta));
  };

  // Reset view button
  const handleResetView = () => {
    targetRotation.current = { x: 0.1, y: 0.2 };
    if (cameraRef.current) {
      cameraRef.current.position.set(0, 0.3, initialCameraZ);
    }
  };

  return (
    <div
      ref={containerRef}
      onWheel={handleWheel}
      className="relative w-full h-80 sm:h-96 rounded-3xl overflow-hidden select-none cursor-grab active:cursor-grabbing border transition-colors bg-gradient-to-br from-[#f2efff] via-[#f7f3ff] to-[#fcefff] dark:from-[#0d0f22] dark:via-[#131530] dark:to-[#1a1236] border-purple-200/80 dark:border-purple-800/60 shadow-inner"
    >
      {hasWebGL ? (
        <canvas
          ref={canvasRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className="w-full h-full block touch-none"
        />
      ) : (
        /* WebGL Fallback Illustration */
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
          <img
            src="/src/assets/images/pip_astronomer_portrait_1792337958181.jpg"
            alt="Pip"
            className="w-32 h-32 rounded-full border-4 border-amber-300 shadow-xl object-cover mb-3"
          />
          <p className="text-xs text-purple-700 dark:text-purple-300 font-medium">
            WebGL is not supported on this browser. Here is Pip's illustrated portrait!
          </p>
        </div>
      )}

      {/* Reset View Button (Image 2 match) */}
      <button
        onClick={handleResetView}
        className="absolute bottom-4 right-4 px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-md transition-all bg-white/90 hover:bg-white text-slate-800 dark:bg-slate-900/90 dark:hover:bg-slate-900 dark:text-slate-100 border border-slate-200 dark:border-purple-700/70 hover:scale-105 active:scale-95"
        title="Reset 3D camera and rotation"
      >
        <span>Reset view</span>
        <RotateCcw className="w-3.5 h-3.5" />
      </button>

      {/* Interactive Hint */}
      <div className="absolute top-3 left-4 text-[11px] text-purple-700/70 dark:text-purple-300/60 font-medium pointer-events-none">
        Drag to rotate · Scroll to zoom
      </div>
    </div>
  );
};
