import { useEffect, useRef, useState } from 'react';

const Subscribe = () => {
  const [isVisible, setIsVisible] = useState(false);

  const observeElement = (entry) => {
    if (entry.isIntersecting) {
      setIsVisible(true);  // Activa la animación cuando el elemento entra en la vista
    }
  };

  const observer = useRef(null);

  useEffect(() => {
    const currentObserver = observer.current;
    const options = {
      rootMargin: '0px',
      threshold: 0.5, // Activa la animación cuando el 50% del elemento es visible
    };

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => observeElement(entry),
      options
    );

    intersectionObserver.observe(currentObserver);

    return () => {
      intersectionObserver.unobserve(currentObserver);
    };
  }, []);

  return (
    <div className="subscribe">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center mx-auto text-center">
          <div className="w-full max-w-7xl">
            <div
              className="flex flex-wrap justify-center gap-8"
              ref={observer}
            >
              <div
                className={`flex flex-col items-center ${isVisible ? 'fade-in' : 'opacity-0'} transition-opacity duration-1000`}
                style={{ animationDelay: '0.1s' }}
              >
                <i className="fas fa-map-marker-alt text-2xl mb-2"></i>
                <span className="font-semibold">Ubicación</span>
                <span>Uruguay</span>
              </div>
              <div
                className={`flex flex-col items-center ${isVisible ? 'fade-in' : 'opacity-0'} transition-opacity duration-1000`}
                style={{ animationDelay: '0.2s' }}
              >
                <i className="fas fa-phone-alt text-2xl mb-2"></i>
                <span className="font-semibold">Teléfono</span>
                <span>010-020-0340</span>
              </div>
              <div
                className={`flex flex-col items-center ${isVisible ? 'fade-in' : 'opacity-0'} transition-opacity duration-1000`}
                style={{ animationDelay: '0.3s' }}
              >
                <i className="fas fa-share-alt text-2xl mb-2"></i>
                <span className="font-semibold">Redes sociales</span>
                <span>
                  <a href="/" className="text-black">Facebook</a>,{" "}
                  <a href="/" className="text-black">Instagram</a>,{" "}
                  <a href="/" className="text-black">Behance</a>,{" "}
                  <a href="/" className="text-black">Linkedin</a>
                </span>
              </div>
              <div
                className={`flex flex-col items-center ${isVisible ? 'fade-in' : 'opacity-0'} transition-opacity duration-1000`}
                style={{ animationDelay: '0.4s' }}
              >
                <i className="fas fa-clock text-2xl mb-2"></i>
                <span className="font-semibold">Horarios</span>
                <span>Lun a Vie, 07:30 - 21:30</span>
              </div>
              <div
                className={`flex flex-col items-center ${isVisible ? 'fade-in' : 'opacity-0'} transition-opacity duration-1000`}
                style={{ animationDelay: '0.5s' }}
              >
                <i className="fas fa-envelope text-2xl mb-2"></i>
                <span className="font-semibold">Email</span>
                <span>info@company.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
