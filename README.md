# Cineteca Digital 🎬

![Demo do Projeto](https://caminho/para/seu/gif-ou-imagem.gif)

## 📝 Sobre o Projeto

**Cineteca Digital** é uma aplicação web **Full-Stack** que serve como uma alternativa moderna e completa para o site do cinema local. A plataforma inclui tanto um portal voltado para o cliente, focado em uma experiência de compra segura, quanto um **dashboard administrativo** para o gerenciamento de conteúdo.

O projeto nasceu da necessidade de criar uma interface confiável, que resgatasse a confiança do usuário, ao mesmo tempo em que oferece ao administrador do cinema total controle sobre os filmes em cartaz e as sessões.

---

## ✨ Principais Funcionalidades

A plataforma é dividida em duas áreas principais, com funcionalidades específicas para cada tipo de usuário:

### Para Clientes (Portal Principal)
* 👤 **Autenticação de Usuários:** Sistema completo de cadastro e login para uma experiência personalizada e segura.
* 🔐 **Rotas Protegidas:** Acesso à área de compra e perfil apenas para usuários logados.
* ✏️ **Gerenciamento de Perfil:** Usuários podem visualizar e editar suas informações de cadastro.
* 🎥 **Listagem de Filmes:** Navegue pelos filmes em cartaz e futuros lançamentos.
* ℹ️ **Página de Detalhes:** Veja sinopse, elenco, trailer e horários de cada filme.
* 📱 **Design Responsivo:** Experiência otimizada para desktops, tablets e celulares.

### Para Administradores (Dashboard)
* 🔒 **Acesso Restrito:** Dashboard seguro acessível apenas para usuários com permissão de administrador.
* ➕ **Gerenciamento de Conteúdo (CMS):** Adicione, edite e remova filmes (cartaz, sinopse, etc.) que são exibidos dinamicamente no site principal.
* 📊 **Visualização de Dados:** Painel para visualizar informações importantes, como o número de sessões agendadas para o dia.
* ⚙️ **Controle Total:** O dashboard funciona como um sistema de gerenciamento de conteúdo (CMS) para o site.
---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

![React](https://img.shields.io/badge/React-20232A?style=plastic&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=plastic&logo=vite&logoColor=white)
![MUI](https://img.shields.io/badge/Material--UI-007FFF?style=plastic&logo=mui&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=plastic&logo=react-router&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=plastic&logo=supabase&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=plastic&logo=javascript&logoColor=black)
![Git](https://img.shields.io/badge/Git-F05032?style=plastic&logo=git&logoColor=white)

---

## 🚀 Como Rodar o Projeto

Para rodar este projeto localmente, siga os passos abaixo:

**1. Pré-requisitos:**
* Ter o [Node.js](https://nodejs.org/en/) instalado (versão LTS recomendada).
* Ter o [Git](https://git-scm.com/) instalado.

**2. Clone o Repositório:**
```bash
git clone [https://github.com/seu-usuario/nome-do-repositorio.git](https://github.com/seu-usuario/nome-do-repositorio.git)
```

**3. Navegue até a Pasta do Projeto:**
```bash
cd nome-do-repositorio
```

**4. Instale as Dependências:**
```bash
npm install
```

**5. Configure as Variáveis de Ambiente:**
* Crie um arquivo chamado `.env` na raiz do projeto.
* Copie o conteúdo do arquivo `.env.example` (que você deve criar) para o novo arquivo `.env`.
* Preencha as variáveis com as suas chaves do Supabase.

**Arquivo `.env`:**
```
VITE_SUPABASE_URL="URL_DO_SEU_PROJETO_SUPABASE"
VITE_SUPABASE_ANON_KEY="SUA_CHAVE_ANON_SUPABASE"
```

**6. Inicie o Servidor de Desenvolvimento:**
```bash
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173) (ou a porta indicada no seu terminal) no seu navegador para ver a aplicação.

---

## 👨‍💻 Autor

Feito com ❤️ por **Guilherme Rodrigues**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=plastic&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gui-ccr-)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=plastic&logo=github&logoColor=white)](https://github.com/gui-ccr)

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
