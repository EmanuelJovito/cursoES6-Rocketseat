// Funão delay aciona o .then após 1s

/* const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));

async function umPorSegundo() {
  const segundos1 =  await delay().then(() => {
    console.log('1s')
  })
  const segundos2 = await delay().then(() => {
    console.log('2s')
  })
  const segundos3 = await delay().then(() => {
    console.log('3s');
  })
}

umPorSegundo(); */

// ATIVIDADE 2

/* import axios from "axios";

class Api {
  static async getUserFromGithub(user) {
    try {
      const response = await axios.get(`https://api.github.com/users/${user}`);

      console.log(response);
    } catch (err) {
      console.warn("Usuário não existe");
    }
  }
}

Api.getUserFromGithub("diego3g124123");
Api.getUserFromGithub("diego3g"); */

// ATIVIDADE 3

/* import axios from "axios"

 class Github {
  static async getRepositories(repo) {
    try {
      const response = await axios
        .get(`https://api.github.com/repos/${repo}`)
        
          console.log(response);
        }catch(err) {
          console.log("Repositório não existe");
        };
    }
  }

Github.getRepositories("rocketseat/rocketseat.com.br");
Github.getRepositories("rocketseat/dslkvmskv"); */

// ATIVIDADE 4

 import axios from "axios"

class Api {
  static async buscaUsuario(usuario) {
    try {
        const response = await axios.get(`https://api.github.com/users/${usuario}`)
        console.log(response);
        }catch(err) {
          console.log("Usuário não existe");
        };
    }
  }

Api.buscaUsuario("EmanuelJovito"); 
