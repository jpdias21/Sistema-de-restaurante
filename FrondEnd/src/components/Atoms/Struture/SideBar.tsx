import {
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
  HamburgerIcon,
} from '@chakra-ui/icons';

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react';
// SidebarMenu.tsx
import { useNavigate } from 'react-router-dom';

function SidebarMenu() {
 
  const navigate = useNavigate();

  return (
    <div className='sideBar'>
     <Menu>
  <MenuButton
    as={IconButton}
    aria-label='Menu'
    icon={<HamburgerIcon />}
    variant='outline'
    bg="#f8dadaff"
  />
  <MenuList bg="#2d2d2d">
    <MenuItem bg="#2d2d2d" icon={<AddIcon />} command='⌘H' onClick={() => navigate('/Dashboard')}>
      Home
    </MenuItem>
    <MenuItem bg="#2d2d2d" icon={<ExternalLinkIcon />} command='⌘R' onClick={() => navigate('/Restaurant')}>
      Restaurante
    </MenuItem>
    <MenuItem bg="#2d2d2d" icon={<EditIcon />} command='⌘M' onClick={() => navigate('/Menu')}>
      Cardápio
    </MenuItem>
    <MenuItem bg="#2d2d2d" icon={<RepeatIcon />} command='⌘Q' onClick={() => navigate('/GoOut')}>
      Sair
    </MenuItem>
  </MenuList>
</Menu>

    </div>
  );
}

export default SidebarMenu;
