import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"

export const metadata = {
  title: "Meu Shop.com",
  description: "E-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Shop -- ptac </title>
      </head>
      <body style={{padding: 0, margin: 0, fontFamily: "sans-serif"}}>
        <Header />
        <Main />
        {children}
        <Footer />
      </body>
    </html>
  );
}
