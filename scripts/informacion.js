function App() {
  const [menuAbierto, setMenuAbierto] = React.useState(false);

  const menuItems = [
    { label: "INICIO", href: "./index.html" },
    { label: "SERVICIOS", href: "servicios.html" },
    { label: "PRODUCTOS", href: "productos.html" },
    { label: "CONTACTOS", href: "contactos.html" },
    { label: "MINIJUEGO", href: "minijuego.html" },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between relative z-10">
      <header className="py-4 px-4 sm:px-6 text-center bg-transparent backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex justify-between items-center w-full sm:w-auto">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              <span className="text-yellow-600">MI</span> YERBA
            </h1>

            <button
              onClick={() => setMenuAbierto(!menuAbierto)}
              className="sm:hidden text-lg font-semibold p-2"
              aria-label="Abrir menú"
            >
              ☰ Menú
            </button>
          </div>

          <nav
            className={`${
              menuAbierto ? "flex" : "hidden"
            } sm:flex mt-4 sm:mt-0 text-lg`}
          >
            <div className="flex flex-col sm:flex-row items-center gap-x-6">
              {menuItems.map(({ label, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="font-bold hover:text-yellow-600 py-2 sm:py-0"
                >
                  {label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-grow py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Tarjeta del fundador */}
          <div className="flex flex-col items-center w-full lg:w-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg card-hover w-full max-w-xs">
              <img
                src="https://cm1.aminoapps.com/6386/83e43f8e49a87cf144f1a4a2e9f03b67d2e1e02c_00.jpg"
                alt="Luis Contreras - Fundador"
                className="w-40 h-40 mx-auto object-cover rounded-full border-4 border-yellow-400 mb-4"
              />
              <div className="text-center">
                <h2 className="text-xl font-bold mb-1">Luis Contreras</h2>
                <p className="text-yellow-600 font-medium mb-2">
                  Fundador y CEO
                </p>
                <div className="space-y-1 text-sm">
                  <p className="flex items-center justify-center">
                    <i className="fas fa-envelope text-yellow-500 mr-2"></i>
                    luis@miyerba.com
                  </p>
                  <p className="flex items-center justify-center">
                    <i className="fas fa-phone text-yellow-500 mr-2"></i>
                    +51 999 888 777
                  </p>
                </div>
                <div className="mt-4 flex justify-center space-x-3">
                  <a
                    href="#"
                    className="social-icon text-gray-600 hover:text-blue-600"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href="#"
                    className="social-icon text-gray-600 hover:text-blue-400"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    className="social-icon text-gray-600 hover:text-purple-600"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Historia */}
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg card-hover max-w-2xl">
            <h2 className="text-2xl font-bold mb-4 text-center sm:text-left">
              <i className="fas fa-book text-yellow-500 mr-2"></i>
              Nuestra Historia
            </h2>

            <div className="space-y-4 text-justify">
              <div className="flex items-start">
                <span className="text-yellow-500 mr-2">📖</span>
                <p>
                  La Pasión de Luis Contreras por el Mate En el corazón de La
                  Molina, Lima, donde el ritmo de la ciudad se mezcla con
                  tradiciones de todo el mundo, nació MIYERBA, una empresa
                  dedicada a llevar el auténtico sabor del mate a los hogares
                  del Perú. Detrás de esta visión está Luis Contreras, un
                  emprendedor apasionado por las raíces sudamericanas y el arte
                  de compartir historias alrededor de una buena yerba.
                </p>
              </div>

              <div className="flex items-start">
                <span className="text-yellow-500 mr-2">🌱</span>
                <p>
                  Luis Contreras siempre tuvo un vínculo especial con las
                  tradiciones de Sudamérica. Durante sus viajes por Argentina,
                  Paraguay y Uruguay, descubrió que el mate no era solo una
                  bebida, sino un símbolo de comunidad, energía y herencia
                  cultural. Sin embargo, en Perú, notó que era difícil encontrar
                  yerba mate de calidad premium, auténtica y con procedencia
                  garantizada. Fue así que, en 2015, decidió dar el salto. Con
                  un pequeño local en Av. La Fontana 1250, La Molina, comenzó a
                  importar yerba mate directamente de los mejores productores
                  del Cono Sur. Lo que empezó como un emprendimiento familiar,
                  pronto se convirtió en un referente para los amantes del mate
                  en Lima.
                </p>
              </div>

              <div className="flex items-start">
                <span className="text-yellow-500 mr-2">🚀</span>
                <p>
                  Luis no solo vendía yerba; educaba a sus clientes. Organizó
                  círculos de mate, talleres sobre sus beneficios y hasta catas
                  para diferenciar los sabores de cada región. Pronto, MIYERBA
                  se convirtió en un punto de encuentro para argentinos,
                  paraguayos, uruguayos y peruanos curiosos por probar esta
                  infusión. Hoy, MIYERBA sigue en su ubicación emblemática de La
                  Molina, pero con presencia online y una red de distribuidores.
                  Luis mantiene su compromiso con: Calidad: Yerbas
                  seleccionadas, sin mezclas artificiales. Tradición: Cada
                  paquete cuenta la historia de su origen. Innovación: Nuevas
                  blends (como yerbas saborizadas o para tereré).
                </p>
              </div>

              <div className="flex items-start">
                <span className="text-yellow-500 mr-2">🔮</span>
                <p>
                  Luis sueña con que MIYERBA sea la marca líder de mate en Perú
                  y expandirse a otros países. Pero su mayor orgullo es ver
                  cómo, alrededor de un mate, se crean amistades y se mantienen
                  vivas las tradiciones. "El mate no se toma solo… se comparte.
                  Y eso es lo que queremos recordarle al mundo." — Luis
                  Contreras, Fundador de MIYERBA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer mejorado */}
      <footer className="bg-white/90 backdrop-blur-sm py-8 px-4 sm:px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Columna 1: Branding + Redes Sociales */}
            <div>
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-yellow-600 mr-2">
                  MI
                </span>
                <span className="text-2xl font-bold text-gray-900">YERBA</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Especialistas en yerba mate premium desde Argentina, Paraguay y
                Uruguay.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://tiktok.com/@miyerba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon text-gray-600 hover:text-pink-500 text-xl"
                >
                  <i className="fab fa-tiktok"></i>
                </a>
                <a
                  href="https://twitter.com/miyerba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon text-gray-600 hover:text-black text-xl"
                >
                  <i className="fab fa-x-twitter"></i>
                </a>
                <a
                  href="https://instagram.com/miyerba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon text-gray-600 hover:text-purple-600 text-xl"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://facebook.com/miyerba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon text-gray-600 hover:text-blue-600 text-xl"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>

            {/* Columna 2: Enlaces rápidos */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Explorar</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="../index.html"
                    className="text-gray-600 hover:text-yellow-600 transition"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="productos.html"
                    className="text-gray-600 hover:text-yellow-600 transition"
                  >
                    Productos
                  </a>
                </li>
                <li>
                  <a
                    href="servicios.html"
                    className="text-gray-600 hover:text-yellow-600 transition"
                  >
                    Servicios
                  </a>
                </li>
                <li>
                  <a
                    href="minijuego.html"
                    className="text-gray-600 hover:text-yellow-600 transition"
                  >
                    Minijuego
                  </a>
                </li>
              </ul>
            </div>

            {/* Columna 3: Horario */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Horario</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <i className="fas fa-clock text-yellow-500 mt-1 mr-3"></i>
                  <div>
                    <p className="font-medium text-gray-800">Lunes a Viernes</p>
                    <p className="text-gray-600 text-sm">9:00 AM - 7:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-clock text-yellow-500 mt-1 mr-3"></i>
                  <div>
                    <p className="font-medium text-gray-800">Sábados</p>
                    <p className="text-gray-600 text-sm">9:00 AM - 2:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-calendar-times text-yellow-500 mt-1 mr-3"></i>
                  <div>
                    <p className="font-medium text-gray-800">Domingos</p>
                    <p className="text-gray-600 text-sm">Cerrado</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna 4: Contacto */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Contacto</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <i className="fas fa-map-marker-alt text-yellow-500 mt-1 mr-3"></i>
                  <div>
                    <p className="text-gray-600">Av. la Fontana 1250</p>
                    <p className="text-gray-600">La Molina, Lima</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-phone text-yellow-500 mr-3"></i>
                  <a
                    href="tel:+51999888777"
                    className="text-gray-600 hover:text-yellow-600"
                  >
                    +51 999 888 777
                  </a>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-envelope text-yellow-500 mr-3"></i>
                  <a
                    href="mailto:contacto@miyerba.com"
                    className="text-gray-600 hover:text-yellow-600"
                  >
                    contacto@miyerba.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Derechos de autor */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} MI YERBA. Todos los derechos
              reservados.
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Diseñado con ❤️ para los amantes del mate
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
