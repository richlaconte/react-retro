import Button from '../../Components/Button';
import List from '../../Components/List';
import ListItem from '../../Components/ListItem';
import Dashboard from '../../Components/Dashboard';
import { Outlet, useNavigate, Link, useLocation } from 'react-router-dom';

import logo from '../../assets/reactRetroLogo.png'

const index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  console.log(pathname)

  const sidebarContent = (
    <List>
      <ListItem title="Overview" onClick={() => navigate('/design')} selected={pathname === '/design'} />
      <ListItem title="Accordion" onClick={() => navigate('/design/accordion')} selected={pathname === '/design/accordion'} />
      <ListItem title="Alert" onClick={() => navigate('/design/alert')} selected={pathname === '/design/alert'} />
      <ListItem title="Autocomplete" onClick={() => navigate('/design/autocomplete')} selected={pathname === '/design/autocomplete'} />
      <ListItem title="Avatar" onClick={() => navigate('/design/avatar')} selected={pathname === '/design/avatar'} />
      <ListItem title="Avatar Group" onClick={() => navigate('/design/avatargroup')} selected={pathname === '/design/avatargroup'} />
      <ListItem title="Badge" onClick={() => navigate('/design/badge')} selected={pathname === '/design/badge'} />
      <ListItem title="Button" onClick={() => navigate('/design/button')} selected={pathname === '/design/button'} />
      <ListItem title="Card" onClick={() => navigate('/design/card')} selected={pathname === '/design/card'} />
      <ListItem title="Carousel" onClick={() => navigate('/design/carousel')} selected={pathname === '/design/carousel'} />
      <ListItem title="Checkbox" onClick={() => navigate('/design/checkbox')} selected={pathname === '/design/checkbox'} />
      <ListItem title="Chip" onClick={() => navigate('/design/chip')} selected={pathname === '/design/chip'} />
      <ListItem title="Code" onClick={() => navigate('/design/code')} selected={pathname === '/design/code'} />
      <ListItem title="Icon Button" onClick={() => navigate('/design/iconbutton')} selected={pathname === '/design/iconbutton'} />
      <ListItem title="List" onClick={() => navigate('/design/list')} selected={pathname === '/design/list'} />
      <ListItem title="Menu" onClick={() => navigate('/design/menu')} selected={pathname === '/design/menu'} />
      <ListItem title="Modal" onClick={() => navigate('/design/modal')} selected={pathname === '/design/modal'} />
      <ListItem title="Popover" onClick={() => navigate('/design/popover')} selected={pathname === '/design/popover'} />
      <ListItem title="Progress" onClick={() => navigate('/design/progress')} selected={pathname === '/design/progress'} />
      <ListItem title="Radio Group" onClick={() => navigate('/design/radiogroup')} selected={pathname === '/design/radiogroup'} />
      <ListItem title="Rating" onClick={() => navigate('/design/rating')} selected={pathname === '/design/rating'} />
      <ListItem title="Select" onClick={() => navigate('/design/select')} selected={pathname === '/design/select'}/>
      <ListItem title="Slider" onClick={() => navigate('/design/slider')} selected={pathname === '/design/slider'}/>
      <ListItem title="Switch" onClick={() => navigate('/design/switch')} selected={pathname === '/design/switch'}/>
      <ListItem title="Skeleton" onClick={() => navigate('/design/skeleton')} selected={pathname === '/design/skeleton'}/>
      <ListItem title="Stepper" onClick={() => navigate('/design/stepper')} selected={pathname === '/design/stepper'}/>
      <ListItem title="Tabs" onClick={() => navigate('/design/tabs')} selected={pathname === '/design/tabs'}/>
      <ListItem title="Text Field" onClick={() => navigate('/design/textfield')} selected={pathname === '/design/textfield'}/>
      <ListItem title="Tooltip" onClick={() => navigate('/design/tooltip')} selected={pathname === '/design/tooltip'}/>
      <ListItem title="Toggle Button" onClick={() => navigate('/design/togglebutton')} selected={pathname === '/design/togglebutton'} />
    </List>
  );

  const navbarContent = (
    <>
      <Link to="/" className="navbar-item">
        Home
      </Link>
      <Link to="/design" className="navbar-item">
        Components
      </Link>
      <Button variant='secondary' >Sign In</Button>
    </>
  );

  return (
    <Dashboard
      sidebarContent={sidebarContent}
      navbarContent={navbarContent}
      navbarLogo={<img src={logo} />}
    >
      <Outlet />
    </Dashboard>
  )
}

export default index