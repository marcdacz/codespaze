# codespaze-api

## setup

```
npm i -g firebase-tools
firebase login

cd codespaze-api\functions
npm install
```

## set credentials

- Download Service Account Private Key Json File
- Set Environment Variable: GOOGLE_APPLICATION_CREDENTIALS

```
on Unix
export GOOGLE_APPLICATION_CREDENTIALS=C:\\Path\\to\\keys.json

or on Windows
setx GOOGLE_APPLICATION_CREDENTIALS "C:\\Path\\to\\keys.json"
```

## execute locally

```
firebase serve
```

## deploy

```
firebase deploy
```
