import { Component, PanelSection, html } from "@thatopen/ui";

export function setupMobileMenu() {
    const panel = document.querySelector('.options-menu');
    
    const button = Component.create<PanelSection>(() => {
        return html`
            <bim-button class="phone-menu-toggler" icon="solar:settings-bold"
              @click="${() => {
                if (panel.classList.contains("options-menu-visible")) {
                  panel.classList.remove("options-menu-visible");
                } else {
                  panel.classList.add("options-menu-visible");
                }
              }}">
            </bim-button>
          `;
    });

    document.body.append(button);
}
