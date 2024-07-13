import { defineConfig } from "umi";
import routes from './src/routes'


export default defineConfig({
  routes,
  plugins: ['@umijs/plugins/dist/react-query'],  //  导入 react-query 插件
  reactQuery: {}, // 开启react-query插件
  npmClient: 'pnpm',
});
