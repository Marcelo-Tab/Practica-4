function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [activeProblem, setActiveProblem] = React.useState(null);
  const [formData, setFormData] = React.useState({
    nombre: "",
    email: "",
    pedido: "",
    problema: "",
    mensaje: "",
  });
  const [copiedEmail, setCopiedEmail] = React.useState(null);
  const [helpfulRatings, setHelpfulRatings] = React.useState({});

  // Problemas comunes con soluciones mejoradas
  const problemasComunes = [
    {
      id: 1,
      titulo: "Mi pedido llegó incompleto",
      solucion: [
        "Verifica el email de confirmación para comparar con lo recibido",
        "Revisa si algún producto viene en un paquete separado",
        "Si falta algo, contacta a: reclamos@miyerba.com",
      ],
      email: "reclamos@miyerba.com",
    },
    {
      id: 2,
      titulo: "La yerba tiene un sabor diferente",
      solucion: [
        "Algunas cosechas varían ligeramente por condiciones climáticas",
        "Asegúrate de usar agua a 70-80°C para mejor extracción",
        "Si persiste, contáctanos: calidad@miyerba.com",
      ],
      email: "calidad@miyerba.com",
    },
    {
      id: 3,
      titulo: "No encuentro el código de seguimiento",
      solucion: [
        "Revisa la bandeja de spam o correos no deseados",
        "Ingresa a 'Mis pedidos' en tu cuenta en miyerba.com",
        "Contáctanos por WhatsApp para asistencia inmediata",
      ],
      whatsapp: "+51999888777",
    },
    {
      id: 4,
      titulo: "Quiero cambiar un producto",
      solucion: [
        "Aceptamos cambios dentro de los 7 días posteriores",
        "El producto debe estar sin abrir en su empaque original",
        "Coordínalo con: cambios@miyerba.com",
      ],
      email: "cambios@miyerba.com",
    },
    {
      id: 5,
      titulo: "El empaque llegó dañado",
      solucion: [
        "Toma fotos del empaque antes de abrirlo (requerido)",
        "Los productos en bolsa al vacío suelen estar protegidos",
        "Reporta a: soporte@miyerba.com para reembolso",
      ],
      email: "soporte@miyerba.com",
    },
  ];

  const menuItems = [
    { label: "INICIO", href: "../index.html" },
    { label: "SERVICIOS", href: "servicios.html" },
    { label: "PRODUCTOS", href: "productos.html" },
    { label: "CONTACTOS", href: "contactos.html" },
    { label: "MINIJUEGO", href: "minijuego.html" },
  ];

  const toggleProblem = (id) => {
    setActiveProblem(activeProblem === id ? null : id);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Hemos recibido tu consulta. Te responderemos dentro de 24 horas.");
    setFormData({
      nombre: "",
      email: "",
      pedido: "",
      problema: "",
      mensaje: "",
    });
  };

  const copyToClipboard = (email, id) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(id);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  const rateSolution = (problemId, isHelpful) => {
    setHelpfulRatings((prev) => ({
      ...prev,
      [problemId]: isHelpful,
    }));
  };

  const openWhatsApp = () => {
    const message = "Hola MI YERBA, necesito ayuda con mi pedido:";
    window.open(
      `https://wa.me/51999888777?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen flex flex-col justify-between relative z-10">
      {/* Header transparente con el nuevo diseño */}
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

      <main className="pt-32 px-4 pb-24 flex-grow max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Centro de Ayuda</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Problemas comunes */}
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg card-hover">
            <h3 className="text-2xl font-bold mb-4">Problemas frecuentes</h3>
            <div className="space-y-3">
              {problemasComunes.map((problema) => (
                <div
                  key={problema.id}
                  className={`problema-item border-b border-gray-200 pb-3 ${
                    activeProblem === problema.id ? "active" : ""
                  }`}
                >
                  <div
                    className="flex justify-between items-center cursor-pointer hover:text-yellow-600"
                    onClick={() => toggleProblem(problema.id)}
                  >
                    <h4 className="font-bold text-lg">
                      <i className="fas fa-question-circle text-yellow-500 mr-2"></i>
                      {problema.titulo}
                    </h4>
                    <span className="toggle-icon text-2xl">+</span>
                  </div>
                  <div className="solucion pl-4 mt-2">
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      {problema.solucion.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>

                    {/* Acciones adicionales */}
                    <div className="mt-3 space-y-2">
                      {problema.email && (
                        <button
                          onClick={() =>
                            copyToClipboard(problema.email, problema.id)
                          }
                          className="flex items-center text-sm bg-gray-100 hover:bg-gray-200 rounded px-2 py-1"
                        >
                          <i className="fas fa-copy mr-1"></i>
                          <span>
                            {copiedEmail === problema.id
                              ? "✓ Copiado!"
                              : `Copiar email`}
                          </span>
                        </button>
                      )}

                      {problema.whatsapp && (
                        <button
                          onClick={openWhatsApp}
                          className="flex items-center text-sm bg-green-100 hover:bg-green-200 text-green-800 rounded px-2 py-1"
                        >
                          <i className="fab fa-whatsapp mr-1"></i>
                          <span>Contactar por WhatsApp</span>
                        </button>
                      )}

                      {/* Valoración de solución */}
                      <div className="mt-2 flex items-center text-sm">
                        <span className="mr-2">¿Te ayudó esta solución?</span>
                        <button
                          onClick={() => rateSolution(problema.id, true)}
                          className={`mr-1 ${
                            helpfulRatings[problema.id] === true
                              ? "text-green-500"
                              : "text-gray-400"
                          }`}
                        >
                          👍
                        </button>
                        <button
                          onClick={() => rateSolution(problema.id, false)}
                          className={`${
                            helpfulRatings[problema.id] === false
                              ? "text-red-500"
                              : "text-gray-400"
                          }`}
                        >
                          👎
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg card-hover">
            <h3 className="text-2xl font-bold mb-4">Envíanos tu consulta</h3>
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

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Número de pedido (opcional)
                </label>
                <input
                  type="text"
                  name="pedido"
                  value={formData.pedido}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Ej: MY-2023-001"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Tipo de problema
                </label>
                <select
                  name="problema"
                  value={formData.problema}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                >
                  <option value="">Selecciona una opción</option>
                  <option value="envio">Problemas con el envío</option>
                  <option value="pago">Problemas con el pago</option>
                  <option value="producto">Producto dañado/incompleto</option>
                  <option value="sabor">Problemas con el sabor</option>
                  <option value="otro">Otro problema</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Describe tu problema
                </label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                  placeholder="Incluye detalles como número de pedido, fotos adjuntas, etc."
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" required />
                  <span className="text-sm">
                    Acepto recibir información sobre mi reclamo por correo
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

            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                O contáctanos directamente
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://wa.me/51999888777"
                  className="bg-green-100 hover:bg-green-200 text-green-800 rounded-lg p-3 text-center transition"
                >
                  <i className="fab fa-whatsapp text-lg mb-1"></i>
                  <p className="text-sm font-medium">WhatsApp</p>
                </a>
                <a
                  href="tel:+51999888777"
                  className="bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-lg p-3 text-center transition"
                >
                  <i className="fas fa-phone text-lg mb-1"></i>
                  <p className="text-sm font-medium">Llamar</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer mejorado con redes sociales */}
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
