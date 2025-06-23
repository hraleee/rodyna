import { useEffect, useState } from "react";

export default function ProgressBars() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 90) return prev + 1;
        clearInterval(interval);
        return 90;
      });
    }, 20); // Velocità animazione
    return () => clearInterval(interval);
  }, []);

  const bars = [1, 2, 3]; // 3 barre

  return (
    <div className="space-y-6 max-w-md mx-auto mt-10">
      {bars.map((_, i) => (
        <div key={i}>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">Barra {i + 1}</span>
            <span className="text-sm font-medium text-gray-700">{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div
              className="bg-blue-600 h-full transition-all duration-300 ease-in-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
