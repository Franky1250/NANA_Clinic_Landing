/* eslint-disable @typescript-eslint/no-explicit-any */

// src/types/global.d.ts
interface FacebookPixel {
    (command: 'init', pixelId: string): void;
    (command: 'track', event: string, parameters?: Record<string, unknown>): void;
    (command: 'trackCustom', event: string, parameters?: Record<string, unknown>): void;
    push: (...args: any[]) => void;
  }
  
  declare global {
    interface Window {
      fbq?: FacebookPixel;
    }
  }
  
  // This export is needed for ES module systems
  export {};