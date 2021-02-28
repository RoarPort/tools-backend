const { join } = require('path');
const { readFileSync } = require('fs');

module.exports.readSchema = (name) => {
  const dir = join(__dirname, `${name}.gql`);
  return readFileSync(dir, 'utf8');
};
