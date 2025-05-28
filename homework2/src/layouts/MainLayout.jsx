export const Layout = ({ children }) => {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Рестораны города</h1>
      </header>

      <main className="main-content">{children}</main>

      <footer className="footer"></footer>
    </div>
  );
};
