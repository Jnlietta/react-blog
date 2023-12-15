import { Routes, Route } from 'react-router-dom';
import AddPost from './components/pages/AddPost/AddPost';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import EditPost from './components/pages/EditPost/EditPost';
import NotFound from './components/pages/NotFound/NotFound';
import Post from './components/pages/Post/Post';


const App = () => {
  return (
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/post/add" element={<AddPost />} />
          <Route path="/post/edit/:id" element={<EditPost />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
