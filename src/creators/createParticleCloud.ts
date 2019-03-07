import * as THREE from "three";
import Img from "../imgs/fire_particle.png";

/**
 * 粒子云
 */
export function createParticleCloud(): THREE.Points {
  const geometry = new THREE.Geometry();
  const numParticles = 50000;
  const SIZE = 10000;
  for (let i = 0; i < numParticles; i++) {
    geometry.vertices.push(
      new THREE.Vector3(
        SIZE * (Math.random() - 0.5),
        SIZE * (Math.random() - 0.5),
        SIZE * (Math.random() - 0.5)
      )
    );
  }

  const texture = new THREE.TextureLoader().load(Img);
  const material = new THREE.PointsMaterial({
    size: 20,
    color: 0xffffff,
    blending: THREE.AdditiveBlending,
    transparent: true,
    opacity: 0.4,
    // depthTest: false,
    map: texture
  });

  return new THREE.Points(geometry, material);
}
