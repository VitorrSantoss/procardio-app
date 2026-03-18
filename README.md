# ProCardio App

> Aplicação móvel multiplataforma para monitoramento e suporte a pacientes com condições cardiovasculares.

---

## Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Arquitetura](#arquitetura)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Instalação e Execução](#instalação-e-execução)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Configuração](#configuração)
- [Contribuição](#contribuição)
- [Licença](#licença)

---

## Sobre o Projeto

O **ProCardio App** é uma aplicação móvel desenvolvida com foco em usuários que necessitam de acompanhamento contínuo de saúde cardiovascular. O sistema tem como objetivo fornecer uma interface acessível, responsiva e de alta performance para o registro, visualização e monitoramento de dados clínicos relevantes ao cuidado cardiológico.

A aplicação foi concebida no contexto de desenvolvimento de soluções digitais em saúde (_mHealth_), alinhando-se às diretrizes de usabilidade e acessibilidade em dispositivos móveis. Seu desenvolvimento adota práticas modernas de engenharia de software, incluindo tipagem estática, roteamento baseado em arquivos e suporte nativo a múltiplas plataformas (iOS, Android e Web).

### Objetivos

- Oferecer ao paciente uma interface intuitiva para o acompanhamento de sua condição cardiovascular;
- Facilitar o registro e a consulta de dados clínicos de forma segura e estruturada;
- Garantir compatibilidade multiplataforma sem comprometer a experiência do usuário;
- Servir como base extensível para integração com sistemas de saúde eletrônicos (EHR/EMR).

---

## Tecnologias Utilizadas

| Tecnologia                                                                               | Versão   | Finalidade                                                            |
| ---------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------------------- |
| [React Native](https://reactnative.dev/)                                                 | 0.81.5   | Framework base para desenvolvimento mobile multiplataforma            |
| [Expo](https://expo.dev/)                                                                | ~54.0.33 | Plataforma de desenvolvimento, build e deploy                         |
| [Expo Router](https://expo.github.io/router/)                                            | ~6.0.23  | Roteamento baseado em sistema de arquivos (file-based routing)        |
| [React](https://react.dev/)                                                              | 19.1.0   | Biblioteca de construção de interfaces declarativas                   |
| [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)           | ~4.1.1   | Animações de alta performance em thread nativa                        |
| [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/) | ~2.28.0  | Gerenciamento de gestos com suporte nativo                            |
| [React Navigation](https://reactnavigation.org/)                                         | ^7.x     | Navegação entre telas e gerenciamento de pilhas de rotas              |
| [TypeScript](https://www.typescriptlang.org/)                                            | ~5.9.2   | Superset tipado de JavaScript para maior segurança e manutenibilidade |
| [Expo Vector Icons](https://icons.expo.fyi/)                                             | ^15.0.3  | Biblioteca de ícones vetoriais multiplataforma                        |

---

## Arquitetura

O projeto segue a arquitetura de **roteamento baseado em sistema de arquivos** (File-Based Routing), provida pelo Expo Router. Neste modelo, cada arquivo dentro do diretório `app/` corresponde automaticamente a uma rota navegável da aplicação, eliminando a necessidade de configuração manual de rotas e promovendo uma organização de código mais previsível e escalável.

```
app/
├── _layout.tsx       # Layout raiz da aplicação (navegação global)
└── index.tsx         # Tela inicial (rota "/")
```

O layout raiz (`_layout.tsx`) é responsável por instanciar o componente `Stack` do Expo Router, que gerencia a pilha de navegação da aplicação. Esta abordagem é análoga ao modelo de _App Router_ popularizado pelo Next.js no ambiente web.

### Decisões de Projeto

- **Tipagem estática com TypeScript**: adotada em toda a base de código para prevenir erros em tempo de compilação e melhorar a experiência de desenvolvimento com autocompletion e verificação de tipos;
- **React Compiler ativado** (`reactCompiler: true`): habilitado experimentalmente para otimização automática de re-renderizações, reduzindo a necessidade de `useMemo` e `useCallback` manuais;
- **Typed Routes** (`typedRoutes: true`): ativa a geração automática de tipos para as rotas do Expo Router, garantindo segurança de navegação em tempo de compilação;
- **Suporte a gestos e animações nativas**: através do React Native Gesture Handler e Reanimated, as interações do usuário são executadas na thread nativa da UI, evitando bloqueios na thread JavaScript e proporcionando fluidez de 60/120fps.

---

## Estrutura do Projeto

```
procardio-app/
├── app/                        # Diretório de rotas (Expo Router)
│   ├── _layout.tsx             # Layout e configuração de navegação raiz
│   └── index.tsx               # Tela principal da aplicação
├── assets/                     # Recursos estáticos
│   └── images/                 # Ícones, splash screen e imagens
├── scripts/                    # Scripts utilitários de desenvolvimento
├── app.json                    # Configuração do projeto Expo
├── tsconfig.json               # Configuração do compilador TypeScript
├── eslint.config.js            # Configuração do ESLint
├── package.json                # Dependências e scripts do projeto
└── README.md                   # Documentação do projeto
```

---

## Pré-requisitos

Antes de iniciar, certifique-se de que o ambiente de desenvolvimento atende aos seguintes requisitos:

- **Node.js** `>= 20.19.4` (conforme exigido pelas dependências do Metro Bundler)
- **npm** ou **yarn** (gerenciador de pacotes)
- **Expo CLI** instalado globalmente ou via `npx`
- **Expo Go** (aplicativo móvel) para testes em dispositivo físico, ou emuladores Android/iOS configurados

```bash
# Verificar versão do Node.js
node --version

# Instalar Expo CLI globalmente (opcional)
npm install -g expo-cli
```

---

## Instalação e Execução

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/procardio-app.git
cd procardio-app
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Iniciar o servidor de desenvolvimento

```bash
npx expo start
```

Após a inicialização, o terminal exibirá um QR Code e as seguintes opções de execução:

| Ação                     | Tecla |
| ------------------------ | ----- |
| Abrir no Android         | `a`   |
| Abrir no iOS             | `i`   |
| Abrir no navegador (Web) | `w`   |
| Recarregar o app         | `r`   |

---

## Scripts Disponíveis

Os seguintes scripts estão definidos no `package.json`:

| Script          | Comando                           | Descrição                                        |
| --------------- | --------------------------------- | ------------------------------------------------ |
| `start`         | `expo start`                      | Inicia o servidor de desenvolvimento Expo        |
| `android`       | `expo start --android`            | Inicia e abre diretamente no emulador Android    |
| `ios`           | `expo start --ios`                | Inicia e abre diretamente no simulador iOS       |
| `web`           | `expo start --web`                | Inicia a versão web da aplicação                 |
| `lint`          | `expo lint`                       | Executa o linter ESLint no projeto               |
| `reset-project` | `node ./scripts/reset-project.js` | Reseta o projeto ao estado inicial (scaffolding) |

---

## Configuração

### `app.json`

O arquivo `app.json` centraliza as configurações do projeto Expo:

- **`scheme`**: `procardioapp` — esquema de deep linking da aplicação;
- **`userInterfaceStyle`**: `automatic` — suporte automático a modo claro/escuro (Light/Dark Mode);
- **`newArchEnabled`**: `true` — habilita a Nova Arquitetura do React Native (JSI, Fabric, TurboModules);
- **`predictiveBackGestureEnabled`**: `false` — desabilita o gesto preditivo de retorno no Android para maior controle de navegação;
- **`edgeToEdgeEnabled`**: `true` — habilita renderização de borda a borda no Android.

### `tsconfig.json`

Estende a configuração base do Expo (`expo/tsconfig.base`) com:

- **`strict: true`** — ativa todas as verificações de tipo estritas do TypeScript;
- **`paths`** — alias `@/*` mapeado para a raiz do projeto, simplificando importações absolutas.

---

## Contribuição

Contribuições são bem-vindas. Para contribuir com o projeto, siga o fluxo abaixo:

1. Realize um _fork_ do repositório;
2. Crie uma branch descritiva: `git checkout -b feature/nome-da-funcionalidade`;
3. Implemente as alterações seguindo os padrões de código do projeto;
4. Execute o linter antes de submeter: `npm run lint`;
5. Abra um _Pull Request_ com uma descrição clara das mudanças realizadas.

---

## Licença

Este projeto está licenciado sob os termos definidos pelo mantenedor. Consulte o arquivo `LICENSE` para mais informações.

---

> **ProCardio App** — Desenvolvido com foco em saúde digital e experiência do usuário.
