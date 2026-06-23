import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Importación de Imágenes (Estas siguen en src/assets)
import logoRenacer from './assets/logo-renacer.jpg';
import heroImg from './assets/hero-bg.jpg';
import somosImg from './assets/quienes-somos.jpg';
import resumenImg from './assets/inicio-resumen.jpg';
import eduImg from './assets/proyecto-educacion.jpg';
import familiaImg from './assets/proyecto-familia.jpg';
import deporteImg from './assets/proyecto-deportes.jpg';
import comedorImg from './assets/proyecto-comedor.jpg';

const whatsappLink = "https://wa.me/573112092829?text=Hola,%20bendiciones.%20Me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20la%20Fundaci%C3%B3n%20Renacer.";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

/* =========================================
   1. PÁGINA DE INICIO (HOME)
========================================= */
function Inicio() {
  return (
    <>
      <header className="relative py-32 flex items-center justify-center min-h-[85vh] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroImg})` }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/75 to-gray-800/50"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
            Alcanzando <br/>
            <span className="text-renacer-blue">Nuevas</span> <span className="text-renacer-orange">Generaciones</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mb-10 leading-relaxed font-medium">
            Movidos por el amor de Cristo, trabajamos con fe y dedicación para transformar la vida de los niños y jóvenes de nuestra comunidad, guiándolos hacia el propósito que Dios tiene para ellos.
          </p>
          <Link to="/quienes-somos" className="inline-block bg-renacer-blue text-white px-8 py-3.5 rounded-full font-bold text-lg hover:bg-sky-500 transition-all duration-300 shadow-xl hover:shadow-sky-500/40">
            Conoce nuestra labor
          </Link>
        </div>
      </header>

      <section className="bg-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-sm font-bold text-renacer-orange tracking-widest uppercase mb-3">Versículo Lema</h2>
          <p className="text-2xl md:text-3xl text-gray-700 italic font-medium max-w-4xl mx-auto leading-relaxed">
            "Instruye al niño en su camino, Y aun cuando fuere viejo no se apartará de él."
          </p>
          <p className="text-gray-500 mt-4 font-bold">— Proverbios 22:6</p>
        </div>
      </section>

      <section className="bg-gray-50 py-20 border-t border-gray-100">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img src={resumenImg} alt="Nuestra familia" className="rounded-3xl shadow-xl h-[350px] w-full object-cover" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-sm font-bold text-renacer-orange tracking-widest uppercase mb-2">Nuestra Esencia</h2>
            <h3 className="text-4xl font-extrabold text-gray-900 mb-6">Sembramos fe para cosechar esperanza</h3>
            <p className="text-lg text-gray-600 mb-6">
              Nacimos con la visión espiritual de ser luz en nuestra comunidad. No solo suplimos necesidades físicas o académicas, sino que brindamos alimento espiritual y formamos jóvenes de carácter.
            </p>
            <Link to="/quienes-somos" className="text-renacer-blue font-bold text-lg hover:text-sky-600 flex items-center gap-2 group">
              Conoce nuestra historia completa <span className="transform group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-sm font-bold text-renacer-orange tracking-widest uppercase mb-2">Nuestra Labor</h2>
          <h3 className="text-4xl font-extrabold text-gray-900 mb-12">Manos a la obra</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow text-left">
              <h4 className="text-xl font-bold text-renacer-blue mb-3">Refuerzo Escolar</h4>
              <p className="text-gray-600">Apoyamos el aprendizaje recordando a los niños que Dios les dio inteligencia y talentos.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow text-left">
              <h4 className="text-xl font-bold text-renacer-orange mb-3">Alimentación</h4>
              <p className="text-gray-600">Compartimos alimentos nutritivos en un ambiente de alegría, oración y gratitud a Dios.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow text-left">
              <h4 className="text-xl font-bold text-renacer-blue mb-3">Valores y Familia</h4>
              <p className="text-gray-600">Trabajamos con líderes y padres para inculcar el respeto y el amor que nos enseña Jesús.</p>
            </div>
          </div>

          <Link to="/proyectos" className="inline-block bg-renacer-orange text-white px-8 py-3.5 rounded-full font-bold hover:bg-orange-600 transition-all shadow-md hover:shadow-orange-500/30">
            Ver todos nuestros proyectos
          </Link>
        </div>
      </section>
    </>
  );
}

/* =========================================
   2. PÁGINA: QUIÉNES SOMOS
========================================= */
function QuienesSomos() {
  return (
    <section className="bg-white py-20 min-h-[70vh]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2 relative group">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img src={somosImg} alt="Familia y valores cristianos" className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-tr from-renacer-orange/30 to-renacer-blue/20 mix-blend-multiply"></div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2">
          <h2 className="text-sm font-bold text-renacer-orange tracking-widest uppercase mb-3">Nuestra Identidad</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 leading-tight">Sembramos fe para cosechar esperanza</h3>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            En la <strong>Fundación Renacer</strong> somos un ministerio y una familia unida por el amor de Dios. Nacimos con la visión espiritual de ser luz en nuestra comunidad, creyendo firmemente que cada niño es un diseño perfecto con un propósito divino.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            No solo suplimos necesidades físicas o académicas, sino que brindamos alimento espiritual. A través de la enseñanza de la Palabra, el respeto y la oración, formamos jóvenes de carácter que impactarán a sus familias y a la sociedad.
          </p>
          <ul className="space-y-3 font-medium text-gray-700">
            <li className="flex items-center gap-3"><span className="text-renacer-blue text-xl">✓</span> Educación fundamentada en principios bíblicos</li>
            <li className="flex items-center gap-3"><span className="text-renacer-orange text-xl">✓</span> Amor al prójimo y servicio comunitario</li>
            <li className="flex items-center gap-3"><span className="text-renacer-blue text-xl">✓</span> Restauración familiar integral</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/* =========================================
   3. PÁGINA: PROYECTOS
========================================= */
function Proyectos() {
  return (
    <section className="bg-gray-50 py-20 min-h-[70vh]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-sm font-bold text-renacer-orange tracking-widest uppercase mb-3">Nuestras Manos a la Obra</h2>
        <h3 className="text-4xl md:text-5xl font-extrabold mb-16 text-gray-900">Proyectos con Propósito</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300">
            <div className="relative overflow-hidden h-52">
              <img src={eduImg} alt="Educación" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-90"></div>
              <h4 className="absolute bottom-4 left-5 text-xl font-bold text-white">Refuerzo Escolar</h4>
            </div>
            <div className="p-6 text-left">
              <p className="text-gray-600 text-base leading-relaxed">Apoyamos a los niños en su rendimiento académico, recordándoles que Dios les ha dado inteligencia y talentos para brillar.</p>
            </div>
          </div>

          <div className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300">
            <div className="relative overflow-hidden h-52">
              <img src={comedorImg} alt="Comedor infantil" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-renacer-orange/90 to-transparent opacity-90"></div>
              <h4 className="absolute bottom-4 left-5 text-xl font-bold text-white">Alimentación</h4>
            </div>
            <div className="p-6 text-left">
              <p className="text-gray-600 text-base leading-relaxed">Compartimos el pan en comunidad. Un espacio donde los niños reciben refrigerios nutritivos en un ambiente de gratitud.</p>
            </div>
          </div>

          <div className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300">
            <div className="relative overflow-hidden h-52">
              <img src={familiaImg} alt="Valores Cristianos" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-renacer-blue/90 to-transparent opacity-90"></div>
              <h4 className="absolute bottom-4 left-5 text-xl font-bold text-white">Liderazgo Bíblico</h4>
            </div>
            <div className="p-6 text-left">
              <p className="text-gray-600 text-base leading-relaxed">Trabajamos de la mano con líderes y padres de familia para inculcar el respeto, el perdón y el amor que nos enseña Jesús.</p>
            </div>
          </div>

          <div className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300">
            <div className="relative overflow-hidden h-52">
              <img src={deporteImg} alt="Deportes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-90"></div>
              <h4 className="absolute bottom-4 left-5 text-xl font-bold text-white">Deporte con Valores</h4>
            </div>
            <div className="p-6 text-left">
              <p className="text-gray-600 text-base leading-relaxed">Enseñamos disciplina y compañerismo en las canchas, utilizando el deporte para alejar a los jóvenes de las calles.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* =========================================
   4. PÁGINA: DOCUMENTOS (Régimen Tributario)
========================================= */
function Documentos() {
  const listaDocumentos = [
    { id: 1, titulo: "Plan de Acción Anual 2026", descripcion: "Proyección, metas y cronograma de actividades para el año.", link: "/PLAN DE ACCIÓN ANUAL FUNDACION RENACER - 2026.pdf" },
    { id: 2, titulo: "Estados de Situación Financiera 2025", descripcion: "Reporte detallado de nuestra contabilidad.", link: "/ESTADOS FINANCIEROS FUNDACION RENACER.pdf" },
    { id: 3, titulo: "Certificación de Cumplimiento de Requisitos", descripcion: "Acreditación de cumplimiento legal ante la DIAN.", link: "/CERTIFICACIÓN DE CUMPLIMIENTO DE REQUISITOS.pdf" },
    { id: 4, titulo: "Certificación de Antecedentes Judiciales", descripcion: "Certificado de antecedentes de los miembros directivos.", link: "/CERTIFICACIÓN DE ANTECEDENTES JUDICIALES Y CADUCIDAD DE CONTRATOS ESTATALES.pdf" },
    { id: 5, titulo: "Certificación de Cargos y Remuneración", descripcion: "Documento oficial de compensaciones de cargos directivos.", link: "/CERTFICADO DE REMUNERACION DE CARGOS DIRECTIVOS.pdf" },
    { id: 6, titulo: "Acta de Asamblea General N 02", descripcion: "Acta de autorización para la solicitud del Régimen Tributario Especial.", link: "/Acta Autorizacion RTE.pdf" },
    { id: 7, titulo: "Declaración de Renta", descripcion: "Formulario 110 de la DIAN.", link: "/1117625745363 Declaracion de renta.pdf" }
  ];

  return (
    <section className="bg-gray-50 py-20 min-h-[75vh]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-renacer-orange tracking-widest uppercase mb-3">Transparencia</h2>
          <h3 className="text-4xl font-extrabold text-gray-900 mb-4">Documentos Legales</h3>
          <p className="text-gray-600 text-lg">
            Comprometidos con la integridad y la ley, ponemos a disposición pública nuestros reportes y certificaciones como Entidad Sin Ánimo de Lucro, en cumplimiento para la permanencia en el Régimen Tributario Especial.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {listaDocumentos.map((doc) => (
            <div key={doc.id} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="bg-red-50 text-red-500 p-4 rounded-xl shrink-0">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 16L16 11H13V4H11V11H8L12 16ZM20 18H4V20H20V18Z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800">{doc.titulo}</h4>
                  <p className="text-sm text-gray-500">{doc.descripcion}</p>
                </div>
              </div>
              <a 
                href={doc.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full md:w-auto text-center bg-renacer-blue text-white px-6 py-2.5 rounded-full font-bold hover:bg-sky-500 transition-colors shadow-sm shrink-0"
              >
                Ver Documento
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================
   5. ESTRUCTURA PRINCIPAL (APP)
========================================= */
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50 font-sans text-gray-800 flex flex-col">
        
        {/* BARRA SUPERIOR DE CONTACTO */}
        <div className="bg-renacer-blue text-white py-2 text-sm shadow-sm">
          <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
            <span className="font-medium">📍 Calle 8 #9-44, Barrio El Lago</span>
            <div className="flex gap-4 mt-2 sm:mt-0 font-medium">
              <span>📞 311 209 2829</span>
              <span>📞 322 405 6428</span>
            </div>
          </div>
        </div>

        {/* NAVEGACIÓN PRINCIPAL */}
        <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <img src={logoRenacer} alt="Logo Fundación Renacer" className="h-16 md:h-20 w-auto object-contain hover:opacity-80 transition-opacity" />
            </Link>
            
            <ul className="hidden md:flex gap-8 text-gray-600 font-bold items-center">
              <li><Link to="/" className="hover:text-renacer-orange transition-colors duration-300">Inicio</Link></li>
              <li><Link to="/quienes-somos" className="hover:text-renacer-orange transition-colors duration-300">Quiénes Somos</Link></li>
              <li><Link to="/proyectos" className="hover:text-renacer-orange transition-colors duration-300">Proyectos</Link></li>
              <li><Link to="/documentos" className="hover:text-renacer-orange transition-colors duration-300">Documentos</Link></li>
            </ul>

            <a 
              href={whatsappLink}
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-renacer-orange text-white px-6 py-2.5 rounded-full font-bold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-orange-500/30 flex items-center gap-2"
            >
              <span>Contáctanos</span>
            </a>
          </div>
        </nav>

        {/* ÁREA DE PÁGINAS */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/documentos" element={<Documentos />} />
          </Routes>
        </main>

        {/* FOOTER */}
        <footer className="bg-gray-900 text-white py-12 border-t-4 border-renacer-orange mt-auto">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-extrabold mb-4 tracking-wide">FUNDACIÓN <span className="text-renacer-orange">RENACER</span></h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto text-lg">"Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres."</p>
            <div className="flex flex-col md:flex-row justify-center gap-8 text-gray-300 font-medium bg-gray-800/50 py-4 rounded-xl max-w-3xl mx-auto mb-8">
              <span className="flex items-center justify-center gap-2">📍 Calle 8 #9-44, Barrio El Lago</span>
              <span className="flex items-center justify-center gap-2">📞 311 209 2829 / 322 405 6428</span>
            </div>
            
            <a 
              href={whatsappLink}
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block border-2 border-renacer-blue text-white px-6 py-2 rounded-full font-bold hover:bg-renacer-blue transition-all"
            >
              Escríbenos por WhatsApp
            </a>

            <div className="mt-10 pt-8 border-t border-gray-800 text-sm text-gray-500 tracking-wider">
              © {new Date().getFullYear()} Fundación Renacer. Todos los derechos reservados.
            </div>
          </div>
        </footer>

      </div>
    </BrowserRouter>
  )
}