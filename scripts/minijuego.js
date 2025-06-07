function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [gameStarted, setGameStarted] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [lives, setLives] = React.useState(3);
  const [timeLeft, setTimeLeft] = React.useState(30);
  const [items, setItems] = React.useState([]);
  const [speed, setSpeed] = React.useState(5); // Velocidad base (píxeles por movimiento)
  const gameContainerRef = React.useRef(null);
  const timerRef = React.useRef(null);
  const itemIntervalRef = React.useRef(null);

  const menuItems = [
    { label: "INICIO", href: "../index.html" },
    { label: "SERVICIOS", href: "servicios.html" },
    { label: "PRODUCTOS", href: "productos.html" },
    { label: "CONTACTOS", href: "contactos.html" },
    { label: "MINIJUEGO", href: "minijuego.html" },
  ];

  // Nuevas imágenes para el juego
  const gameImages = {
    bombilla:
      "https://img.freepik.com/premium-vector/pixel-art-game-currency-coin_709240-103.jpg", // Moneda de yerba mate dorada
    hoja: "https://w7.pngwing.com/pngs/119/992/png-transparent-negative-number-plus-and-minus-signs-error-s-text-photography-logo-thumbnail.png", // Hoja de yerba estilizada
  };

  const startGame = () => {
    setGameStarted(true);
    setScore(0);
    setLives(3);
    setTimeLeft(30);
    setItems([]);
    setSpeed(5); // Resetear velocidad al iniciar

    // Temporizador
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          endGame();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Generar elementos cada 0.8 segundos (más rápido que antes)
    itemIntervalRef.current = setInterval(() => {
      if (gameContainerRef.current) {
        const containerWidth = gameContainerRef.current.offsetWidth;
        const newItem = {
          id: Date.now() + Math.random(),
          type: Math.random() > 0.3 ? "bombilla" : "hoja",
          left: Math.random() * (containerWidth - 60),
          top: -60,
        };
        setItems((prev) => [...prev, newItem]);
      }
    }, 800);
  };

  const endGame = () => {
    clearInterval(timerRef.current);
    clearInterval(itemIntervalRef.current);
    setGameStarted(false);
  };

  const handleItemClick = (id, type) => {
    if (!gameStarted) return;

    if (type === "bombilla") {
      const newScore = score + 10;
      setScore(newScore);

      // Aumentar velocidad cada 20 puntos (2 monedas)
      if (newScore % 20 === 0) {
        setSpeed((prev) => Math.min(prev + 1, 15)); // Límite de velocidad: 15px
      }
    } else {
      setLives((prev) => prev - 1);
      if (lives <= 1) {
        endGame();
      }
    }

    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  React.useEffect(() => {
    // Mover elementos hacia abajo con velocidad dinámica
    const moveItems = () => {
      setItems((prev) =>
        prev
          .map((item) => ({
            ...item,
            top: item.top + speed * 0.3, // Ajuste fino de velocidad
          }))
          .filter(
            (item) => item.top < (gameContainerRef.current?.offsetHeight || 0)
          )
      );
    };

    const gameLoop = setInterval(moveItems, 50);
    return () => clearInterval(gameLoop);
  }, [speed]);

  return (
    <div className="min-h-screen flex flex-col justify-between text-black relative z-10">
      {/* Header */}
      <header className="py-4 px-6 text-center bg-transparent backdrop-blur-sm fixed top-0 left-0 w-full z-20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex justify-between items-center w-full sm:w-auto">
            <h1 className="text-3xl font-bold text-gray-900">
              <span className="text-yellow-600">MI</span> YERBA
            </h1>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="sm:hidden text-lg font-semibold p-2"
              aria-label="Abrir menú"
            >
              ☰ Menú
            </button>
          </div>

          <nav
            className={`${
              menuOpen ? "flex" : "hidden"
            } sm:flex mt-4 sm:mt-0 text-lg`}
          >
            <div className="flex flex-col sm:flex-row items-center gap-x-6">
              {menuItems.map(({ label, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="font-bold hover:text-yellow-600 py-2 sm:py-0"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="flex-grow pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-yellow-600">
            <i className="fas fa-gamepad mr-3"></i>
            Atrapa la Moneda Mate
          </h2>

          {!gameStarted ? (
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-4">Instrucciones:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="flex flex-col items-center">
                  <img
                    src={gameImages.bombilla}
                    alt="Moneda"
                    className="w-20 h-20 mb-2 object-contain"
                  />
                  <p className="font-bold">+10 puntos</p>
                  <p className="text-sm text-gray-600">¡Haz clic rápido!</p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={gameImages.hoja}
                    alt="Hoja"
                    className="w-20 h-20 mb-2 object-contain"
                  />
                  <p className="font-bold">-1 vida</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <i className="fas fa-tachometer-alt text-4xl text-yellow-600 mb-2"></i>
                  <p className="font-bold">Velocidad aumenta</p>
                  <p className="text-sm text-gray-600">Cada 20 puntos</p>
                </div>
              </div>
              <button
                onClick={startGame}
                className="btn-primary text-gray-900 font-bold py-3 px-8 rounded-full text-lg shadow-lg mx-auto"
              >
                <i className="fas fa-play mr-2"></i>
                COMENZAR
              </button>
            </div>
          ) : (
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg mb-6">
              <div className="flex justify-between items-center mb-4">
                <div className="text-xl font-bold">
                  <i className="fas fa-star text-yellow-500 mr-2"></i>
                  Puntos: <span className="text-yellow-600">{score}</span>
                </div>
                <div className="text-xl font-bold">
                  <i className="fas fa-heart text-red-500 mr-2"></i>
                  Vidas: <span className="text-red-500">{lives}</span>
                </div>
                <div className="text-xl font-bold">
                  <i className="fas fa-clock text-blue-500 mr-2"></i>
                  Tiempo: <span className="text-blue-500">{timeLeft}s</span>
                </div>
              </div>

              <div className="game-container" ref={gameContainerRef}>
                {items.map((item) => (
                  <img
                    key={item.id}
                    src={gameImages[item.type]}
                    alt={item.type}
                    className="game-item"
                    style={{
                      left: `${item.left}px`,
                      top: `${item.top}px`,
                      filter:
                        item.type === "bombilla"
                          ? "drop-shadow(0 0 10px rgba(245, 158, 11, 0.7))"
                          : "none",
                      transform:
                        item.type === "bombilla"
                          ? `rotate(${(item.top * 0.5) % 360}deg)`
                          : "none",
                    }}
                    onClick={() => handleItemClick(item.id, item.type)}
                  />
                ))}
              </div>
              <div className="mt-2 text-right text-sm text-gray-600">
                Velocidad: {speed.toFixed(1)}x
              </div>
            </div>
          )}

          {!gameStarted && score > 0 && (
            <div className="bg-yellow-100/90 border border-yellow-400 text-yellow-800 px-4 py-3 rounded-lg mb-6">
              <h3 className="font-bold text-xl mb-1">¡Juego terminado!</h3>
              <p className="text-lg">
                Puntaje final: <span className="font-bold">{score}</span> puntos
              </p>
              {score >= 100 && (
                <p className="mt-1 text-green-600">
                  <i className="fas fa-trophy mr-1"></i> ¡Excelente trabajo!
                </p>
              )}
            </div>
          )}

          <div className="mt-8 text-gray-700">
            <p className="mb-2">
              <i className="fas fa-trophy text-yellow-500 mr-2"></i> Comparte tu
              puntaje en redes sociales
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="social-icon text-blue-600 hover:text-blue-800 text-2xl"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="#"
                className="social-icon text-pink-600 hover:text-pink-800 text-2xl"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="social-icon text-green-600 hover:text-green-800 text-2xl"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/90 backdrop-blur-sm py-6 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <span className="text-2xl font-bold text-yellow-600 mr-2">
                MI
              </span>
              <span className="text-2xl font-bold text-gray-900">YERBA</span>
            </div>
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} MI YERBA. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
