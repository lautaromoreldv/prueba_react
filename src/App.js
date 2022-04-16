
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './componentes/Inicio';
import Adopcion from './componentes/Adopcion';
import Busqueda from './componentes/Busqueda';
import Contacto from './componentes/Contacto';
import Navegacion from './componentes/Navegacion'

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route path='/' 		element={ <Inicio /> }    ></Route>
					<Route path='/Inicio'   element={ <Inicio /> }    ></Route>
					<Route path='/Adopcion' element={ <Adopcion /> }  ></Route>
					<Route path='/Busqueda' element={ <Busqueda /> }  ></Route>
					<Route path='/Contacto' element={ <Contacto /> }  ></Route>
					<Route path='*' 		element= { <h1>404</h1> } ></Route>
				</Routes>
				<Navegacion />
			</div>
		</BrowserRouter>
  	);
}

export default App;