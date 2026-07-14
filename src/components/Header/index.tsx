import { Menu, LinkItem, Links } from './styles'
import logo from '../../assets/images/logo.svg'

const Header = () => (
  <>
    <Menu>
      <img src={logo} alt="EPLAY" />
      <nav>
        <Links>
          <LinkItem>
            <a href="#">Categorias</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Novidades</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Promoções</a>
          </LinkItem>
        </Links>
      </nav>
    </Menu>
  </>
)

export default Header
