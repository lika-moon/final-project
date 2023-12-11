import './gallery.css';
import pic1 from '../img/pic1.jpg';
import pic2 from '../img/pic2.jpg';
import pic3 from '../img/pic3.jpg';
import pic4 from '../img/pic4.jpg';
import pic5 from '../img/pic5.jpg';
import pic6 from '../img/pic6.jpg';
import pic7 from '../img/pic7.jpg';
import pic8 from '../img/pic8.jpg';


function Gallery() {

  return (
    <>
      <div class="my-work">
        <a class="link" href="https://github.com/lika-moon">
          <p> Ознакомиться с моими работами можно на github </p>
          <p> и по ссылкам на фото</p>
        </a>
      </div>
      <div className='conteiner'>

        <div className="picture">
          <a href='https://www.figma.com/proto/ipytxYg1modgDyiCBVz3qr/%D0%9F%D1%80%D0%BE%D1%82%D0%BE%D1%82%D0%B8%D0%BF-%D1%81%D0%B0%D0%B9%D1%82%D0%B0?type=design&node-id=68-171&t=tgyqVrjqETePIRsm-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=68%3A171&show-proto-sidebar=1&mode=design'>
            <img className="image scale" src={pic1} alt="pic" />
          </a>
          <a href='https://www.figma.com/proto/ipytxYg1modgDyiCBVz3qr/%D0%9F%D1%80%D0%BE%D1%82%D0%BE%D1%82%D0%B8%D0%BF-%D1%81%D0%B0%D0%B9%D1%82%D0%B0?type=design&node-id=68-171&t=tgyqVrjqETePIRsm-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=68%3A171&show-proto-sidebar=1&mode=design'>
            <img className="image scale" src={pic2} alt="pic" />
          </a>
          <img className="image scale" src={pic3} alt="pic" />
          <img className="image scale" src={pic4} alt="pic" />
          <a href='https://u2337786.trial.reg.site/'>
            <img className="image scale" src={pic5} alt="pic" />
          </a>
          <a href='https://u2337786.trial.reg.site/'>
            <img className="image scale" src={pic6} alt="pic" />
          </a>
          <a href='https://u2337786.trial.reg.site/'>
            <img className="image scale" src={pic7} alt="pic" />
          </a>
          <img className="image scale" src={pic8} alt="pic" />

        </div>
      </div>
    </>
  )
}

export default Gallery;
