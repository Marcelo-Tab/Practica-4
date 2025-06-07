function App() {
  const [carrito, setCarrito] = React.useState([]);
  const [menuAbierto, setMenuAbierto] = React.useState(false);
  const [mostrarCarrito, setMostrarCarrito] = React.useState(false);

  const yerbas = [
    {
      id: 1,
      nombre: "VerdeFlor",
      img: "https://veaargentina.vtexassets.com/arquivos/ids/657416/Yerba-Mate-Verdeflor-C-palo-Naranja-Sabor-Naranja-Sin-Atributo-Sin-Atributo-1-105281.jpg?v=637629201187700000",
      peso: "500g",
      origen: "Argentina",
      sabor: "Intenso",
      precio: 35,
      destacado: true,
    },
    {
      id: 2,
      nombre: "RosaMonte",
      img: "https://acdn-us.mitiendanube.com/stores/805/409/products/02-render-rosamonte-tradicional-x-500g-final-1-fa104fbb23cf54e43917053428163617-480-0.jpg",
      peso: "1kg",
      origen: "Argentina",
      sabor: "Suave",
      precio: 40,
      destacado: false,
    },
    {
      id: 3,
      nombre: "Playadito",
      img: "https://cdn11.bigcommerce.com/s-3stx4pub31/images/stencil/590x590/products/169/7786/500suave__53123.1657568195.jpg?c=2",
      peso: "750g",
      origen: "Brasil",
      sabor: "Dulce",
      precio: 30,
      destacado: true,
    },
    {
      id: 4,
      nombre: "Taragüi",
      img: "https://tienda306.com/1304-medium_default/taragui-yerba-mate-mezcla-regular-energizante-500g.jpg",
      peso: "500g",
      origen: "Uruguay",
      sabor: "Aromático",
      precio: 20,
      destacado: false,
    },
    {
      id: 5,
      nombre: "CBSé",
      img: "https://ardiaprod.vtexassets.com/arquivos/ids/322834/Yerba-Mate-Cbse-Hierbas-Serranas-500-Gr-_1.jpg?v=638599548324300000",
      peso: "500g",
      origen: "Argentina",
      sabor: "Hierbas Serranas",
      precio: 25,
      destacado: true,
    },
    {
      id: 6,
      nombre: "La Merced",
      img: "https://www.tiendataragui.cl/cdn/shop/files/d66766e9-1919-463e-93d0-91f6c8410dfb.jpg?v=1732849713",
      peso: "500g",
      origen: "Argentina",
      sabor: "Premium",
      precio: 45,
      destacado: true,
    },
  ];

  const agregarAlCarrito = (yerba) => {
    setCarrito([...carrito, yerba]);
    setMostrarCarrito(true);
  };

  const quitarDelCarrito = (index) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito.splice(index, 1);
    setCarrito(nuevoCarrito);
  };

  const menuItems = [
    { label: "INICIO", href: "../index.html" },
    { label: "SERVICIOS", href: "servicios.html" },
    { label: "PRODUCTOS", href: "productos.html" },
    { label: "CONTACTOS", href: "contactos.html" },
    { label: "MINIJUEGO", href: "minijuego.html" },
  ];

  const total = carrito.reduce((acc, item) => acc + item.precio, 0);

  const pagar = () => {
    alert(
      "¡Gracias por tu compra! 🧉 Pronto nos pondremos en contacto para coordinar la entrega."
    );
    setCarrito([]);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between relative z-10">
      {/* Header corregido */}
      <header className="py-4 px-4 sm:px-6 bg-transparent backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex justify-between items-center w-full sm:w-auto">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              <span className="text-yellow-600">MI</span> YERBA
            </h1>

            <div className="flex items-center sm:hidden">
              <button
                onClick={() => setMostrarCarrito(!mostrarCarrito)}
                className="relative p-2 ml-4"
              >
                <i className="fas fa-shopping-cart text-xl"></i>
                {carrito.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-yellow-500 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {carrito.length}
                  </span>
                )}
              </button>
              <button
                onClick={() => setMenuAbierto(!menuAbierto)}
                className="ml-2 text-lg font-semibold p-2"
                aria-label="Abrir menú"
              >
                ☰
              </button>
            </div>
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
              <button
                onClick={() => setMostrarCarrito(!mostrarCarrito)}
                className="relative p-2 hidden sm:block"
              >
                <i className="fas fa-shopping-cart text-xl"></i>
                {carrito.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-yellow-500 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {carrito.length}
                  </span>
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Carrito flotante corregido */}
      {mostrarCarrito && carrito.length > 0 && (
        <div className="fixed right-4 top-24 sm:top-20 bg-white/90 backdrop-blur-sm rounded-xl shadow-xl z-50 p-4 w-72 max-h-[70vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-lg">Tu Carrito ({carrito.length})</h3>
            <button
              onClick={() => setMostrarCarrito(false)}
              className="text-gray-500 hover:text-black"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          <ul className="mb-3">
            {carrito.map((item, i) => (
              <li
                key={i}
                className="carrito-item flex justify-between items-center py-2 px-1 border-b border-gray-100"
              >
                <div>
                  <p className="font-medium">{item.nombre}</p>
                  <p className="text-sm text-gray-600">S/ {item.precio}</p>
                </div>
                <button
                  onClick={() => quitarDelCarrito(i)}
                  className="text-red-400 hover:text-red-600 p-1"
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mb-3">
            <span className="font-bold">Total:</span>
            <span className="font-bold">S/ {total}</span>
          </div>
          <button
            onClick={pagar}
            className="w-full btn-primary py-2 px-4 rounded-lg font-bold text-white"
          >
            <i className="fas fa-credit-card mr-2"></i> Pagar Ahora
          </button>
        </div>
      )}

      <main className="pt-12 px-4 pb-24 flex-grow max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold">Nuestras Yerbas Premium</h2>
          <p className="text-gray-600 mt-2">Selecciona tu favorita</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {yerbas.map((yerba) => (
            <div
              key={yerba.id}
              className={`bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-lg flex flex-col items-center card-hover ${
                yerba.destacado ? "ring-2 ring-yellow-400" : ""
              }`}
            >
              {yerba.destacado && (
                <span className="self-start bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full mb-2">
                  DESTACADO
                </span>
              )}
              <img
                src={yerba.img}
                alt={yerba.nombre}
                className="w-32 h-32 object-contain mb-4 yerba-img hover:scale-105"
              />
              <h3 className="text-xl font-bold text-center">{yerba.nombre}</h3>
              <div className="flex flex-wrap justify-center gap-2 my-3">
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                  {yerba.peso}
                </span>
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                  {yerba.origen}
                </span>
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                  {yerba.sabor}
                </span>
              </div>
              <p className="text-xl font-bold text-yellow-600 my-2">
                S/ {yerba.precio}
              </p>
              <button
                onClick={() => agregarAlCarrito(yerba)}
                className="mt-auto btn-primary py-2 px-6 rounded-lg font-bold text-white text-sm"
              >
                <i className="fas fa-cart-plus mr-2"></i> Agregar
              </button>
            </div>
          ))}
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
