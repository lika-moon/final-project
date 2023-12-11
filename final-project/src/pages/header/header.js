import './header.css'

function Header() {
  return (
    <header class="menu">
      <a class="link" href="/"><p id="#page1" class="text-menu">Главная</p>
      </a>
      <a class="link" href="/portfolio"><p id="#page2" class="text-menu">Портфолио</p>
      </a>
      <a class="link" href="/gallery"><p id="#page3" class="text-menu">Галерея</p>
      </a>
      <a class="link" href="/contacts"> <p id="#page4" class="text-menu">Контакты</p>
      </a>
    </header>
  )
}

export default Header;
