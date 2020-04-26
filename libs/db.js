/*
  Placeholder. This will need to pull information about the person from a db or other data source.
  The personID can be the unique identifier and is used throughout the application.
*/

const config = require('config');
const baseURL = config.get('baseURL');
function getPerson(personID) {
  return {
    id: 1,
    name: 'Harvey Dodd',
    image_url: `${baseURL}/assets/img/person1.jpg`,
    description: 'Harvey is an Ex-banker that sadly lost everything due to the financial crisis. <br>His favorite band is Pink floyd. He has two kids called John and Luke.',
  };
}

module.exports.getPerson = getPerson;
