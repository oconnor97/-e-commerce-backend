// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  id: 'category_id'
})
// Categories have many Products
Category.hasMany(Product, {

})
// Products belongToMany Tags (through ProductTag)
Product.hasMany(Tag, {

})
// Tags belongToMany Products (through ProductTag)
Tag.hasMany(Product, {

})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
