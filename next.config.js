const path = require("path");
console.log(__dirname);

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
