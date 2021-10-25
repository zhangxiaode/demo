import { Configuration } from '@midwayjs/decorator';
import * as swagger from '@midwayjs/swagger';
import { join } from 'path';

@Configuration({
  imports: [
    {
      component: swagger,
      enabledEnvironment: ['local', 'prod'],
    }
  ],
  importConfigs: [
    join(__dirname, './config/config.default'),
    join(__dirname, './config/config.local'),
    join(__dirname, './config/config.prod')
  ],
})
export class ContainerConfiguratin {}
