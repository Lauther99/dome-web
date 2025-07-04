import './App.css'
// import logo from './assets/logo.jpg'
import logoNoB from './assets/Logo2.png'
import checkIcon from './assets/icons/check.svg'
import lawIcon from './assets/icons/law.svg'
import peopleIcon from './assets/icons/people.svg'
import policeIcon from './assets/icons/police.svg'
import Carrusel from './components/Carrusel'
// import mariagabriela from './assets/MariaGabriela.webp'
import dyk from './assets/dyk.jpg'
import s1 from './assets/s1.webp'
import s2 from './assets/s2.webp'
import s3 from './assets/s3.webp'

function App() {

  return (
    <>
      <div className='header'>
        <img src={logoNoB} alt="" />
        <ul>
          <a href='#'>Home</a>
          <a href='#servicios'>Servicios</a>
          <a href='#nosotros'>Nosotros</a>
          <a href='#contacto'>Contacto</a>
        </ul>
      </div>
      <Carrusel />
      <div className='nosotros' id='nosotros'>
        <div className='nosotros-text'>
          <p style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            margin: 0,
            fontWeight: "bold"
          }}>
            <img src={checkIcon} alt="" style={{ height: "1em" }} />
            Acerca de nosotros
          </p>
          <h2 style={{ textAlign: "start", fontWeight: "bold" }}>Nuestro propósito y compromiso</h2>
          <p style={{ textAlign: "justify", margin: "0px" }}>En Firma <b>D&K Legal</b>, nos comprometemos a brindar asesoramiento jurídico de alta calidad y personalizado a nuestros clientes, protegiendo sus derechos y libertades con integridad y ética. Estamos dedicadas a establecer relaciones duraderas con nuestros clientes basadas en la confianza y el respeto, y a trabajar incansablemente para lograr resultados justos y satisfactorios. <br /><br />Nuestro compromiso es trabajar con pasión y dedicación para defender los intereses de nuestros clientes y contribuir a la justicia y la equidad en la sociedad. Con la experiencia y conocimiento de nuestras fundadoras, <b>Doménica y Katherine</b>, nos esforzamos por brindar soluciones legales efectivas y personalizadas que se adapten a las necesidades y objetivos de cada cliente.</p>
        </div>
        <div className="dyk-photo">
          <img src={dyk} alt="" />
        </div>
      </div>
      <div className='post-nosotros' id='contacto'>
        <div className="post-nosotros-img">
          <div className="blur-bg" />
          <img src={logoNoB} alt="" className="logo" />
        </div>
        <div className='post-nosotros-text'>
          <h3>Accede a una asesoría legal y resuelve tus dudas con nuestros abogados especializados.</h3>
          <button>
            <a href='https://wa.link/cb5agw' target="_blank" rel="noopener noreferrer">AGENDA UNA ASESORÍA AQUÍ</a>
          </button>
        </div>
      </div>
      <div className='servicios' id='servicios'>
        <p style={{ color: "rgb(158, 135, 0)", fontSize: "24px", margin: "0px" }}><b>SERVICIOS</b></p>
        <h2 style={{ fontSize: "36px", margin: "0px", textAlign: "center" }}>Nuestras Áreas de Conocimiento</h2>
        <div className='servicios-cards-container'>
          <div className="legal-card">
            <img src={s1} alt="" />
            {/* Encabezado con íconos simulados */}
            <div className="legal-card-header">
              <div className='icon-image'>
                <img src={lawIcon} alt="" />
              </div>
              <div className="icon check-icon">✔</div>
            </div>

            {/* Título */}
            <h3 className="legal-card-title">
              Derecho Constitucional y<br />
              Procesal Constitucional
            </h3>

            {/* Lista de puntos */}
            <ul className="legal-card-list">
              <li>Garantías jurisdiccionales</li>
              <li>Medidas cautelares y constitucionales</li>
              <li>Amicus Curiae</li>
            </ul>
          </div>
          <div className="legal-card">
            <img src={s2} alt="" />
            {/* Encabezado con íconos simulados */}
            <div className="legal-card-header">
              <div className='icon-image'>
                <img src={policeIcon} alt="" />
              </div>
              <div className="icon check-icon">✔</div>
            </div>

            {/* Título */}
            <h3 className="legal-card-title">
              Derecho Penal y<br />
              Procesal Penal
            </h3>

            {/* Lista de puntos */}
            <ul className="legal-card-list">
              <li>Delitos de acción pública</li>
              <li>Delitos de acción privada</li>
              <li>Violencia intrafamiliar y de género</li>
            </ul>
          </div>
          <div className="legal-card">
            <img src={s3} alt="" />
            <div className="legal-card-header">
              <div className='icon-image'>
                <img src={peopleIcon} alt="" />
              </div>
              <div className="icon check-icon">✔</div>
            </div>

            <h3 className="legal-card-title">Derecho Societario</h3>

            <ul className="legal-card-list">
              <li>Constitución de compañías y sociedades</li>
              <li>Revisión de libros sociales</li>
              <li>Elaboración de nombramientos</li>
            </ul>
          </div>

        </div>
      </div>

      <div className="footer">
        <div className="footer-column">
          <div className="footer-logo">
            <img src={logoNoB} alt="" />
          </div>
          <p>
            Nos enfocamos en brindar servicios jurídicos, impulsando el crecimiento y
            aspiraciones a futuro.
          </p>
        </div>

        <div className="footer-column">
          <h3>Áreas de Servicios</h3>
          <ul className="footer-links">
            <li><a href="#">Derecho Constitucional y Procesal Constitucional</a></li>
            <li><a href="#">Derecho Penal y Procesal Penal</a></li>
            <li><a href="#">Derecho Penal Económico</a></li>
            <li><a href="#">Métodos Alternativos de Solución de Conflictos</a></li>
            <li><a href="#">Derecho Laboral</a></li>
            <li><a href="#">Derecho Civil</a></li>
            <li><a href="#">Derecho Societario</a></li>
            <li><a href="#">Derecho Electoral</a></li>
            <li><a href="#">Derecho Administrativo</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contacto</h3>
          <h4>Teléfono</h4>
          <p>(+593) 098 761 9953</p>
        </div>
      </div>

    </>
  )
}

export default App
