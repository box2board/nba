import "./globals.css";

export const metadata = {
  title: "Box2Board — NBA",
  description: "Live lines, props, and analytics.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="shell">
          <header className="header">
            <div className="brand">
              <span className="logo">🏀</span>
              <div>
                <div className="title">Box2Board — NBA</div>
                <div className="subtitle">Live lines, props, and analytics.</div>
              </div>
            </div>

            <nav className="nav">
              <a className="navLink" href="/">Dashboard</a>
              <a className="navLink" href="#lines">Today’s Lines</a>
              <a className="navLink" href="#ratings">Ratings</a>
            </nav>
          </header>

          <main className="main">{children}</main>

          <footer className="footer">
            <span>© {new Date().getFullYear()} Box2Board</span>
            <span className="muted">Data + ratings are informational only.</span>
          </footer>
        </div>
      </body>
    </html>
  );
}
