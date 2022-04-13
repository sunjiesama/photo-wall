import { defineConfig } from 'umi';
import routers from './route';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routers,
  fastRefresh: {},
  mock: false,
  proxy: {
    // '/api': {
    //   target: 'http://124.223.184.103:3000/',
    //   changeOrigin: true,
    //   pathRewrite: { '^/api': '' },
    // },
    '/api': {
      target: 'http://localhost:3000/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
