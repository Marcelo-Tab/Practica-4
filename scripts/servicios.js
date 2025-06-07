function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    nombre: "",
    email: "",
    direccion: "",
    codigoPostal: "",
    telefono: "",
    detalles: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Gracias por contactarnos. Pronto nos pondremos en contacto contigo."
    );
    setFormData({
      nombre: "",
      email: "",
      direccion: "",
      codigoPostal: "",
      telefono: "",
      detalles: "",
    });
  };

  const openWhatsApp = () => {
    const message = "Hola MI YERBA, tengo una consulta:";
    window.open(
      `https://wa.me/51999888777?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const menuItems = [
    { label: "INICIO", href: "../index.html" },
    { label: "SERVICIOS", href: "servicios.html" },
    { label: "PRODUCTOS", href: "productos.html" },
    { label: "CONTACTOS", href: "contactos.html" },
    { label: "MINIJUEGO", href: "minijuego.html" },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between relative z-10">
      {/* Header actualizado */}
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

      {/* Contenido principal con padding-top para el header fijo */}
      <main className="flex-grow py-12 px-4 pt-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Contáctenos</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Formulario */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg card-hover">
              <h3 className="text-2xl font-bold mb-4">
                <i className="fas fa-envelope text-yellow-500 mr-2"></i>
                Formulario de Contacto
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-700 font-bold mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-bold mb-2">
                      Código Postal
                    </label>
                    <input
                      type="text"
                      name="codigoPostal"
                      value={formData.codigoPostal}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Dirección
                  </label>
                  <input
                    type="text"
                    name="direccion"
                    value={formData.direccion}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Más detalles
                  </label>
                  <textarea
                    name="detalles"
                    value={formData.detalles}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Describe tu consulta o pedido especial..."
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" required />
                    <span className="text-sm">
                      Acepto recibir información por correo electrónico
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-3 px-4 rounded-lg font-bold text-white"
                >
                  <i className="fas fa-paper-plane mr-2"></i> Enviar mensaje
                </button>
              </form>
            </div>

            {/* Mapa e Información */}
            <div className="space-y-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg card-hover">
                <h3 className="text-2xl font-bold mb-4">
                  <i className="fas fa-map-marker-alt text-yellow-500 mr-2"></i>
                  Nuestro Local
                </h3>
                <div className="aspect-w-16 aspect-h-9 mb-4 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.965717584423!2d-76.96592592471448!3d-12.056424088146622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c6a154f1f14d%3A0x1a3c3a1a3a1a3a1a!2sAv.%20la%20Fontana%201250%2C%20La%20Molina%2015024!5e0!3m2!1ses-419!2spe!4v1620000000000!5m2!1ses-419!2spe"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <i className="fas fa-map-pin text-yellow-500 mt-1 mr-3"></i>
                    <div>
                      <p className="font-semibold">Dirección:</p>
                      <p>Av. la Fontana 1250, La Molina 15024</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <i className="fas fa-clock text-yellow-500 mt-1 mr-3"></i>
                    <div>
                      <p className="font-semibold">Horario:</p>
                      <p>Lunes a Viernes: 9:00 AM - 7:00 PM</p>
                      <p>Sábados: 9:00 AM - 2:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <i className="fas fa-phone text-yellow-500 mr-3"></i>
                    <a
                      href="tel:+51999888777"
                      className="hover:text-yellow-600"
                    >
                      +51 999 888 777
                    </a>
                  </div>

                  <div className="flex items-center">
                    <i className="fas fa-envelope text-yellow-500 mr-3"></i>
                    <a
                      href="mailto:contactos@miyerba.com"
                      className="hover:text-yellow-600"
                    >
                      contactos@miyerba.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg card-hover">
                <h3 className="text-2xl font-bold mb-4">
                  <i className="fas fa-route text-yellow-500 mr-2"></i>
                  Cómo llegar
                </h3>
                <p className="mb-4">
                  Si desea visitarnos personalmente, aquí le indicamos cómo
                  llegar:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Estamos ubicados en Av. La Fontana 1250, La Molina</li>
                  <li>Puede tomar los buses que van por la Av. La Molina</li>
                  <li>Contamos con estacionamiento para clientes</li>
                </ul>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={openWhatsApp}
                    className="whatsapp-btn bg-green-100 hover:bg-green-200 text-green-800 rounded-lg p-3 text-center transition flex flex-col items-center justify-center"
                  >
                    <i className="fab fa-whatsapp text-xl mb-1"></i>
                    <span className="text-sm font-medium">WhatsApp</span>
                  </button>
                  <a
                    href="tel:+51999888777"
                    className="call-btn bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-lg p-3 text-center transition flex flex-col items-center justify-center"
                  >
                    <i className="fas fa-phone text-xl mb-1"></i>
                    <span className="text-sm font-medium">Llamar</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
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
