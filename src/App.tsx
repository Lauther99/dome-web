import './App.css'
import logo from './assets/logo.jpg'
import logoNoB from './assets/logoSinFondo.png'
import checkIcon from './assets/icons/check.svg'
import Carrusel from './components/Carrusel'
import mariagabriela from './assets/MariaGabriela.webp'
import s1 from './assets/s1.webp'
import s2 from './assets/s2.webp'
import s3 from './assets/s3.webp'

function App() {

  return (
    <>
      <div className='header'>
        <img src={logo} alt="" />
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
          <p style={{ textAlign: "justify", margin: "0px" }}><span>El propósito y el compromiso de <b>LEX ITINERE</b> es asesorar y patrocinar disruptivamente a sus clientes para la resolución de conflictos y litigios complejos en el marco de un mundo globalizado, utilizando estrategias interdisciplinarias apegadas a la ética y al cumplimiento normativo.</span><br /><b>LEX ITINERE</b> se enfoca en brindar servicios jurídicos que se alejan permanentemente de la forma tradicional de ejercer la profesión, impulsando el crecimiento de sus clientes en sus metas y aspiraciones a futuro. <b>LEX ITINERE</b> busca convertirse en el asesor de confianza y aliado de sus clientes y cruzar fronteras.</p>
        </div>
        <img src={mariagabriela} alt="" style={{ width: "350px", height: "450px", alignSelf: "center" }} />
      </div>
      <div className='post-nosotros' id='contacto'>
        <div className="post-nosotros-img">
          <div className="blur-bg" />
          <img src={logoNoB} alt="" className="logo" />
        </div>
        <div className='post-nosotros-text'>
          <h3>Accede a una asesoría legal y resuelve tus dudas con nuestros abogados especializados.</h3>
          <button>AGENDA UNA ASESORÍA AQUÍ</button>
        </div>
      </div>
      <div className='servicios' id='servicios'>
        <p style={{color: "rgb(158, 135, 0)", fontSize: "24px", margin: "0px"}}><b>SERVICIOS</b></p>
        <h2 style={{fontSize: "36px", margin: "0px"}}>Nuestras Áreas de Conocimiento</h2>
        <div className='servicios-cards-container'>
          <div className="legal-card">
            <img src={s1} alt="" />
            {/* Encabezado con íconos simulados */}
            <div className="legal-card-header">
              <div className="icon law-icon">LAW</div>
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
              <div className="icon law-icon">LAW</div>
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
              <div className="icon law-icon">LAW</div>
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
        <button>MÁS SERVICIOS</button>
      </div>
      <div className='footer'>
        <div>
          <div>logo</div>
          <p>Nos enfocamos en brindar servicios jurídicos, impulsando el crecimiento y aspiraciones a futuro.</p>
          <ul>
            <li>ig</li>
            <li>in</li>
            <li>tiktok</li>
          </ul>
        </div>
        <div>
          <h3>Áreas de Servicios</h3>
          <ul>
            <li>Derecho Constitucional y Procesal Constitucional</li>
            <li>Derecho Penal y Procesal Penal</li>
            <li>Derecho Penal Económico</li>
            <li>Métodos Alternativos de Solución de Conflictos</li>
            <li>Derecho Laboral</li>
            <li>Derecho Civil</li>
            <li>Derecho Societario</li>
            <li>Derecho Electoral</li>
            <li>Derecho Administrativo</li>
          </ul>
        </div>
        <div>
          <h3>Contactos</h3>
          <h4>Dirección</h4>
          <p>Pedro Ponce Carrasco E8-06
            y Av. Diego de Almagro
            Edificio Almagro Plaza Of.1205</p>
          <h4>Teléfono</h4>
          <p>(+593)98 499 1357</p>
        </div>
      </div>
    </>
  )
}

export default App
