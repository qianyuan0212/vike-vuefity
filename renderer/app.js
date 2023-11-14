import { createSSRApp, h } from "vue";
import PageShell from "./PageShell.vue";
import { setPageContext } from "./usePageContext";
import vuetify from "../vuetify/vuetify";

export { createApp };

function createApp(Page, pageProps, pageContext) {
  const PageWithLayout = {
    render() {
      return h(
        PageShell,
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
