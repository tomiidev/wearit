import { useEffect, useState } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)"); // Tailwind usa 768px como límite para "md"
    const handleChange = () => setIsMobile(mediaQuery.matches);

    // Establece el estado inicial
    handleChange();

    // Escucha los cambios en el tamaño de la ventana
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return isMobile;
};

export default useIsMobile;
