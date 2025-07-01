declare module '@emailjs/browser'; 
export {};

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}