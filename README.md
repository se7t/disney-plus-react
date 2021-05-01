<h1 align="center">
  Disney Plus Clone
</h1>

A Disney+ clone web app built with ReactJS, with database and hosting provided by Firebase. Fully optimized and responsive.
<br/>

<a href="https://disney-plus-react.web.app/">Here's demo.</a>

## 🔬 Technologies

1.  **React**

    "A JavaScript library for building user interfaces."

    [`https://reactjs.org/`](`https://reactjs.org/`)

1.  **TypeScript**

    "[...] An open-source language which builds on JavaScript, one of the world's most used tools, by adding static type definitions."

    [`https://www.typescriptlang.org/`](`https://www.typescriptlang.org/`)

1.  **Redux**

    "A Predictable State Container for JS Apps."

    [`https://redux.js.org/`](`https://redux.js.org/`)

1.  **EmotionJS**

    "[...] A library designed for writing css styles with JavaScript. It provides powerful and predictable style composition in addition to a great developer experience with features such as source maps, labels, and testing utilities."
    [`https://emotion.sh/`](`https://emotion.sh/docs/introduction`)

1.  **Firebase**

    "Firebase provides detailed documentation and cross-platform SDKs to help you build and ship apps on Android, iOS, the web, C++, and Unity. "

    [`https://firebase.google.com/`](`https://firebase.google.com/`)


## 🖥️ Installation

Clone the Disney Plus React repository.

```bash
$ git clone https://github.com/se7t/disney-plus-react.git
```

Use the package manager [yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable) to install Disney Plus React.

```bash
$ yarn install
```

Create a `.env.development.local` file in root directory with the following content:

```
// Input the values from your project's Firebase SDK snippet available in Project Settings under the tab "Your apps"

REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=
REACT_APP_FIREBASE_MEASUREMENT_ID=
```

Create a project on [Firebase](https://firebase.google.com/), open Project Console, navigate to Project Settings, and enable the following sign-in methods:

1. Google Authentication
1. Anonymous Authentication

Lastly, fill the Firestore Database with data according to this schema:

```
{
  "movies": {
    "background-image": string,
    "card-image": string,
    "description": string,
    "tags": string,
    "title": string,
    "title-image": string,
    "type": "newArrival" / "original" / "recommended" / "trending"
  }
}
```

For example:

```json
{
  "movies": {
    "background-image": "https://i.ibb.co/n1fV2M7/assembled-background.webp",
    "card-image": "https://i.ibb.co/4Ywft66/assembled-card.webphttps://i.ibb.co/4Ywft66/assembled-card.webp",
    "description": "ASSEMBLED is an immersive series of documentary-style specials examining the creation of Marvel Studios’ thrilling new shows and theatrical releases.",
    "tags": "2021 • 1 Season • Docuseries, Anthology",
    "title": "Assembled",
    "title-image": "https://i.ibb.co/KhpkY5W/assembled-title.webp",
    "type": "original"
  }
}
```

Recommended image dimensions:
```
background-image: 1440x810
card-image: 400x225
title-image: 1440x810
```

You can use images in any format, however `.webp` is highly recommended.

## 🧰 Usage

Use the package manager [yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable) to start the development server.

```bash
$ yarn run start
```

## 📓 Additional notes

1. <h3> Master branch supports <span style="text-decoration: underline;">only</span> Google authentication. Anonymous authentication is available in a separate branch.</h3>

1. <h3> Provided demo uses Anonymous authentication for user convenience.</h3>

## 📄 License
[MIT](https://github.com/se7t/disney-plus-react/LICENSE.md)
