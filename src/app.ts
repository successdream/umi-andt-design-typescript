// src/app.ts


// TODO  从umi中未找到此种类型
// import { RuntimeReactQueryType } from 'umi';

// export const reactQuery: RuntimeReactQueryType = {
//   devtool: { 
//     initialIsOpen: true,
//   },
//   queryClient: {
//     defaultOptions: {
//       queries: {
//         // 🟡 此配置具有的表现往往令人出乎意料，若无特殊需求，请默认关闭
//         refetchOnWindowFocus: false,
//       },
//     },
//   },
// };

export const reactQuery = {
    devtool: { 
      initialIsOpen: true,
    },
    // devtool: false,
    queryClient: {
      defaultOptions: {
        queries: {
          // 🟡 此配置具有的表现往往令人出乎意料，若无特殊需求，请默认关闭
          refetchOnWindowFocus: false,
        },
      },
    },
  };