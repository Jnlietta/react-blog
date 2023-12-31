import { Routes, Route } from 'react-router-dom';
import AddPost from './components/pages/AddPost/AddPost';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import EditPost from './components/pages/EditPost/EditPost';
import NotFound from './components/pages/NotFound/NotFound';
import Post from './components/features/Post/Post';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import { Container } from 'react-bootstrap';
import Categories from './components/pages/Categories/Categories';
import Category from './components/features/Category/Category';

const App = () => {
  return (
    <Container>
      <Header />
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/post/add" element={<AddPost />} />
            <Route path="/post/edit/:id" element={<EditPost />} />
            <Route path="/about" element={<About />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/category/:name" element={<Category />} />
            <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
};

export default App;
