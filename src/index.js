import Base from 'magnet-core/dist/base';
import redisStore from 'koa-redis';
import convert from 'koa-convert';
import session from 'koa-generic-session';
import defaultConfig from './config/session';

export default class Session extends Base {
  async setup() {
    let options = { ...defaultConfig, ...this.config.session };

    options.store = new redisStore(options.redis);

    this.app.application.keys = options.keys;

    this.app.session = session(options);

    this.app.application.use(convert(this.app.session));
  }
}
