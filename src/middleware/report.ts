/* eslint-disable prettier/prettier */
import { Provide } from '@midwayjs/decorator';
import { IWebMiddleware, IMidwayWebNext } from '@midwayjs/web';
import { Context } from 'egg';

@Provide()
export class ReportMiddleware implements IWebMiddleware {

  resolve() {
    return async (ctx: Context, next: IMidwayWebNext) => {
      try {
        await next();
        ctx.body = {
          data: ctx.body,
          code: ctx.response.status,
          msg: ctx.response.message
        };
      } catch (err) {
        console.log(err);
        // 所有的异常都在 app 上触发一个 error 事件，框架会记录一条错误日志
        ctx.app.emit('error', err, ctx);
        const status = err.status || 500;
        // 生产环境时 500 错误的详细错误内容不返回给客户端，因为可能包含敏感信息
        // const error = status === 500 && ctx.app.config.env === 'prod'
        //   ? 'Internal Server Error'
        //   : err.message;
        // 从 error 对象上读出各个属性，设置到响应中
        ctx.body = {
          data: null,
          code: status,
          msg: err.message
        };
        // if (status === 422) {
        //   ctx.body.detail = err.errors;
        // }
        ctx.status = status;
      }
    };
  }

}
