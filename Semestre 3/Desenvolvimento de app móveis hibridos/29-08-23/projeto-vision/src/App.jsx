import { Header } from "./components/Header"

import "./App.css";

function App() {
  return (
    <div className="container">
      <Header title="Projeto Vision do Renan"/>

      <h1>Conteudo do projeto vision</h1>

      <main>
        <section>
          <img src="https://fastly.picsum.photos/id/1002/300/300.jpg?hmac=BoX0yYHGnuaryVR22pkiNUrVS3oOMU1nL4i3bObV6A4" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus architecto vitae cupiditate recusandae hic quis, aspernatur quibusdam modi similique id repudiandae. Veritatis consectetur aliquid earum impedit enim repellendus iure magnam?
          </p>
        </section>

        <section>
          <h1>Lista de Projetos</h1>
        </section>
      </main>

    </div>

  )
}

export default App
