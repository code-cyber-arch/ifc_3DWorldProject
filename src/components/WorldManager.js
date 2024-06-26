import * as THREE from "three";
import { Worlds, SimpleScene, SimpleCamera, SimpleRenderer } from "@thatopen/components";

export function setupWorld(components, container) {
    const worlds = components.get(Worlds);
    const world = worlds.create();

    world.scene = new SimpleScene(components);
    world.renderer = new SimpleRenderer(components, container);
    world.camera = new SimpleCamera(components);
    
    const material = new THREE.MeshLambertMaterial({ color: "#6528D7" });
    const geometry = new THREE.BoxGeometry();
    const cube = new THREE.Mesh(geometry, material);
    world.scene.three.add(cube);

    world.scene.setup();
    world.camera.controls.setLookAt(3, 3, 3, 0, 0, 0);

    return world;
}
