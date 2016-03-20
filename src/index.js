import Base from 'magnet-core/dist/base';
import redisStore from 'koa-redis';
import convert from 'koa-convert';
import session from 'koa-generic-session';

export default class Session extends Base {
  async setup() {
    let options = { ...this.app.config.session };
    options.store = new redisStore(
      this.app.config.connections.redis.default
    );

    this.app.application.keys = options.keys;

    this.app.session = session(options);

    this.app.application.use(convert(this.app.session));
  }
}
