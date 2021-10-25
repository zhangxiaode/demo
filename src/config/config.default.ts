/* eslint-disable prettier/prettier */
import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1606726343544_8597';

  // add your config here
  config.middleware = [
    // 'reportMiddleware'
  ];

  config.security = {
    // csrf: {
    //   headerName: 'x-csrf-token' // 自定义请求头
    // },
    csrf: {
      enable: false,
    }
  };

  config.cluster = {
    listen: {
      path: '',
      port: 8891,
      hostname: '0.0.0.0',
    }
  };

  return config;
};
