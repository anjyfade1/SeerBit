import {Routes, Route} from 'react-router-dom';
import Layout from './component/Layout/Layout';
import FifthCart from './pages/FifthCart';
import FifthStore from './pages/FifthStore';

function App() {
  return (
    <Layout>

     <Routes>
       <Route path='/' element ={<FifthStore/>} />
       <Route path='/cart' element = {<FifthCart/>} />
     </Routes>
     
    </Layout>
  );
}

export default App;
