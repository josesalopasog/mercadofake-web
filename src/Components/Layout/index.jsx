import PropTypes from "prop-types";

const Layout = ({ children }) => {
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <div className="flex flex-col items-center bg-[#EDEDED]  h-[100vh]">
      {/* Contenido principal */}
      <main className="flex flex-col h-[100%] w-[100%] items-center">
        {children}
      </main>

      {/* Footer */}
      <footer className="flex flex-col bg-white text-black/50 py-4 text-center w-[100%] ">
        <p>© 2025 Bogotá, Colombia.</p>
        <p>Made by José Salopaso</p>
      </footer>
    </div>
  );
};

export default Layout;
