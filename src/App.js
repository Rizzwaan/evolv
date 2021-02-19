import './App.css';
import Box from '@material-ui/core/Box';
import HomePage from './pages/home-page/home-page.component';
import BlogPage from './pages/blog-page/blog-page.component';
import AskPage from './pages/ask-page/ask-page.component';
import { Switch, Route, } from 'react-router-dom'

const Header = () => <h1>header</h1>

const Footer = () => <h1>footer</h1>

function App() {
  return (
    <Box component='div'>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/blog">
          <BlogPage />
        </Route>
        <Route path="/ask">
          <AskPage />
        </Route>
        <Route component={() => <h1>404</h1>}></Route>
      </Switch>
      <Footer />
    </Box>
  );
}

export default App;
