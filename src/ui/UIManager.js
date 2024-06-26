import { Manager } from "@thatopen/ui";
import { setupControlsPanel } from './ControlsPanel';
import { setupMobileMenu } from './MobileMenu';

export function setupUI(world) {
    Manager.init();
    setupControlsPanel(world);
    setupMobileMenu(world);
}
