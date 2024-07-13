import type { IApi } from 'umi';
// 代码生效，官网复制的代码的具体功能不清楚loading.(tsx|jsx)
export default (api: IApi) => {
  api.onDevCompileDone((opts) => {
    opts;

    console.log('> onDevCompileDone', opts.isFirstCompile);
  });
  api.modifyHTML(($) => {
    $;
  });
  api.chainWebpack((memo) => {
    memo;
  });
};
