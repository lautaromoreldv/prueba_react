import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Inicio from './componentes/Inicio';
import Adopcion from './componentes/Adopcion';
import Busqueda from './componentes/Busqueda';
import Contacto from './componentes/Contacto';
import Navbar from './componentes/Navbar'

export default function App() {
	return (
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' 		element={ <Inicio /> }    ></Route>
					<Route path='/inicio'   element={ <Inicio /> }    ></Route>
					<Route path='/adopcion' element={ <Adopcion /> }  ></Route>
					<Route path='/busqueda' element={ <Busqueda /> }  ></Route>
					<Route path='/contacto' element={ <Contacto /> }  ></Route>
					<Route path='*' 		element={ <Inicio /> } 	  ></Route>
				</Routes>
			</Router>
  	);
};
