// SidebarMenu.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SidebarMenu() {
  const [isOpen, setIsOpen] = useState(false); // controla se o menu está aberto
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen); // abre/fecha o menu
  };

  const handleNavigation = (path: string) => {
    navigate(path); // navega para a página
    setIsOpen(false); // fecha o menu após clique
  };

  return (
    <div>
      {/* Ícone do menu (hambúrguer) */}
      <button onClick={toggleMenu}>☰</button>

      {/* Menu lateral visível apenas se isOpen for true */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '200px',
          height: '100vh',
          background: '#111111',
          padding: '1rem',
          zIndex: 1000
        }}>
          <p onClick={() => handleNavigation('/Dashboard')}>🏠 Home</p>
          <p onClick={() => handleNavigation('/restaurant')}>🍽 Restaurantes</p>
          <p onClick={() => handleNavigation('/GoOut')}>🚪 Sair</p>
        </div>
      )}
    </div>
  );
}

export default SidebarMenu;
