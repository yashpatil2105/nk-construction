import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sparkles, Play, Pause, Maximize2, X, Circle } from 'lucide-react';

interface CivilThreeBackgroundProps {
  className?: string;
}

export const CivilThreeBackground: React.FC<CivilThreeBackgroundProps> = ({
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [colorMode, setColorMode] = useState<'antigravity' | 'terracotta' | 'cobalt'>('antigravity');
  const [opacityLevel, setOpacityLevel] = useState<number>(0.38); // More transparent, soft & subtle
  const [speedLevel, setSpeedLevel] = useState<'slow' | 'normal' | 'gentle'>('slow'); // Default: slow pace
  const [isExpanded, setIsExpanded] = useState(false);

  const isPausedRef = useRef(false);
  isPausedRef.current = isPaused;
  const colorModeRef = useRef(colorMode);
  colorModeRef.current = colorMode;
  const opacityRef = useRef(opacityLevel);
  opacityRef.current = opacityLevel;
  const speedRef = useRef(speedLevel);
  speedRef.current = speedLevel;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance'
      });
    } catch {
      return;
    }

    const scene = new THREE.Scene();
    
    // Perspective Camera
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.set(0, 0, 50);
    camera.lookAt(0, 0, 0);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0xffffff, 0); // Transparent background
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.pointerEvents = 'none'; // Keep buttons beneath clickable
    container.appendChild(renderer.domElement);

    // =========================================================================
    // GOOGLE ANTIGRAVITY SPHERICAL PARTICLES (REDUCED COUNT & CALM SLOW MOTION)
    // =========================================================================
    const PARTICLE_COUNT = 380;

    // Palette definition from the Antigravity reference image
    const coralColors = [
      new THREE.Color('#E85A4F'), // Terracotta coral
      new THREE.Color('#EA4335'), // Google Red
      new THREE.Color('#FB7185'), // Soft Rose Coral
      new THREE.Color('#F43F5E'), // Vivid Coral
      new THREE.Color('#E11D48')  // Deep Crimson
    ];

    const blueColors = [
      new THREE.Color('#1A73E8'), // Google Blue
      new THREE.Color('#2563EB'), // Royal Blue
      new THREE.Color('#38BDF8'), // Sky Cyan
      new THREE.Color('#0284C7'), // Deep Cobalt
      new THREE.Color('#3B82F6')  // Electric Blue
    ];

    const darkColors = [
      new THREE.Color('#1E293B'), // Slate Charcoal
      new THREE.Color('#334155'), // Steel Gray
      new THREE.Color('#0F172A')  // Deep Midnight Black
    ];

    // Create particle attributes
    interface ParticleData {
      r: number;            // Current radius from center
      maxR: number;         // Outer boundary for this particle
      minR: number;         // Inner spawn radius
      angle: number;        // Base polar angle
      angularSpeed: number; // Swirl / orbital drift rate
      radialSpeed: number;  // Outward flow speed
      z: number;            // 3D depth layer
      ballRadius: number;   // Specific small ball scale
      colorIndex: number;   // Color type assignment
      baseColor: THREE.Color;
    }

    const particles: ParticleData[] = [];

    // Sphere / Ball Geometry: reduced small ball geometry
    const ballGeometry = new THREE.SphereGeometry(0.18, 12, 12);
    
    // Instanced Mesh: Translucent small balls (high transparency, soft & airy)
    const ballMaterial = new THREE.MeshBasicMaterial({
      transparent: true,
      opacity: opacityRef.current, // High transparency (0.38)
      depthWrite: false
    });
    const instancedMesh = new THREE.InstancedMesh(
      ballGeometry,
      ballMaterial,
      PARTICLE_COUNT
    );
    instancedMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    scene.add(instancedMesh);

    // Assign initial distribution
    const dummy = new THREE.Object3D();

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Angle distribution around ellipse
      const angle = Math.random() * Math.PI * 2;
      
      // Radius distribution: creates the halo ring around center text
      const minR = 6 + Math.random() * 7;
      const maxR = 26 + Math.random() * 22;
      const r = minR + Math.pow(Math.random(), 0.72) * (maxR - minR);
      
      // 3D depth dispersion
      const z = (Math.random() - 0.5) * 18;

      // Color selection matching the Google Antigravity screenshot:
      // Top hemisphere (angle between ~ 0.25*PI and 0.85*PI) is dominated by Coral / Red
      // Lateral and bottom (sides & lower) are dominated by Blue / Cyan
      // With scattered charcoal/slate speckles throughout
      const isTopArc = angle > 0.25 * Math.PI && angle < 0.85 * Math.PI;
      const isNearTop = angle > 0.15 * Math.PI && angle < 0.95 * Math.PI;
      
      let baseColor: THREE.Color;
      let colorType = 0; // 0 = coral, 1 = blue, 2 = dark

      const randType = Math.random();
      if (randType < 0.12) {
        // 12% charcoal speckles
        baseColor = darkColors[Math.floor(Math.random() * darkColors.length)].clone();
        colorType = 2;
      } else if (isTopArc || (isNearTop && Math.random() > 0.3)) {
        // Upper burst: Red / Coral
        baseColor = coralColors[Math.floor(Math.random() * coralColors.length)].clone();
        colorType = 0;
      } else {
        // Lower & flanks: Blue / Cobalt
        baseColor = blueColors[Math.floor(Math.random() * blueColors.length)].clone();
        colorType = 1;
      }

      // Ball size: varied random small ball sizes (randomized from tiny specks to small beads)
      const ballRadius = 0.35 + Math.random() * 1.1;

      particles.push({
        r,
        maxR,
        minR,
        angle,
        angularSpeed: (Math.random() - 0.5) * 0.0006,
        radialSpeed: 0.005 + Math.random() * 0.007, // Ultra calm, gentle drift
        z,
        ballRadius,
        colorIndex: colorType,
        baseColor
      });

      instancedMesh.setColorAt(i, baseColor);
    }

    if (instancedMesh.instanceColor) {
      instancedMesh.instanceColor.needsUpdate = true;
    }

    // Secondary subtle background field: Fine survey point dots
    const fineDotsCount = 50;
    const fineDotsGeo = new THREE.BufferGeometry();
    const fineDotsPos = new Float32Array(fineDotsCount * 3);
    const fineDotsColors = new Float32Array(fineDotsCount * 3);

    for (let i = 0; i < fineDotsCount; i++) {
      fineDotsPos[i * 3] = (Math.random() - 0.5) * 90;
      fineDotsPos[i * 3 + 1] = (Math.random() - 0.5) * 60;
      fineDotsPos[i * 3 + 2] = (Math.random() - 0.5) * 25;

      const c = Math.random() > 0.5 ? new THREE.Color('#94A3B8') : new THREE.Color('#CBD5E1');
      fineDotsColors[i * 3] = c.r;
      fineDotsColors[i * 3 + 1] = c.g;
      fineDotsColors[i * 3 + 2] = c.b;
    }

    fineDotsGeo.setAttribute('position', new THREE.BufferAttribute(fineDotsPos, 3));
    fineDotsGeo.setAttribute('color', new THREE.BufferAttribute(fineDotsColors, 3));
    
    const fineDotsMat = new THREE.PointsMaterial({
      size: 0.25,
      vertexColors: true,
      transparent: true,
      opacity: 0.35
    });
    const fineDotsMesh = new THREE.Points(fineDotsGeo, fineDotsMat);
    scene.add(fineDotsMesh);

    // =========================================================================
    // RESIZE & SMOOTH MOUSE PARALLAX
    // =========================================================================
    let mouseX = 0;
    let mouseY = 0;
    let targetCamX = 0;
    let targetCamY = 0;

    const updateSize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || 550;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    };

    updateSize();
    const resizeObserver = new ResizeObserver(() => updateSize());
    resizeObserver.observe(container);

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = nx;
      mouseY = ny;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // =========================================================================
    // ANIMATION LOOP
    // =========================================================================
    let animId: number;
    let prevColorMode = colorMode;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      const mode = colorModeRef.current;
      const isRunning = !isPausedRef.current;

      // Update dynamic opacity
      ballMaterial.opacity = opacityRef.current;

      // Check if user changed color mode
      if (mode !== prevColorMode) {
        prevColorMode = mode;
        for (let i = 0; i < PARTICLE_COUNT; i++) {
          const p = particles[i];
          if (mode === 'terracotta') {
            instancedMesh.setColorAt(i, p.colorIndex === 2 ? darkColors[0] : coralColors[i % coralColors.length]);
          } else if (mode === 'cobalt') {
            instancedMesh.setColorAt(i, p.colorIndex === 2 ? darkColors[0] : blueColors[i % blueColors.length]);
          } else {
            instancedMesh.setColorAt(i, p.baseColor);
          }
        }
        if (instancedMesh.instanceColor) {
          instancedMesh.instanceColor.needsUpdate = true;
        }
      }

      // Update small balls
      const speedMult = speedRef.current === 'slow' ? 0.4 : speedRef.current === 'gentle' ? 0.85 : 1.5;

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const p = particles[i];

        if (isRunning) {
          // Stream outward along radial lines at reduced, graceful pace
          p.r += p.radialSpeed * speedMult;
          p.angle += p.angularSpeed * speedMult;

          // When reaching max boundary, respawn near inner clear halo
          if (p.r > p.maxR) {
            p.r = p.minR + Math.random() * 2;
            p.angle = Math.random() * Math.PI * 2;
          }
        }

        // Elliptical scaling matching Antigravity layout
        const ellipseFactorX = 1.35;
        const ellipseFactorY = 0.95;

        const x = p.r * Math.cos(p.angle) * ellipseFactorX;
        const y = p.r * Math.sin(p.angle) * ellipseFactorY;
        const z = p.z;

        dummy.position.set(x, y, z);

        // Scale ball size with slight distance breathing
        const scale = p.ballRadius;
        dummy.scale.set(scale, scale, scale);

        dummy.updateMatrix();
        instancedMesh.setMatrixAt(i, dummy.matrix);
      }

      instancedMesh.instanceMatrix.needsUpdate = true;

      // Mouse Parallax smooth lerp
      targetCamX = mouseX * 8;
      targetCamY = mouseY * 5;
      camera.position.x += (targetCamX - camera.position.x) * 0.05;
      camera.position.y += (targetCamY - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      // Fine dots slow rotation
      fineDotsMesh.rotation.y += 0.0003;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      window.removeEventListener('mousemove', onMouseMove);

      ballGeometry.dispose();
      (instancedMesh.material as THREE.Material).dispose();
      fineDotsGeo.dispose();
      fineDotsMat.dispose();

      renderer.dispose();
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <>
      <div 
        ref={containerRef} 
        className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}
        style={{ zIndex: 0 }}
      >
        {/* Subtle Control Pill in bottom corner */}
        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-6 z-20 flex items-center gap-2 pointer-events-auto select-none">
          <div className="bg-white/95 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-sand/70 shadow-xs flex items-center gap-1.5 sm:gap-2.5 text-xs text-warm-dark font-medium flex-wrap max-w-[calc(100vw-1.5rem)] sm:max-w-none">
            <span className="flex items-center gap-1.5 text-terracotta shrink-0">
              <Circle className="w-3.5 h-3.5 text-terracotta fill-terracotta" />
              <span className="hidden sm:inline">Ball Particle Field</span>
            </span>

            <span className="text-sand hidden sm:inline">|</span>

            {/* Color Scheme Picker — hidden on xs, visible sm+ */}
            <div className="hidden sm:flex items-center gap-1 text-[11px]">
              <button
                type="button"
                onClick={() => setColorMode('antigravity')}
                className={`px-2 py-0.5 rounded-md cursor-pointer transition-colors ${
                  colorMode === 'antigravity' ? 'bg-terracotta text-white font-bold' : 'text-stone-muted hover:text-warm-dark'
                }`}
                title="Google Antigravity Burst (Coral & Blue)"
              >
                Antigravity
              </button>
              <button
                type="button"
                onClick={() => setColorMode('terracotta')}
                className={`px-2 py-0.5 rounded-md cursor-pointer transition-colors ${
                  colorMode === 'terracotta' ? 'bg-terracotta text-white font-bold' : 'text-stone-muted hover:text-warm-dark'
                }`}
                title="Warm Terracotta Theme"
              >
                Terracotta
              </button>
              <button
                type="button"
                onClick={() => setColorMode('cobalt')}
                className={`px-2 py-0.5 rounded-md cursor-pointer transition-colors ${
                  colorMode === 'cobalt' ? 'bg-terracotta text-white font-bold' : 'text-stone-muted hover:text-warm-dark'
                }`}
                title="Engineering Cobalt Theme"
              >
                Cobalt
              </button>
            </div>

            <span className="text-sand hidden sm:inline">|</span>

            {/* Opacity Controls — hidden on xs */}
            <div className="hidden sm:flex items-center gap-1 text-[11px]">
              <button
                type="button"
                onClick={() => setOpacityLevel(0.20)}
                className={`px-1.5 py-0.5 rounded cursor-pointer transition-colors ${
                  opacityLevel === 0.20 ? 'bg-warm-dark text-white font-semibold' : 'text-stone-muted hover:text-warm-dark'
                }`}
                title="Ultra Transparent / Soft (20% Opacity)"
              >
                Soft
              </button>
              <button
                type="button"
                onClick={() => setOpacityLevel(0.38)}
                className={`px-1.5 py-0.5 rounded cursor-pointer transition-colors ${
                  opacityLevel === 0.38 ? 'bg-warm-dark text-white font-semibold' : 'text-stone-muted hover:text-warm-dark'
                }`}
                title="Balanced Translucent (38% Opacity)"
              >
                Trans.
              </button>
              <button
                type="button"
                onClick={() => setOpacityLevel(0.60)}
                className={`px-1.5 py-0.5 rounded cursor-pointer transition-colors ${
                  opacityLevel === 0.60 ? 'bg-warm-dark text-white font-semibold' : 'text-stone-muted hover:text-warm-dark'
                }`}
                title="Medium Opacity (60%)"
              >
                Med.
              </button>
            </div>

            <span className="text-sand hidden sm:inline">|</span>

            {/* Speed Controls — hidden on xs */}
            <div className="hidden sm:flex items-center gap-1 text-[11px]">
              <button
                type="button"
                onClick={() => setSpeedLevel('slow')}
                className={`px-1.5 py-0.5 rounded cursor-pointer transition-colors ${
                  speedLevel === 'slow' ? 'bg-warm-dark text-white font-semibold' : 'text-stone-muted hover:text-warm-dark'
                }`}
                title="Ultra Slow & Calm Motion (0.45x)"
              >
                Slow
              </button>
              <button
                type="button"
                onClick={() => setSpeedLevel('gentle')}
                className={`px-1.5 py-0.5 rounded cursor-pointer transition-colors ${
                  speedLevel === 'gentle' ? 'bg-warm-dark text-white font-semibold' : 'text-stone-muted hover:text-warm-dark'
                }`}
                title="Gentle Serene Pace (1.0x)"
              >
                Gentle
              </button>
              <button
                type="button"
                onClick={() => setSpeedLevel('normal')}
                className={`px-1.5 py-0.5 rounded cursor-pointer transition-colors ${
                  speedLevel === 'normal' ? 'bg-warm-dark text-white font-semibold' : 'text-stone-muted hover:text-warm-dark'
                }`}
                title="Brisk Motion (1.8x)"
              >
                Brisk
              </button>
            </div>

            <span className="text-sand">|</span>

            {/* Play/Pause — always visible */}
            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              className="text-stone-muted hover:text-terracotta transition-colors cursor-pointer p-0.5"
              title={isPaused ? 'Resume particle flow' : 'Pause particle flow'}
            >
              {isPaused ? <Play className="w-3.5 h-3.5 text-terracotta" /> : <Pause className="w-3.5 h-3.5" />}
            </button>

            {/* Expand Fullscreen — always visible */}
            <button
              type="button"
              onClick={() => setIsExpanded(true)}
              className="text-stone-muted hover:text-terracotta transition-colors cursor-pointer p-0.5"
              title="Expand 3D Particle Field Fullscreen"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Antigravity 3D Particle Explorer Modal */}
      {isExpanded && (
        <ExpandedAntigravityModal 
          onClose={() => setIsExpanded(false)} 
          initialColorMode={colorMode} 
          initialOpacity={opacityLevel}
          initialSpeed={speedLevel}
        />
      )}
    </>
  );
};

// =========================================================================
// EXPANDED 3D ANTIGRAVITY BALL PARTICLES VIEWER MODAL
// =========================================================================
interface ExpandedAntigravityModalProps {
  onClose: () => void;
  initialColorMode: 'antigravity' | 'terracotta' | 'cobalt';
  initialOpacity?: number;
  initialSpeed?: 'slow' | 'normal' | 'gentle';
}

const ExpandedAntigravityModal: React.FC<ExpandedAntigravityModalProps> = ({ 
  onClose, 
  initialColorMode,
  initialOpacity = 0.38,
  initialSpeed = 'slow'
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [colorMode, setColorMode] = useState<'antigravity' | 'terracotta' | 'cobalt'>(initialColorMode);
  const [modalOpacity, setModalOpacity] = useState<number>(initialOpacity);
  const [modalSpeed, setModalSpeed] = useState<'slow' | 'normal' | 'gentle'>(initialSpeed);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    } catch {
      return;
    }

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#FFFFFF'); // Pure crisp white

    const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 0, 55);

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const COUNT = 450; // Reduced count for clean, airy floating spheres
    const coralColors = [
      new THREE.Color('#E85A4F'),
      new THREE.Color('#EA4335'),
      new THREE.Color('#FB7185'),
      new THREE.Color('#F43F5E'),
      new THREE.Color('#E11D48')
    ];
    const blueColors = [
      new THREE.Color('#1A73E8'),
      new THREE.Color('#2563EB'),
      new THREE.Color('#38BDF8'),
      new THREE.Color('#0284C7'),
      new THREE.Color('#3B82F6')
    ];
    const darkColors = [
      new THREE.Color('#1E293B'),
      new THREE.Color('#334155'),
      new THREE.Color('#0F172A')
    ];

    interface PItem {
      r: number;
      maxR: number;
      minR: number;
      angle: number;
      angularSpeed: number;
      radialSpeed: number;
      z: number;
      radius: number;
      baseColor: THREE.Color;
      type: number;
    }

    const items: PItem[] = [];
    const ballGeo = new THREE.SphereGeometry(0.18, 12, 12);
    const instanced = new THREE.InstancedMesh(
      ballGeo,
      new THREE.MeshBasicMaterial({ transparent: true, opacity: modalOpacity, depthWrite: false }),
      COUNT
    );
    scene.add(instanced);

    for (let i = 0; i < COUNT; i++) {
      const angle = Math.random() * Math.PI * 2;
      const minR = 7 + Math.random() * 7;
      const maxR = 30 + Math.random() * 26;
      const r = minR + Math.pow(Math.random(), 0.7) * (maxR - minR);
      const z = (Math.random() - 0.5) * 30;

      const isTop = angle > 0.25 * Math.PI && angle < 0.85 * Math.PI;
      const isNearTop = angle > 0.15 * Math.PI && angle < 0.95 * Math.PI;

      let baseColor: THREE.Color;
      let type = 0;
      const rnd = Math.random();
      if (rnd < 0.1) {
        baseColor = darkColors[Math.floor(Math.random() * darkColors.length)].clone();
        type = 2;
      } else if (isTop || (isNearTop && Math.random() > 0.35)) {
        baseColor = coralColors[Math.floor(Math.random() * coralColors.length)].clone();
        type = 0;
      } else {
        baseColor = blueColors[Math.floor(Math.random() * blueColors.length)].clone();
        type = 1;
      }

      items.push({
        r,
        maxR,
        minR,
        angle,
        angularSpeed: (Math.random() - 0.5) * 0.0006,
        radialSpeed: 0.005 + Math.random() * 0.007, // Extra slow, calm motion
        z,
        radius: 0.35 + Math.random() * 1.1, // Varied randomized small ball sizes
        baseColor,
        type
      });

      instanced.setColorAt(i, baseColor);
    }
    if (instanced.instanceColor) instanced.instanceColor.needsUpdate = true;

    // Interactive 360 Drag
    let isDown = false;
    let lastX = 0;
    let lastY = 0;
    let rotX = 0;
    let rotY = 0;

    const onDown = (e: MouseEvent) => {
      isDown = true;
      lastX = e.clientX;
      lastY = e.clientY;
    };
    const onMove = (e: MouseEvent) => {
      if (!isDown) return;
      rotY += (e.clientX - lastX) * 0.008;
      rotX += (e.clientY - lastY) * 0.008;
      rotX = Math.max(-1, Math.min(1, rotX));
      lastX = e.clientX;
      lastY = e.clientY;
    };
    const onUp = () => { isDown = false; };

    container.addEventListener('mousedown', onDown);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);

    // Render loop
    const dummy = new THREE.Object3D();
    let req: number;

    const loop = () => {
      req = requestAnimationFrame(loop);

      const speedMult = modalSpeed === 'slow' ? 0.4 : modalSpeed === 'gentle' ? 0.85 : 1.5;

      for (let i = 0; i < COUNT; i++) {
        const it = items[i];
        if (!isPaused) {
          it.r += it.radialSpeed * speedMult;
          it.angle += it.angularSpeed * speedMult;
          if (it.r > it.maxR) {
            it.r = it.minR + Math.random() * 2;
            it.angle = Math.random() * Math.PI * 2;
          }
        }

        const x = it.r * Math.cos(it.angle) * 1.35;
        const y = it.r * Math.sin(it.angle) * 0.95;
        dummy.position.set(x, y, it.z);
        const s = it.radius;
        dummy.scale.set(s, s, s);
        dummy.updateMatrix();
        instanced.setMatrixAt(i, dummy.matrix);
      }
      instanced.instanceMatrix.needsUpdate = true;

      // Camera orbit
      const dist = 55;
      camera.position.x = dist * Math.sin(rotY) * Math.cos(rotX);
      camera.position.y = dist * Math.sin(rotX);
      camera.position.z = dist * Math.cos(rotY) * Math.cos(rotX);
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };
    loop();

    return () => {
      cancelAnimationFrame(req);
      container.removeEventListener('mousedown', onDown);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, [colorMode, isPaused, modalOpacity, modalSpeed]);

  return (
    <div className="fixed inset-0 z-50 bg-warm-dark/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl border-2 border-sand shadow-2xl w-full max-w-5xl h-[85vh] flex flex-col overflow-hidden relative">
        {/* Header */}
        <div className="p-4 sm:px-6 border-b border-sand flex items-center justify-between bg-sand/15">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-terracotta/10 border border-terracotta/30 flex items-center justify-center text-terracotta">
              <Circle className="w-5 h-5 fill-terracotta" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-warm-dark text-sm sm:text-base">
                Google Antigravity 3D Ball Particle Field
              </h3>
              <p className="text-xs text-stone-muted">
                Translucent spheres with vivid coral, cobalt, and midnight colors • Drag to orbit 360°
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Speed selector */}
            <div className="hidden sm:flex items-center gap-1 bg-white p-1 rounded-xl border border-sand text-xs">
              <button
                onClick={() => setModalSpeed('slow')}
                className={`px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer ${
                  modalSpeed === 'slow' ? 'bg-warm-dark text-white' : 'text-stone-muted hover:text-warm-dark'
                }`}
                title="Slow (0.45x)"
              >
                Slow
              </button>
              <button
                onClick={() => setModalSpeed('gentle')}
                className={`px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer ${
                  modalSpeed === 'gentle' ? 'bg-warm-dark text-white' : 'text-stone-muted hover:text-warm-dark'
                }`}
                title="Gentle (1.0x)"
              >
                Gentle
              </button>
              <button
                onClick={() => setModalSpeed('normal')}
                className={`px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer ${
                  modalSpeed === 'normal' ? 'bg-warm-dark text-white' : 'text-stone-muted hover:text-warm-dark'
                }`}
                title="Brisk (1.8x)"
              >
                Brisk
              </button>
            </div>

            {/* Opacity selector */}
            <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-sand text-xs">
              <button
                onClick={() => setModalOpacity(0.20)}
                className={`px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer ${
                  modalOpacity === 0.20 ? 'bg-warm-dark text-white' : 'text-stone-muted hover:text-warm-dark'
                }`}
                title="Soft (20%)"
              >
                Soft
              </button>
              <button
                onClick={() => setModalOpacity(0.38)}
                className={`px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer ${
                  modalOpacity === 0.38 ? 'bg-warm-dark text-white' : 'text-stone-muted hover:text-warm-dark'
                }`}
                title="Translucent (38%)"
              >
                Translucent
              </button>
              <button
                onClick={() => setModalOpacity(0.60)}
                className={`px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer ${
                  modalOpacity === 0.60 ? 'bg-warm-dark text-white' : 'text-stone-muted hover:text-warm-dark'
                }`}
                title="Medium (60%)"
              >
                Medium
              </button>
            </div>

            <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-sand text-xs">
              <button
                onClick={() => setColorMode('antigravity')}
                className={`px-3 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                  colorMode === 'antigravity' ? 'bg-terracotta text-white' : 'text-stone-muted hover:text-warm-dark'
                }`}
              >
                Antigravity
              </button>
              <button
                onClick={() => setColorMode('terracotta')}
                className={`px-3 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                  colorMode === 'terracotta' ? 'bg-terracotta text-white' : 'text-stone-muted hover:text-warm-dark'
                }`}
              >
                Terracotta
              </button>
              <button
                onClick={() => setColorMode('cobalt')}
                className={`px-3 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                  colorMode === 'cobalt' ? 'bg-terracotta text-white' : 'text-stone-muted hover:text-warm-dark'
                }`}
              >
                Cobalt
              </button>
            </div>

            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-2 rounded-xl bg-white border border-sand text-stone-muted hover:text-terracotta transition-colors cursor-pointer"
              title={isPaused ? 'Resume Motion' : 'Pause Motion'}
            >
              {isPaused ? <Play className="w-4 h-4 text-terracotta" /> : <Pause className="w-4 h-4" />}
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white hover:bg-sand/30 border border-sand text-warm-dark transition-colors cursor-pointer"
              title="Close Fullscreen View"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3D Canvas Body */}
        <div ref={mountRef} className="flex-1 w-full h-full relative cursor-grab active:cursor-grabbing">
          <div className="absolute top-3 left-4 pointer-events-none bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-sand text-[11px] text-stone-muted">
            ✦ Click & drag to rotate 3D ball particle orbit • Smooth 60fps WebGL
          </div>
        </div>
      </div>
    </div>
  );
};
