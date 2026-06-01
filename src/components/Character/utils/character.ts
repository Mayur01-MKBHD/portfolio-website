import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";

function applyProfessionalStyle(material: THREE.Material) {
  const mat = material as THREE.MeshStandardMaterial;
  if (!mat.isMeshStandardMaterial) return;

  if (mat.name === "default") {
    mat.color.setHex(0x1b2a3b);
    mat.roughness = 0.55;
    mat.metalness = 0.18;
    mat.envMapIntensity = 1.4;
  } else if (mat.name === "Material.025") {
    mat.color.setHex(0xf0c090);
    mat.roughness = 0.75;
    mat.metalness = 0.0;
  } else if (mat.name === "Material.024") {
    mat.color.setHex(0xe8edf2);
    mat.roughness = 0.6;
    mat.metalness = 0.05;
  } else if (mat.name === "Material.028") {
    mat.color.setHex(0x4a0e1a);
    mat.roughness = 0.5;
    mat.metalness = 0.1;
  }
  mat.needsUpdate = true;
}

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      try {
        const encryptedBlob = await decryptFile(
          "/models/character.enc",
          "Character3D#@"
        );
        const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));

        let character: THREE.Object3D;
        loader.load(
          blobUrl,
          async (gltf) => {
            character = gltf.scene;
            await renderer.compileAsync(character, camera, scene);
            character.traverse((child: any) => {
              if (child.isMesh) {
                const mesh = child as THREE.Mesh;
                child.castShadow = true;
                child.receiveShadow = true;
                mesh.frustumCulled = true;
                if (Array.isArray(mesh.material)) {
                  mesh.material.forEach(applyProfessionalStyle);
                } else if (mesh.material) {
                  applyProfessionalStyle(mesh.material);
                }
              }
            });
            resolve(gltf);
            setCharTimeline(character, camera);
            setAllTimeline();
            character!.getObjectByName("footR")!.position.y = 3.36;
            character!.getObjectByName("footL")!.position.y = 3.36;
            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            console.error("Error loading GLTF model:", error);
            reject(error);
          }
        );
      } catch (err) {
        reject(err);
        console.error(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
