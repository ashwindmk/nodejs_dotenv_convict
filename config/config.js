var convict = require('convict');

convict.addFormat(require('convict-format-with-validator').ipaddress);

const config = convict({
    env: {
      doc: 'The application environment.',
      format: ['prod', 'dev0', 'test', 'stag'],
      default: 'dev0',
      env: 'MODE',
      arg: 'mode'
    },
    ip: {
      doc: 'The IP address to bind.',
      format: 'ipaddress',
      default: '0.0.0.0',
      env: 'HOST'
    },
    port: {
      doc: 'The port to bind.',
      format: 'port',
      default: 80,
      env: 'PORT',
      arg: 'port'
    },
    db: {
      host: {
        doc: "Database host name/IP",
        format: '*',
        default: 'mongo.db.deft'
      },
      username: {
        doc: "Database username",
        format: '*',
        default: 'root'
      },
      password: {
        doc: "Database password",
        format: '*',
        default: null,  // Default values are required, else these are considered custom nested key-value pairs.
        sensitive: true
      }
    }
});

// Load environment dependent configuration
var env = config.get('env');
config.loadFile(['./config/' + env + '.json']);

// Perform validation
config.validate({allowed: 'strict'});

module.exports = config;
