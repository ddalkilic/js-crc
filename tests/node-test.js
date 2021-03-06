// Node.js env
expect = require('expect.js');
crc32 = require('../src/crc.js').crc32;
crc16 = require('../src/crc.js').crc16;
require('./test.js');

delete require.cache[require.resolve('../src/crc.js')];
delete require.cache[require.resolve('./test.js')];
crc32 = null;
crc16 = null;

// Webpack browser env
JS_CRC_NO_NODE_JS = true;
window = global;
crc32 = require('../src/crc.js').crc32;
crc16 = require('../src/crc.js').crc16;
require('./test.js');

delete require.cache[require.resolve('../src/crc.js')];
delete require.cache[require.resolve('./test.js')];
crc32 = null;
crc16 = null;

// browser env
JS_CRC_NO_NODE_JS = true;
JS_CRC_NO_COMMON_JS = true;
window = global;
require('../src/crc.js');
require('./test.js');

delete require.cache[require.resolve('../src/crc.js')];
delete require.cache[require.resolve('./test.js')];
crc32 = null;
crc16 = null;

// browser env and no array buffer
JS_CRC_NO_NODE_JS = true;
JS_CRC_NO_COMMON_JS = true;
JS_CRC_NO_ARRAY_BUFFER = true;
window = global;
require('../src/crc.js');
require('./test.js');

delete require.cache[require.resolve('../src/crc.js')];
delete require.cache[require.resolve('./test.js')];
crc32 = null;
crc16 = null;

// browser AMD
JS_CRC_NO_NODE_JS = true;
JS_CRC_NO_COMMON_JS = true;
JS_CRC_NO_ARRAY_BUFFER = undefined;
window = global;
define = function (func) {
  crc16 = func().crc16;
  crc32 = func().crc32;
  require('./test.js');
};
define.amd = true;

require('../src/crc.js');
