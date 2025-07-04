import './App.css'
import logo from './assets/logo.jpg'
import checkIcon from './assets/icons/check.svg'
import Carrusel from './components/Carrusel'
import mariagabriela from './assets/MariaGabriela.webp'

function App() {

  return (
    <>
      <div className='header'>
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>Servicios</li>
          <li>Nosotros</li>
          <li>Contacto</li>
        </ul>
      </div>
      <Carrusel />
      <div className='nosotros'>
        <div className='nosotros-text'>
          <p style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            margin: 0
          }}>
            <img src={checkIcon} alt="" style={{ height: "1em" }} />
            Acerca de nosotros
          </p>
          <h2 style={{ textAlign: "start", fontWeight: "bold" }}>Nuestro propósito y compromiso</h2>
          <p style={{ textAlign: "justify", margin: "0px"}}><span>El propósito y el compromiso de <b>LEX ITINERE</b> es asesorar y patrocinar disruptivamente a sus clientes para la resolución de conflictos y litigios complejos en el marco de un mundo globalizado, utilizando estrategias interdisciplinarias apegadas a la ética y al cumplimiento normativo.</span><br /><b>LEX ITINERE</b> se enfoca en brindar servicios jurídicos que se alejan permanentemente de la forma tradicional de ejercer la profesión, impulsando el crecimiento de sus clientes en sus metas y aspiraciones a futuro. <b>LEX ITINERE</b> busca convertirse en el asesor de confianza y aliado de sus clientes y cruzar fronteras.</p>
        </div>
        <img src={mariagabriela} alt="" style={{width: "350px", height: "450px", alignSelf: "center"}}/>
      </div>
      <div className='post-nostros'>
        <div>logo</div>
        <div>
          <h3>Accede a una asesoría legal y resuelve tus dudas con nuestros abogados especializados.</h3>
          <button>AGENDA UNA ASESORÍA AQUÍ</button>
        </div>
      </div>
      <div className='servicios'>
        <p>SERVICIOS</p>
        <h2>Nuestras Áreas de Conocimiento</h2>
        <div>
          <div>Componente 1</div>
          <div>Componente 2</div>
          <div>Componente 3</div>
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
