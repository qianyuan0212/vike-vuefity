export { render };
// See https://vike.dev/data-fetching
export const passToClient = ["pageProps", "urlPathname"];

import { renderToString as renderToString_ } from "@vue/server-renderer";
import { escapeInject, dangerouslySkipEscape } from "vike/server";
import { createApp } from "./app";
import iconUrl from "@/assets/icon.svg";

async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  // This render() hook only supports SSR, see https://vike.dev/render-modes for how to modify render() to support SPA
  if (!Page)
    throw new Error("My render() hook expects pageContext.Page to be defined");
  const app = createApp(Page, pageProps, pageContext);

  const appHtml = await renderToString(app);

  // See https://vike.dev/head
  const { documentProps } = pageContext.exports;
  const title = (documentProps && documentProps.title) || "Vite SSR app";
  const desc =
    (documentProps && documentProps.description) || "App using Vite + Vike";

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${iconUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
        <!-- google fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Oswald&family=Paytone+One&family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
      </head>
      <body>
        <div id="app">${dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vike.dev/page-redirection
    },
  };
}

async function renderToString(app) {
  let err;
  // Workaround: renderToString_() swallows errors in production, see https://github.com/vuejs/core/issues/7876
  app.config.errorHandler = (err_) => {
    err = err_;
  };
  const appHtml = await renderToString_(app);
  if (err) throw err;
  return appHtml;
}
