import viteSSR, { ClientOnly } from "vite-ssr";
import { createHead } from "@vueuse/head";

import App from "./App.vue";
import routes from "./routes.js";
import "./assets/bootstrap.sass";

export default viteSSR(
  App,
  { routes },
  ({
    app,
    router,
    isClient,
    initialState,
    writeResponse,
    request,
    redirect,
  }) => {
    const head = createHead();
    app.use(head).component(ClientOnly.name, ClientOnly);

    router.beforeResolve(processPrefetchHook);

    return { head };

    async function processPrefetchHook(to, from, next) {

      const component = to.matched[0]?.components.default;
      const instance = to.matched[0]?.instances.default;

      if (!component || !component.prefetch) return next();

      if (!from.href && isClient) {
        component.data = () => ({ ...initialState.pageData });
        return next();
      }

      const result = await component.prefetch({
        app,
        router,
        head,
        initialState,
        to,
        request,
        writeResponse,
        redirect,
      });
      const data = !instance && component.data?.();

      if (instance) {
        Object.assign(instance, result);
      }
      component.data = () => ({ ...data, ...result });

      if (!isClient) initialState.pageData = { ...data, ...result };

      next();
    }
  }
);
