import "./App.css"
import CardProfile from "./components/ComponentProfile"

function App() {
  return (
    <div className="app">
      <CardProfile
        urlImage="https://img.freepik.com/vetores-premium/icone-de-perfil-de-usuario-em-estilo-plano-ilustracao-em-vetor-avatar-membro-em-fundo-isolado-conceito-de-negocio-de-sinal-de-permissao-humana_157943-15752.jpg"
        name="Brayan Pereira da Silva"
        info1= "Dev Fullstack in Javascript"
        info2= "+5541992624356"
        info3= "bp410794@gmail.com"
      />
      
    </div>

  )

}

export default App
