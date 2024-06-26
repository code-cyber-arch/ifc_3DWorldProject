import * as THREE from "three";
import { Components } from "@thatopen/components";
import { initStats } from './utils/StatsManager';
import { setupWorld } from './components/WorldManager';
import { setupUI } from './ui/UIManager';

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container");
    const components = new Components();

    const world = setupWorld(components, container);

    components.init();
    world.scene.three.background = null;

    const stats = initStats(world);

    setupUI(world);
});
