<h1 align='center'>Front End Challenge - 7 edição (Alura) <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Flexed%20Biceps%20Light%20Skin%20Tone.png" alt="Flexed Biceps Light Skin Tone" width="30" /> </h1>
<p> Desafio proposto pela alura para que os alunos consigam realizar o desenvolvimento de uma página a partir de um figma. Embora possa tirar dúvidas com os instrutores e colegas (via discord) a ideia é que o estudante consiga desenvolver uma aplicação do zero com base apenas em um desing feito pela Alura.</p>

<h2 align="center"> Meteora  <img src='src/assets/Favicon-48x.png' width='25'/></h2>

<p>Bem vindos a Meteora! Meteora é um site fictício de venda de roupas. Através desse site, você pode ver o acervo de produtos que está armazenado em um banco de dados (supabase - postgreSQL) e filtrar esses produtos de acordo com a categoria a qual ele pertence ou pelo seu nome.</p>

Figma do projeto: <a href='https://www.figma.com/file/2TLgt8UjsWUViWlmpXu5Fz/Challenge-Front-end-%7C-Loja-Meteora?type=design&node-id=2386-2430&mode=design&t=LY8nUVqjpWGqaxun-0'>lembre-se de abrir em uma nova aba!</a>

Link do projeto: <a href='https://front-end-challenge-alura-7-edition.vercel.app/'>lembre-se de abrir em uma nova aba!</a>

<h4 align="center"> 🚧 ...Projeto em desenvolvimento... 🚧</h4>
<p>Embora já tenha feito todas as etapas mandatórias do desafio, como ainda tenho bastate tempo, planjeo implementar uma página de admin, que permitirá a inserção, edição e deleção de novos produtos na página.</p>

### Objetivos da semana 1 <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Bullseye.png" alt="Bullseye" width="25" height="25" />
  
- [x] Cabeçalho contendo: Logo da marca; Links (home, nossas lojas, novidades e promoções); Campo de pesquisa; Botão para buscar.
- [x] Responsividade* do Cabeçalho
- [x] Banner contendo as imagens da página
- [x] Seção "Busque por categorias" contendo: Titulo: “Busque por categoria”; Cards de produtos: com foto e nome da categoria.
- [x] Seção "Produtos" contendo: Título: “Produtos que estão bombando”; Cards dos produtos: com foto, título, descrição, valor e botão “Ver mais”.
- [x] Seção "Facilidades" contendo: 'Pague pelo pix'; 'Troca grátis'; 'Sustentabilidade'.
- [x] Responsividade* para todas as sessões

### Objetivos da semana 2 <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Bullseye.png" alt="Bullseye" width="25" height="25" />

- [x] Rodapé - Neste momento, precisamos desenvolver o rodapé da página. Ele é localizado ao final da página, possui um fundo preto e exibe o seguinte texto: "2023 © Desenvolvido por Caio Mognatti e desenhado pela Alura | Projeto fictício sem fins comerciais." *Pequena alteração para mostrar o meu nome em conjunto com o da alura
- [x] Cadastro na Newsletter - A empresa Meteora também tem uma newsletter, com objetivo de divulgar e reter clientes. Precisamos desenvolver o componente dessa newsletter que contém: Texto: “Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? Cadastre-se!”; Campo de digitação para e-mail; Botão de envio.
- [x] Carrossel: Precisamos criar uma experiência visual atraente e envolvente para os visitantes da página da empresa Meteora. Por isso, vamos aplicar um Carrossel no banner principal da página!
- [x] Modal - Produtos: Ao clicar em qualquer produto da página, um modal será aberto. Nesse modal, teremos: Cabeçalho com a frase “Confira detalhes sobre o produto” e um ícone de fechar (X). Foto do produto; Nome do produto; Descrição do produto; Valor; Observação de vendido e entregue por “…”; Opções de cores; Opções de tamanho; Botão de adicionar a sacola.
- [x]  Modal - Produtos - Responsividade*
- [x]  Modal - Newsletter: Na newsletter, quando a pessoa cadastrar o e-mail, um Modal deverá ser aberto. Esse modal deve conter: Um cabeçalho com a frase “E-mail cadastrado com sucesso!” e um ícone de fechar (X); Um texto informando “Em breve você receberá novidades exclusivas da Meteora.”.

### Objetivos da semana 3 e 4 <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Bullseye.png" alt="Bullseye" width="25" height="25" />

- [x] Galeria de Produtos - Listagem via API: agora devemos pegar a lista de produtos dinâmicamente!
- [x] Galeria de Produtos - Filtrar por categoria: ao listar os produtos de forma dinâmica, podemos trabalhar no resultado que essa API retornou: vamos filtrar o que aparece na lista de produtos, de acordo com a categoria selecionada
- [x] Galeria de Produtos - Filtrar por barra de pesquisa: Além de filtrar por categoria, também precisamos implementar a funcionalidade de filtrar por nome do produto através da barra de pesquisa presente no cabeçalho.
- [x] Modal de Produtos - Abrir / Fechar: O modal que criamos deve permitir duas funcionalidades: Ao clicar em um produto da página, o modal correspondente deve ser aberto, exibindo os detalhes do produto selecionado e fechar o Modal ao clicar no ícone de “X”.
- [x] Modal de Newsletter - Abrir / Fechar: O modal da Newsltetter também deve permitir duas funcionalidades: Ao clicar no botão de cadastro na newsletter, o modal correspondente deve ser aberto, permitindo que as pessoas usuárias preencham as informações; e fechar o Modal ao clicar no ícone de “X”.
- [x] Cadastro Newsletter - Validação: Não queremos que o campo de e-mail seja enviado vazio ou preenchido com algo que não seja um formato válido de e-mail. Por isso, vamos implementar uma validação para esse campo, seja em HTML ou utilizando JavaScript.

*A responsividade foi definida com alguns breakpoints - width de 768px para tablet e de 376px para mobile

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [React](https://pt-br.reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [StyledComponents](https://styled-components.com/)
- [React-icons](https://react-icons.github.io/react-icons/)
- [Supabase](https://supabase.com/)
- [Ract Router](https://reactrouter.com/en/main)
