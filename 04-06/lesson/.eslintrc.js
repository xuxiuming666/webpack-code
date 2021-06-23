module.exports = {
	"extends": "airbnb",
  "parser": "babel-eslint",
  "rules": {
    "react/prefer-stateless-function": 0,
    "react/jsx-filename-extension": 0
  },
  globals: {
    document: false
  }
};

// npm i eslint -D
// npx eslint --init
// npm i babel-eslint -D
// npx eslint src or vscode 安装eslint插件