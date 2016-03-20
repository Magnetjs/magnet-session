magnet-session
==============

[![Build Status](https://travis-ci.org/Magnetjs/magnet-session.svg?branch=master)](https://travis-ci.org/Magnetjs/magnet-session)

### Usage
Basic
```
import magnet from 'magnet-core';
import Config from 'magnet-config';
import Logger from 'magnet-bunyan';
import Server from 'magnet-spdy';
import Session from 'magnet-session';

let app = await magnet([Config, Logger, Server, Session]);
// Server running at default port 3000
```
server/config/session.js
```
export default {
  keys: ['magnet', 'by Kieve Chua', 'someRandomCOde'],
  host: 'localhost',
  port: 6379
};

```
Config please refer [koa-redis](https://github.com/koajs/koa-redis), [generic-session](https://github.com/koajs/generic-session)

### TODO
- Test case
