import { OverlayToaster } from "@blueprintjs/core";

/**
 * 弹出Toast消息
 * @param message 
 * @param options 
 * @returns
 */
export function ToastMessage(message: React.ReactNode, options?: {}) {
  const toaster = OverlayToaster.create({ position: "top" });
  toaster.show({ message: message, ...options })
  return toaster
}
