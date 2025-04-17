# Mini MVP de Match Inteligente

Este é um projeto de um sistema de matchmaking com inteligência artificial simulada, desenvolvido para o desafio da vaga de **Desenvolvedor(a) Full Stack** da **LEGAL.AI**. O objetivo é criar uma tela simples e funcional para conectar pessoas com base em afinidade, sem a necessidade de uma IA real.

## 🧪 Funcionalidades

- **Formulário** com 3 campos: Nome, Área de Interesse, Localização
- **Botão "Buscar Conexões"** para gerar resultados simulados
- Exibição de 3 **resultados simulados**, com: Nome, Descrição e Nível de Afinidade (ex: 78%)

## ⚙️ Tecnologias Usadas

- **React**: Framework para construção de interfaces de usuário
- **TypeScript**: Superset do JavaScript para maior segurança de tipos
- **Vite**: Ferramenta de build moderna e rápida para React e TypeScript
- **TailwindCSS**: Framework CSS para estilização responsiva e flexível

## 🏗️ Estrutura de Diretórios

- **`src/`**: Contém os arquivos principais do projeto (componentes React, arquivos de estilo, etc.)
- **`public/`**: Contém os arquivos públicos (index.html, favicon, etc.)
- **`tailwind.config.js`**: Configuração do TailwindCSS
- **`postcss.config.js`**: Configuração do PostCSS para integração com o Tailwind
- **`vite.config.ts`**: Configuração do Vite para a construção e o servidor local

## 🚀 Como Rodar o Projeto

1. **Clone o repositório** ou baixe os arquivos.
2. **Instale as dependências** com o comando:
    ```bash
   npm install

3. Rode o servidor de desenvolvimento com:
    ```bash
   npm run dev

5. Acesse no navegador a URL fornecida pelo Vite (geralmente http://localhost:3000).

## 📝 Decisões Técnicas
Vite foi escolhido para o projeto devido à sua configuração simples e velocidade durante o desenvolvimento, além de ser altamente otimizado para aplicações com React e TypeScript.

TailwindCSS foi integrado para garantir uma estilização rápida e responsiva sem a necessidade de escrever CSS customizado. O Tailwind também facilita a criação de layouts consistentes e flexíveis.

React + TypeScript foi usado para garantir que o código seja robusto, escalável e fácil de manter, aproveitando os benefícios do tipagem estática.

Simulação de IA foi implementada manualmente através de dados estáticos. Não foi desenvolvida uma IA real, já que o foco era entregar um MVP funcional em pouco tempo.

## 🔮 **O que faria diferente com mais tempo?**

- Integração com uma API real para fornecer os dados de afinidade entre os usuários.
- Implementação de um sistema de autenticação para que os usuários possam salvar e visualizar suas conexões ao longo do tempo.
- Aprimorar a UI/UX com animações mais interativas e um design mais polido.
- Criar uma lógica de matchmaking mais complexa, talvez utilizando aprendizado de máquina para uma experiência mais personalizada.


📸 Prints do Projeto
![Tela 1](https://i.imgur.com/B6dRtWx.png) ![Tela 2](https://i.imgur.com/anQKUfy.png)

