import { useState } from 'react';
import img1 from '../assets/img1.webp'
import img2 from '../assets/img2.webp'
import img3 from '../assets/img3.webp'

interface CarruselContent {
    img: string,
    title: any
}

const Carrusel = () => {
    const carruselItems: CarruselContent[] = [
        {
            img: img1,
            title: (
                <>
                    Derecho Constitucional <br /> y Procesal Constitucional
                </>
            )
        },
        {
            img: img2,
            title: "Derecho Civil"
        },
        {
            img: img3,
            title: (
                <>
                    Derecho Penal <br /> y Procesal Penal
                </>
            )
        }
    ];
    const [indice, setIndice] = useState(0);

    const avanzar = () => {
        setIndice((prev) => (prev + 1) % carruselItems.length);
    };

    const retroceder = () => {
        setIndice((prev) => (prev - 1 + carruselItems.length) % carruselItems.length);
    };

    return (
        <div className="carrusel-container">

            <div className="carrusel-slider" style={{ transform: `translateX(-${indice * 100}%)` }}>
                {carruselItems.map((item, i) => (
                    <div className="carrusel-item" key={i} >
                        <img src={item.img} alt="" />
                        <h2>{item.title}</h2>
                    </div>
                ))}
            </div>

            <button className="btn-carrusel izquierda" onClick={retroceder}>←</button>
            <button className="btn-carrusel derecha" onClick={avanzar}>→</button>
        </div>
    );
};

export default Carrusel;
