import { useRef, useState } from 'react'
import type { ChangeEvent } from 'react'
import texturaAzul from './assets/textura-azul.svg'
import texturaBege from './assets/texture-bege.svg'
import logo from "./assets/logo.svg"

import './App.css'

type Tema = 'azul' | 'claro'

function App() {
  const [tema, setTema] = useState<Tema>('azul')

  const textura = tema === 'azul' ? texturaAzul : texturaBege
  const [fotoUrl, setFotoUrl] = useState('')
  const [erroFoto, setErroFoto] = useState('')
  const inputFotoRef = useRef<HTMLInputElement>(null)
  const fotoUrlRef = useRef<string | null>(null)

  const limparFoto = (mensagem = '') => {
    if (fotoUrlRef.current) {
      URL.revokeObjectURL(fotoUrlRef.current)
      fotoUrlRef.current = null
    }

    setFotoUrl('')
    setErroFoto(mensagem)
  }

  function selecionarFoto(event: ChangeEvent<HTMLInputElement>) {
    const arquivo = event.target.files?.[0]

    // Permite selecionar novamente o mesmo arquivo.
    event.target.value = ''

    if (!arquivo) {
      limparFoto('')
      return
    }

    if (!['image/jpeg', 'image/png', 'image/webp'].includes(arquivo.type)) {
      setErroFoto('Selecione uma imagem JPG, PNG ou WebP.')
      return
    }

    if (arquivo.size > 20 * 1024 * 1024) {
      setErroFoto('Escolha uma imagem de até 20 MB.')
      return
    }

    if (fotoUrlRef.current) {
      URL.revokeObjectURL(fotoUrlRef.current)
    }

    const url = URL.createObjectURL(arquivo)
    fotoUrlRef.current = url

    setErroFoto('')
    setFotoUrl(url)
  }
  return (
    <main className="gerador">
      <header className="cabecalho">
        <a className="marca" href="./" aria-label="UFT Parte de Mim — início">
          <img src={logo} alt="Parte de Mim" className='logo'/>
        </a>

        <span className="selo">Protótipo de aprendizado</span>
      </header>

      <div className="editor">
        <section className="painel" aria-labelledby="titulo">
          <p className="sobretitulo">Sua foto, seu pertencimento</p>

          <h1 id="card-titulo">Você faz parte desta história.</h1>

          <p className="introducao">
            Personalize seu card com a identidade da campanha
            UFT Parte de Mim.
          </p>

          <fieldset className="opcoes">
            <legend>1. Escolha o fundo</legend>

            <div className="temas">
              <button
                type="button"
                className="opcao-tema"
                aria-pressed={tema === 'azul'}
                onClick={() => setTema('azul')}
              >
                <span className="amostra amostra-azul" aria-hidden="true" />
                Azul
              </button>

              <button
                type="button"
                className="opcao-tema"
                aria-pressed={tema === 'claro'}
                onClick={() => setTema('claro')}
              >
                <span className="amostra amostra-clara" aria-hidden="true" />
                Claro
              </button>
            </div>
          </fieldset>

          <div className="etapa">
  <h2>2. Adicione sua foto</h2>
  <p id="foto-instrucoes">Use uma imagem JPG, PNG ou WebP de até 20 MB.</p>

  <input
    ref={inputFotoRef}
    type="file"
    accept="image/jpeg,image/png,image/webp"
    onChange={selecionarFoto}
    aria-label="Selecionar foto"
    hidden
  />

  <button
    type="button"
    className="botao botao-secundario"
    aria-describedby="foto-instrucoes"
    onClick={() => inputFotoRef.current?.click()}
  >
    {fotoUrl ? 'Trocar foto' : 'Selecionar foto'}
  </button>

  {erroFoto && (
    <p className="erro-foto" role="alert">
      {erroFoto}
    </p>
  )}
</div>

          <button type="button" className="botao botao-primario" disabled>
            Baixar meu card
          </button>

          <p className="nota">
            Nesta primeira etapa, você já pode testar as cores e o layout.
          </p>
        </section>

        <section className="area-previa" aria-labelledby="titulo-previa">
          <div className="previa-cabecalho">
            <h2 id="titulo-previa">Prévia do seu card</h2>
            <span>1080 × 1440 px</span>
          </div>

          <div
            className={`card card--${tema}`}
            style={{ backgroundImage: `url("${textura}")` }}
          >
            <div className="card-titulo">
              <span>UFT</span>
              <strong>Parte de Mim</strong>
            </div>

            <div className={`foto-placeholder${fotoUrl ? ' tem-foto' : ''}`}>
  {fotoUrl ? (
    <img
      src={fotoUrl}
      alt="Sua foto na composição do card"
      className="foto-usuario"
      draggable={false}
      onError={() => {
        limparFoto('Não foi possível abrir esta imagem. Tente outra foto.')
      }}
    />
  ) : (
    <span>Sua foto aqui</span>
  )}
</div>

            <p className="card-frase">
              Eu faço parte.
              <br />
              Eu me cuido.
            </p>
          </div>

          <p className="previa-nota">
            Composição provisória para testar a interface.
          </p>
        </section>
      </div>
    </main>
  )
}

export default App