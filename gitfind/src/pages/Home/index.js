import {Header} from '../../components/Header';
import backgroud from '../../asssets/background.png';
import './styles.css';
import perfil from '../../asssets/perfil.png'
function App() {
  return (
    <div className="App">
     <Header/>
     <div className='conteudo'>
      <img src={backgroud} className='background' alt='backgroud img'/>  
        <div className='info'>
          <div>
            <input name='usuario' placeholder='@username'/>
            <button>Buscar</button>
          </div>
          <div className='perfil'>
            <img src={perfil} className="profile"/>
            <div>
              <h3>
                Eduardo Alves Casarotti
              </h3>
              <span>@EduardoCasarotti</span>
              <p>
                Técnico em Desenvolvimento de Sistemas
                <br/> 
                Futuro desenvedor Front-end, 26 anos, São Paulo.
              </p>
            </div>
          </div>
          <hr/>
        </div>
     </div>
    </div>
  );
}

export default App;
