## Rocket Help.
### 1 - Conhecendo o projeto 
## React Native.
**Figma do projeto**
- Figma - https://www.figma.com/community/file/1130846653327904117


### 2 - O início da especialização em React Native.
## Configurando Ambiente.
- **Ferramentas**
    - `NodeJS` - https://nodejs.org/en/
    - `Expo CLI` - https://docs.expo.dev/workflow/expo-cli/
    - `Expo Go` - https://expo.dev/client

- Com essas ferramentas, basta você instalar a CLI do Expo globalmente pelo **npm** (ou **Yarn**, o que você preferir): 

## Npm
```
npm install -g expo-cli
```
**Ou**

## Yarn
```
yarn global add expo-cli
```

**Para verificar se a instalação ocorreu com sucesso, execute o comando abaixo:**
```
expo --version
```

**Criação do projeto**
```
expo init my_app
```

**Criar arquivo tsconfig.json na raiz do projeto**
- tsconfig.json
- Modificar a extenção do arquivo `App.js` para `App.tsx`

## Roda a aplicação
```
expo start
```

- **QRCODE**
- http://localhost:19002


## NativeBase
- instalação do NativeBase
- Site - https://nativebase.io/

**Npm**
```
npm install native-base
```

```
expo install react-native-svg
```

```
expo install react-native-safe-area-context
```

## Expo Google Fonts
- Site - https://docs.expo.dev/guides/using-custom-fonts/

```
expo install expo-font @expo-google-fonts/roboto
```

## SVG Transformer React Native
- Site - https://github.com/kristerkari/react-native-svg-transformer

```
npm i react-native-svg-transformer --save-dev
```

- **Substituir** o codigo do arquivo `metro.config.js` por:
```JS
const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg"],
  };

  return config;
})();
```

**VSCode**
- Extenção
  - `R component`


- atalho para criação do component: **nbc + tab** "native base component"


## Phosphor Icon.
- Site - https://phosphoricons.com/

**Phosphor Icon React Native**
- Site - https://github.com/duongdev/phosphor-react-native

```
npm install --save phosphor-react-native
```

### 3 - Estrutura visual e Navegação.

## React Navigation.
- Site - https://reactnavigation.org/

```
npm install @react-navigation/native
```

```
expo install react-native-screens
```

```
npm install @react-navigation/native-stack
```

### 4 - Integração com Firebase e finalização.

## Firebase.
- Site - https://firebase.google.com/?hl=pt

## React Native Firebase.
- Site - https://rnfirebase.io/

```
npm install --save @react-native-firebase/app
```

## Native Firebase SDK.
- Site https://docs.expo.dev/guides/setup-native-firebase/

- Acrescestar o plugins no arquivo `app.json`.

```js
"plugins": [
      "@react-native-firebase/app"
    ]
```

### Rodar o Pre-Build.
```
expo prebuild
```


- https://rnfirebase.io/firestore/usage

```
npm i @react-native-firebase/firestore
```



















##








##


- By: **Daniel Oliveira**
  - `Instagram` - https://www.instagram.com/danieloliv3/
  - `Facebook` - https://web.facebook.com/danielsapup3/
  - `Twitter` - https://twitter.com/danielsapup3/
  - `Linkedin` - https://www.linkedin.com/in/danielsapup3/
  - `Youtube` - https://www.youtube.com/channel/UCEQ_0pFLy4QKTK0UQe8b0ow
