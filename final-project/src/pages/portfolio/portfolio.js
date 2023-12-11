import './portfolio.css';
import avatar from '../img/avatar.jpg';

function Portfolio() {
    return (

        <div className="titles">
            <p>
                <img className="foto" src={avatar} alt="pik" />

            </p>
            <div className='about-me'>
                <p>
                    <h1 className="name"> ЕЛЕНА УСОВА </h1>
                </p>
                <p>
                    <h4 className="about">
                        Мне 37 лет. Долгое время работала в сфере продаж. В 2023 году решила поменять сферу деятельности и обучилась на курсах Веб-разработчика. Получила все необходимые базовые компетенции для работы: JavaScript, Git, HTML5, CSS3, Figma.
                    </h4>
                </p>

            </div>
            <div className='my-skils'>

                <p>
                    <h3 className="skills">
                        Мои навыки
                    </h3>
                </p>
                <p class="my-skills">
                    <li className="skils1"> Создание страниц сайта с использованием JavaScript</li>
                    <li className="skils2"> Разработка сайта с использованием языка разметки HTML5 и стилей CSS3</li>
                    <li className="skils3"> Создание одностраничного сайта с блоками в конcтрукторе Wordpress</li>
                    <li className="skils4"> Создание макетов страниц сайта с формой обратной связи (Figma)</li>
                    <li className="skils5"> Умение работать с Git </li>
                </p>
            </div>
        </div>



    )
}

export default Portfolio;
