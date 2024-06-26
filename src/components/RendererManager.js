import { SimpleRenderer } from "@thatopen/components";

export function createRenderer(components, container) {
    return new SimpleRenderer(components, container);
}
