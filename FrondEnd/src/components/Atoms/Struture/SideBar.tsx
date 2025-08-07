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

  const Dashboard = () => {
    navigate('/Dashboard')
    setIsOpen(false);
  }

  const Restaurant = () => {
    navigate('/Restaurant')
    setIsOpen(false);
  }

    const GoOut = () => {
    navigate('/GoOut')
    setIsOpen(false);
  }
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
          <p onClick={Dashboard}>🏠 Home</p>
          <p onClick={Restaurant}>🍽 Restaurantes</p>
          <p onClick={() => handleNavigation('/Menu')}>📋 Cardapio</p>
          <p onClick={GoOut}>🚪 Sair</p>
        </div>
      )}
    </div>
  );
}

export default SidebarMenu;
