# UFT Parte de Mim — Gerador de Cards

Protótipo de uma ferramenta para personalizar cards da campanha
**UFT Parte de Mim**, escolhendo um fundo e adicionando uma foto.

Projeto desenvolvido para aprendizado com React, TypeScript e Vite.
Não constitui uma página oficial ou um serviço institucional da UFT.

## Funcionalidades

Implementadas:

- Escolha entre fundo azul e claro.
- Seleção de fotos em JPG, PNG ou WebP, de até 20 MB.
- Prévia da foto com recorte circular.
- Troca da foto mantendo o tema selecionado.
- Layout responsivo.
- Composição vertical na proporção 3:4.

Em desenvolvimento:

- Ajustes de posição e zoom da foto.
- Aplicação da moldura final da campanha.
- Download do card em PNG, com 1080 × 1440 pixels.

O botão de download permanece desabilitado nesta etapa.

## Tecnologias

- React
- TypeScript
- Vite
- CSS
- Libre Baskerville, carregada pelo Google Fonts

## Executar localmente

Com Node.js e npm instalados, execute na pasta do projeto:

    npm install
    npm run dev

Abra no navegador o endereço informado pelo Vite.

Para gerar a versão de produção:

    npm run build

Para visualizar essa versão localmente:

    npm run preview

## Organização

| Arquivo ou pasta | Responsabilidade |
|---|---|
| `src/App.tsx` | Interface, escolha do tema e seleção da foto |
| `src/App.css` | Estilos globais, paleta e layout responsivo |
| `src/assets/` | Logo, texturas e demais elementos visuais |
| `src/main.tsx` | Inicialização da aplicação |
| `index.html` | Documento HTML e carregamento da fonte |

## Identidade visual

As cores estão centralizadas em variáveis no `App.css`:

| Variável | Cor | Uso |
|---|---|---|
| `--azul-campanha` | `#3D74B6` | Fundo azul e controles |
| `--azul-escuro` | `#2C5F9C` | Títulos e detalhes |
| `--amarelo` | `#FFD166` | Botão principal |
| `--amarelo-forte` | `#FFB511` | Estado hover do botão principal |
| `--bege` | `#FBF6DF` | Fundo claro e superfícies |
| `--papel` | `#FDFCF7` | Fundo da página |

Libre Baskerville é usada nos títulos e textos editoriais.
Arial é usada nos controles e instruções.

As cores incorporadas aos arquivos SVG devem ser alteradas
nos próprios arquivos.

## Fotos e privacidade

A foto selecionada é acessada localmente pelo navegador por meio
de uma URL temporária, criada com `URL.createObjectURL`.

A aplicação não envia a foto para um servidor e não implementa
armazenamento persistente. Ao recarregar ou fechar a página,
a seleção é perdida.

O carregamento da fonte utiliza uma conexão com o Google Fonts.
Isso não envolve o envio da foto.

## Limitações atuais

- A composição e o recorte circular são provisórios.
- O fundo original da foto é preservado; não há remoção de fundo.
- Ainda não é possível ajustar o enquadramento ou exportar o card.
- A prévia usa a proporção da arte final, mas é exibida em tamanho
  adaptado à tela.

## Autoria

Desenvolvido por Felipe Leite como projeto de aprendizado.

A identidade visual da campanha e as marcas institucionais
não representam autorização para publicação ou uso oficial
deste protótipo.