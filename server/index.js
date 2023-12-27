const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('./../src/app.tsx').default;

const app = express();
const port = 9000;
app.use(express.static('src'));
// app.get('/', (_, res) => {
//   res.send('Hello, World!!');
// });

console.log(App)
app.get('/', (_, res) => {
  // サーバーサイドでReactアプリケーションをレンダリング
  const appHtml = ReactDOMServer.renderToString(
    // React.createElement(App)
    <App />
    // React.createElement('h2',null,'Element rendered from Server')
  );
  // レンダリング結果をHTMLとしてクライアントに送信
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>React SSR Example</title>
    </head>
    <body>
      <div id="root">${appHtml}</div>
    </body>
    </html>
  `);
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
