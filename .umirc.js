import { defineConfig } from "umi";
export default defineConfig({
  routes: [
    { path: "/", component: "@/layouts/index.js",
      routes:[
        { path: "/", component: '@/Home/index.jsx' },
        { path: "/search", component: "@/pages/search.js" },
        { path: "/storage/:id", component: "@/pages/storage/$id.js", wrappers: ['@/wrappers/auth'] },
        { path: '/logout', component: '@/pages/auth/logout.js', wrappers: ['@/wrappers/auth']},
        { path: '/profile', component: '@/pages/auth/profile.js', wrappers: ['@/wrappers/auth']},
        { path: '/login', component: '@/pages/auth/login.js'},
        { path: '/register', component: '@/pages/auth/register.js'},
        { path: '/register-result', component: '@/pages/auth/register-result.js'},
        { component: '@/pages/404.js' },
      ]
    },
  ],
});
