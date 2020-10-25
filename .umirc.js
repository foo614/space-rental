import { defineConfig } from "umi";
export default defineConfig({
  routes: [
    { path: "/", component: "@/layouts/index.js", 
      routes:[
        { path: "/", component: '@/Home/index.jsx' },
        { path: "/search", component: "@/pages/search.js" },
        { path: "/storage/:id", component: "@/pages/storage/$id.js" },
        { component: '@/pages/404.js' },
      ]
    },
  ],
});
