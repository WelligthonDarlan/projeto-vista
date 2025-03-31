import { useState, useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import logo from "./assets/logo.png";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setTimeout(() => setLoading(false), 3000); // Simula um carregamento de 1s
    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (loading) {
    return (
      <div className="fixed bg-blue-400 inset-0 flex items-center justify-center bg-black text-white text-2xl z-100 overflow-0 fade-out">
        <img className="w-60 rotate-animation" src={logo} alt="Logo" />
      </div>
    );
  }

  return null; // Quando terminar, não renderiza nada
};

export default function App() {
  return (
    <>
      <LoadingScreen />
      <AppRoutes />
    </>
  );
}
