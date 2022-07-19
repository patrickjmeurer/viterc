import reactLogo from '@/Assets/react.svg';
import viteLogo from '@/Assets/vite.svg';

function Header() {
  return (
    <>
      <div id="logos">
        <img src={viteLogo} className="logo" data-testid="vite-logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" data-testid="react-logo" alt="React logo" />
      </div>
      <h2>Vite + React + TypeScript + Eslint (Airbnb) + Eslint + Jest + Testing Library = ViteRC❤️‍🔥</h2>
    </>
  );
}

export default Header;
