
import { useState } from "react";
import { Header } from "../../components/Header";
import backgroud from "../../asssets/background.png";
import "./styles.css";
import perfil from "../../asssets/perfil.png";
import ItemList from "../../components/itemList";
function App() {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] =useState(null);

  const handleGetData = async () => {

    const userData = await fetch(`http://api.github.com/users/${user}`);
    const newUser =  await userData.json();
    
    console.log(newUser);
    if (newUser.name){
      const{avtar_url, name, bio} = newUser;
      setCurrentUser({avtar_url, name, bio});

      const reposData = await fetch(`http://api.github.com/users/${user}/repos`);
      const newRepos =  await reposData.json();

      if(newRepos.length){
        setRepos(newRepos)
      }
    }

  }
  
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={backgroud} className="background" alt="backgroud img" />
        <div className="info">
          <div>
            <input name="usuario" value={user} onChange={event =>setUser(event.target.value)} placeholder="@username" />
            <button onClick={handleGetData}>Buscar</button>
          </div>
          {currentUser.name ? (
            <div className="perfil">
            <img src={perfil} className="profile" />
            <div>
              <h3>Eduardo Alves Casarotti</h3>
              <span>@EduardoCasarotti</span>
              <p>
                Técnico em Desenvolvimento de Sistemas
                <br />
                Futuro desenvedor Front-end, 26 anos, São Paulo.
              </p>
            </div>
          </div>
          ) : null}
          
          
          <hr />
          <div className=''>
            <h4 className="repositorio">Repositórios</h4>
            <ItemList title='teste1' description='teste de desicrição'/>
            <ItemList title='teste1' description='teste de desicrição'/>
            <ItemList title='teste1' description='teste de desicrição'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
