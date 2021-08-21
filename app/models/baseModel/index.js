const paginate = require("./paginate");

const BaseModel = function loadedAtPlugin(schema, options) {
    schema.query.paginate = paginate
};

module.exports = BaseModel