## Rocket Help.
### 1 - React Native.
**Figma do projeto**
- Figma - https://www.figma.com/community/file/1130846653327904117


### 2 - Criação do projeto.
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


- atalho para criação do component: **nbc + tab** "native nase component"


## Phosphor Icon.
- Site - https://phosphoricons.com/

**Phosphor Icon React Native**
- Site - https://github.com/duongdev/phosphor-react-native

```
npm install --save phosphor-react-native
```



















- By: **Daniel Oliveira**
  - `Instagram` - https://www.instagram.com/danieloliv3/
  - `Facebook` - https://web.facebook.com/danielsapup3/
  - `Twitter` - https://twitter.com/danielsapup3/
  - `Linkedin` - https://www.linkedin.com/in/danielsapup3/
