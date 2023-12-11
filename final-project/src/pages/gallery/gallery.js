import './gallery.css';
import React from 'react';
import foto1 from '../img/pic1.jpg';
import foto2 from '../img/pic2.jpg';
import foto3 from '../img/pic3.jpg';
import foto4 from '../img/pic4.jpg';
import foto5 from '../img/pic5.jpg';
import foto6 from '../img/pic6.jpg';
import foto7 from '../img/pic7.jpg';
import foto8 from '../img/pic8.jpg';

function Gallery() {

  setTimeout(() => {
    photoFunc();
  }, 1000)

  return (
    <>
      <div className='container-photo'>
        <div className='gallery-container'>
          <p className='gallery'>Галерея работ:</p>


        </div>
        <div>
          <img className='main-foto' src={foto1} alt="main-image" />
        </div>
        <div className="foto-box">
          <a class="link" href="https://github.com/lika-moon">
            Ознакомиться с моими работами можно
            на github </a>
          <img className="foto" alt='icon' src={foto1} />
          <img className="foto" alt='icon' src={foto2} />
          <img className="foto" alt='icon' src={foto3} />
          <img className="foto" alt='icon' src={foto4} />
          <img className="foto" alt='icon' src={foto5} />
          <img className="foto" alt='icon' src={foto6} />
          <img className="foto" alt='icon' src={foto7} />
          <img className="foto" alt='icon' src={foto8} />
        </div>

      </div>

    </>
  )
}

function photoFunc() {

  // вывод фото как главного при наведении 
  const mainFoto = document.querySelector('.main-foto');
  document.addEventListener("mouseover", function (e) {
    if (e.target.closest('.foto')) {
      mainFoto.src = e.target.src;
    }
  });
  // вывод фото как главного при наведении конец 
}

export default Gallery;
