import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home'

function App() {
  const name = "Feisbrut";
  const nav = [
    { link: "/home", label: "Home"},
    { link: "/friends", label: "Friends"},
    { link: "/messages", label: "Messages"}
  ];

  return (
    <div>
      <Header name={name} links={nav} />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
