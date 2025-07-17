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
    <div className="flex flex-col items-center">
      <div style={{
        border: data !== "No result" ? "3px solid green" : "3px solid #ccc",
        display: "inline-block",
        borderRadius: 8
      }}>
        <BarcodeScannerComponent
          width={400}
          height={400}
          onUpdate={(err, result) => {
            if (result) {
              setData(result.getText());
              onScanned(result.getText());
            }
          }}
        />
      </div>
      <p className="mt-2 text-gray-600 text-center text-sm">
        Tieni il barcode a circa 20cm dalla fotocamera e muovi lentamente per mettere a fuoco.<br />
        Risultato: <b>{data}</b>
      </p>
    </div>
  );
}
