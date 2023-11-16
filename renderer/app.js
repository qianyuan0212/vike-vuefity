import { createSSRApp, h } from "vue";
import layouts from "/src/layouts/index.js";
import { setPageContext } from "./usePageContext";
import vuetify from "/vuetify/vuetify";

export { createApp };

function createApp(Page, pageProps, pageContext) {
  const { documentProps } = pageContext.exports;

  const PageWithLayout = {
    render() {
      return h(
        layouts[documentProps?.layout || "default"] || layouts.default,
        {},
        {
          default() {
            return h(Page, pageProps || {});
          },
        }
      );
    },
  };

  const app = createSSRApp(PageWithLayout);

  app.use(vuetify);

  // We make pageContext available from any Vue component
  setPageContext(app, pageContext);

  return app;
}
