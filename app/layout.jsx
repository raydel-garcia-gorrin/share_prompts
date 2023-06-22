import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Promptopia2",
  secription: "Descubrir y compartir avisos de IA",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="es">
      <body>
        <Provider>
          <div className="main">
            <div className="gradiant" />
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
