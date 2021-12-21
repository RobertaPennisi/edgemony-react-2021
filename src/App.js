import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home'
import { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import NewPost from './pages/NewPost';

const INIT_STATE = {
  name: "Feisbrut",
  nav: [
    { link: "/", label: "Home"},
    { link: "/new-post", label: "Create New Post"},
    { link: "/friends", label: "Friends"},
    { link: "/messages", label: "Messages"},
  ],
  friendsPreview: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'change-name':
      return {...state, name: 'Feisbell'}
  
    default:
      return state;
  }
};

function App() {
  // const name = "Feisbrut";
  // const nav = [
  //   { link: "/", label: "Home"},
  //   { link: "/friends", label: "Friends"},
  //   { link: "/messages", label: "Messages"}
  // ];

  const[state, dispatch] = useReducer(reducer, INIT_STATE);

  return (
    <div>
      <Header name={state.name} links={state.nav} />
      <button onClick={() => dispatch({type: "change-name"})}>
        Cambia Nome
      </button>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/new-post" element={<NewPost/>} />
        {/* <Route path="/new-post" element={<CreatePost />} /> */}
        <Route path="/friends" element={<h3>Friends</h3>} />
        <Route path="/messages" element={<h3>Messages</h3>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
