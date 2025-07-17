import { useRef, useState } from "react";
import { BrowserMultiFormatReader } from "@zxing/browser";
import { Button } from "@/components/ui/button";

export default function AdvancedBarcodeScanner({ onScanned }: { onScanned: (code: string) => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const codeReaderRef = useRef<BrowserMultiFormatReader | null>(null);
  const [lastResult, setLastResult] = useState("");
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [focusSupported, setFocusSupported] = useState(false);

  const startScanner = async () => {
    codeReaderRef.current = new BrowserMultiFormatReader();

    // Migliori constraint per qualità
    const constraints = {
      video: {
        facingMode: { ideal: "environment" },
        width: { ideal: 1920 },
        height: { ideal: 1080 },
        frameRate: { ideal: 30, max: 60 },
        focusMode: "continuous", // Non tutti i browser lo supportano
      }
    };

    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        videoRef.current.play();
      }
      // Verifica supporto focus
      const track = mediaStream.getVideoTracks()[0];
      const capabilities = track.getCapabilities?.();
      setFocusSupported(!!capabilities && "focusDistance" in capabilities);

      codeReaderRef.current.decodeFromStream(
        mediaStream,
        videoRef.current!,
        (result, err) => {
          if (result && result.getText() !== lastResult) {
            setLastResult(result.getText());
            onScanned(result.getText());
          }
        }
      );
    } catch (error) {
      console.error("Errore accesso videocamera", error);
    }
  };

  // Focus manuale: porta focusDistance a metà range
  const handleManualFocus = async () => {
    if (!stream) return;
    const track = stream.getVideoTracks()[0];
    const capabilities = track.getCapabilities?.();
    // Accesso via indicizzazione per evitare errori TS sulle proprietà non standard
    const fd = capabilities && (capabilities as any)["focusDistance"];
    if (
      fd &&
      typeof fd === "object" &&
      fd !== null &&
      typeof fd.min === "number" &&
      typeof fd.max === "number"
    ) {
      const min = fd.min;
      const max = fd.max;
      const mid = (min + max) / 2;
      try {
        const supported = navigator.mediaDevices.getSupportedConstraints();
        // focusMode potrebbe non essere standard, quindi uso indicizzazione e tipizzo any
        const constraints: any =
          (supported as any)["focusMode"]
            ? { advanced: [{ focusMode: "manual", focusDistance: mid }] }
            : { advanced: [{ focusDistance: mid }] };
        await track.applyConstraints(constraints);
      } catch (e) {
        console.error("Impossibile applicare il focus manuale", e);
      }
    }
  };

  return (
    <div>
      <video
        ref={videoRef}
        style={{ width: 400, height: 300, borderRadius: 8, border: "3px solid #4caf50", objectFit: "cover" }}
        muted
        autoPlay
        playsInline
      />
      <div className="flex gap-2 mt-3">
        <Button onClick={startScanner} variant="default" className="bg-indigo-600 text-white">
          Avvia scanner HD
        </Button>
        {focusSupported && (
          <Button onClick={handleManualFocus} variant="outline" className="border-indigo-600 text-indigo-600">
            Focus manuale
          </Button>
        )}
      </div>
      {lastResult && <p className="mt-2 text-gray-700">Codice: {lastResult}</p>}
    </div>
  );
}
