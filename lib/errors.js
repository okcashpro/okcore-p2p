'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on okcore-p2p Module {0}'
};

module.exports = require('okcore-lib').errors.extend(spec);
