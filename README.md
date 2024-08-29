1. npm create vite@latest pet-listing --template react
2. cd pet-listing
3. npm install
4. npm install eslint prettier eslint-plugin-react eslint-config-prettier eslint-plugin-react-hooks eslint-plugin-jsx-a11y --save-dev
5. npx eslint --init

Structure of this project is:

src/
│
├── components/
│   ├── PetList.js
│   ├── PetDetails.js
│   ├── SearchForm.js
│   └── ErrorBoundary.js
│
├── pages/
│   ├── Home.js
│   ├── PetDetailsPage.js
│
├── services/
│   ├── api.js
│
├── utils/
│   └── errorHandler.js
│
├── App.js
├── index.js
├── index.css
└── .env

