export type HostProps = Record<string, any>

export type RenderCallback = (root: any, hostProps: HostProps) => void;

export interface GlobalApi {
  onRender(renderer: RenderCallback): void;
}

export function onRender(renderer: RenderCallback) {
  return (self as any as GlobalApi).onRender(renderer);
}