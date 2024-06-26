import { Component, PanelSection, html, ColorInput, NumberInput } from "@thatopen/ui";
import * as THREE from "three";

export function setupControlsPanel(world) {
    const panel = Component.create<PanelSection>(() => {
        return html`
            <bim-panel label="Worlds Tutorial" class="options-menu">
              <bim-panel-section collapsed label="Controls">
              
                <bim-color-input 
                  label="Background Color" color="#202932" 
                  @input="${({ target }) => {
                    world.scene.three.background = new THREE.Color(target.color);
                  }}">
                </bim-color-input>
                
                <bim-number-input 
                  slider step="0.1" label="Directional lights intensity" value="1.5" min="0.1" max="10"
                  @change="${({ target }) => {
                    for (const child of world.scene.three.children) {
                      if (child instanceof THREE.DirectionalLight) {
                        child.intensity = target.value;
                      }
                    }
                  }}">
                </bim-number-input>
                
                <bim-number-input 
                  slider step="0.1" label="Ambient light intensity" value="1" min="0.1" max="5"
                  @change="${({ target }) => {
                    for (const child of world.scene.three.children) {
                      if (child instanceof THREE.AmbientLight) {
                        child.intensity = target.value;
                      }
                    }
                  }}">
                </bim-number-input>
                
              </bim-panel-section>
            </bim-panel>
        `;
    });

    document.body.append(panel);
}
