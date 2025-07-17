"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

// Import dinamico per evitare problemi SSR
const BarcodeScannerComponent = dynamic(
  () => import("react-qr-barcode-scanner"),
  { ssr: false }
);

export default function BarcodeScanner({ onScanned }: { onScanned: (value: string) => void }) {
  const [data, setData] = useState("No result");

  return (
    <div>
      <BarcodeScannerComponent
        width={300}
        height={300}
        onUpdate={(err, result) => {
          if (result) {
            setData(result.getText());
            onScanned(result.getText());
          }
        }}
      />
      <p>Risultato: {data}</p>
    </div>
  );
}
