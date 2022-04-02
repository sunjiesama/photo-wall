import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/login', component: '@/pages/Login/index' },
  ],
  fastRefresh: {},
  mock: false,
  proxy: {
    '/api': {
      target: 'http://124.223.184.103:3000/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
    '/test': {
      target: 'http://localhost:3000/',
      changeOrigin: true,
      pathRewrite: { '^/test': '' },
    },
  },
});
