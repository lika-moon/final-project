import './header.css'

function Header() {
  return (
    <header class="menu">
      <a class="link" href="/"><p id="#page1" class="text-menu">ГЛАВНАЯ</p>
      </a>
      <a class="link" href="/portfolio"><p id="#page2" class="text-menu">ПОРТФОЛИО</p>
      </a>
      <a class="link" href="/gallery"><p id="#page3" class="text-menu">ГАЛЕРЕЯ</p>
      </a>
      <a class="link" href="/contacts"> <p id="#page4" class="text-menu">КОНТАКТЫ</p>
      </a>
    </header>
  )
}

export default Header;
