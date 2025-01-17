import PropTypes from "prop-types";

const Layout = ({ children }) => {
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <div className="flex flex-col items-center bg-[#EDEDED] min-h-screen ">
      {/* Contenido principal */}
      <main className="flex flex-col flex-grow w-full items-center">
        {children}
      </main>

      {/* Footer */}
      <footer className="flex flex-col bg-white text-black/50 py-4 text-center w-full ">
        <p>© 2025 Bogotá, Colombia.</p>
        <p>Made by José Salopaso</p>
      </footer>
    </div>
  );
};

export default Layout;
