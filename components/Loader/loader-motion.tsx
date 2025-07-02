"use client";

function LoaderPulseCircle({ text = "Caricamento..." }: { text?: string }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80">
      <span className="relative flex items-center justify-center h-16 w-16">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primaryBlue opacity-60"></span>
        <span className="absolute h-12 w-12 rounded-full bg-primaryBlue/80 opacity-80 animate-pulse flex items-center justify-center"></span>
        <span className="relative inline-flex rounded-full h-8 w-8 bg-primaryBlue z-10" />
      </span>
      <span className="mt-6 text-primaryBlue text-lg font-semibold animate-pulse">{text}</span>
    </div>
  );
}

export default LoaderPulseCircle;