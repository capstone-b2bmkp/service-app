import Answer from './answer';
import Question from './question';
import Role from './role';
import Roleuser from './roleuser';
import User from './user';
import Cart from './cart';
import Cartitem from './cartitem';
import Category from './category';
import Product from './product';
import ProductVariation from './productvariation';
import Color from './color';
import Size from './size';
import Material from './material';
import Gender from './gender';
import Chat from './chat';
import Message from './message';
import Comment from './comment';
import Frecuentquestion from './frecuentquestion';
import Purchase from './purchase';
import Purchaseitem from './purchaseitem';
import Company from './company';
import Validatedcompany from './validatedcompany';
import Adminemail from './adminemail';
import Affiliationcode from './affiliationcode';
import Discountrule from './discountrule';
import Invoice from './invoice';
import Image from './image';
import Quoterpurchase from './quoterpurchase';
import Direction from './direction';
import Delivery from './delivery';
import Creditline from './creditline';
import Colorvariation from './colorvariation';

User.Comments = User.hasMany(Comment, {
  foreignKey: 'userId',
  as: 'comments',
  onDelete: 'CASCADE'
});

User.Cart = User.hasOne(Cart, {
  foreignKey: 'userId',
  as: 'carts',
  onDelete: 'CASCADE'
});

Company.buyerPurchases = User.hasMany(Purchase, {
  foreignKey: 'buyerId',
  as: 'buyer_purchases'
});

Company.sellerPurchases = Company.hasMany(Purchase, {
  foreignKey: 'sellerId',
  as: 'seller_purchases'
});

User.Roleusers = User.hasMany(Roleuser, {
  foreignKey: 'userId',
  as: 'roleusers'
});

User.Questions = User.hasMany(Question, {
  foreignKey: 'userId',
  as: 'questions'
});

User.Messages = User.hasMany(Message, {
  foreignKey: 'userId',
  as: 'messages'
});

User.Chats_as_buyer = User.hasMany(Chat, {
  foreignKey: 'buyerId',
  as: 'chats_as_buyer'
});

User.Chats_as_seller = User.hasMany(Chat, {
  foreignKey: 'sellerId',
  as: 'chats_as_seller'
});

User.Frecuentquestions = User.hasMany(Frecuentquestion, {
  foreignKey: 'userId',
  as: 'frecuentquestions'
});

Product.Category = Product.belongsTo(Category, {
  foreignKey: 'categoryId',
  as: 'category'
});

Product.Comments = Product.hasMany(Comment, {
  foreignKey: 'productId',
  as: 'comments',
  onDelete: 'CASCADE'
});

ProductVariation.Purchaseitems = ProductVariation.hasMany(Purchaseitem, {
  foreignKey: 'variationId',
  as: 'purchaseitems',
  onDelete: 'CASCADE'
});

ProductVariation.Cartitems = ProductVariation.hasMany(Cartitem, {
  foreignKey: 'variationId',
  as: 'cartitems',
  onDelete: 'CASCADE'
});

Product.ProductVariations = Product.hasMany(ProductVariation, {
  foreignKey: 'productId',
  as: 'productvariations',
  onDelete: 'CASCADE'
});

ProductVariation.Product = ProductVariation.belongsTo(Product, {
  foreignKey: 'productId',
  as: 'product'
});

ProductVariation.Color = ProductVariation.belongsTo(Color, {
  foreignKey: 'colorId',
  as: 'color'
});

ProductVariation.Size = ProductVariation.belongsTo(Size, {
  foreignKey: 'sizeId',
  as: 'size'
});

ProductVariation.Material = ProductVariation.belongsTo(Material, {
  foreignKey: 'materialId',
  as: 'material'
});

ProductVariation.Gender = ProductVariation.belongsTo(Gender, {
  foreignKey: 'genderId',
  as: 'gender'
});

Color.ProductVariations = Color.hasMany(ProductVariation, {
  foreignKey: 'colorId',
  as: 'productvariations'
});

Size.ProductVariations = Size.hasMany(ProductVariation, {
  foreignKey: 'sizeId',
  as: 'productvariations'
});

Material.ProductVariations = Material.hasMany(ProductVariation, {
  foreignKey: 'materialId',
  as: 'productvariations'
});

Gender.ProductVariations = Gender.hasMany(ProductVariation, {
  foreignKey: 'genderId',
  as: 'productvariations'
});

Category.Products = Category.hasMany(Product, {
  foreignKey: 'categoryId',
  as: 'products',
  onDelete: 'CASCADE'
});

Category.Purchaseitems = Category.hasMany(Purchaseitem, {
  foreignKey: 'categoryId',
  as: 'purchaseitems',
  onDelete: 'CASCADE'
});

Category.Children = Category.hasMany(Category, {
  foreignKey: 'parentId',
  as: 'children',
  onDelete: 'CASCADE'
});

Category.Parent = Category.belongsTo(Category, {
  foreignKey: 'parentId',
  as: 'parent'
});

Category.Companies = Category.hasMany(Company, {
  foreignKey: 'categoryId',
  as: 'companies'
});

Cart.User = Cart.belongsTo(User, {
  foreignKey: 'userId',
  as: 'owner',
  onDelete: 'CASCADE'
});

Cart.Cartitems = Cart.hasMany(Cartitem, {
  foreignKey: 'cartId',
  as: 'cartitems',
  onDelete: 'CASCADE'
});

Cartitem.Cart = Cartitem.belongsTo(Cart, {
  foreignKey: 'cartId',
  as: 'cart',
  onDelete: 'CASCADE'
});

Cartitem.ProductVariation = Cartitem.belongsTo(ProductVariation, {
  foreignKey: 'variationId',
  as: 'variation',
  onDelete: 'CASCADE'
});

Purchase.Buyer = Purchase.belongsTo(User, {
  foreignKey: 'buyerId',
  as: 'buyer',
  onDelete: 'CASCADE'
});

Purchase.Seller = Purchase.belongsTo(Company, {
  foreignKey: 'sellerId',
  as: 'seller',
  onDelete: 'CASCADE'
});

Purchase.Purchaseitems = Purchase.hasMany(Purchaseitem, {
  foreignKey: 'purchaseId',
  as: 'purchaseitems',
  onDelete: 'CASCADE'
});

Purchaseitem.Purchase = Purchaseitem.belongsTo(Purchase, {
  foreignKey: 'purchaseId',
  as: 'purchase',
  onDelete: 'CASCADE'
});

Purchaseitem.ProductVariation = Purchaseitem.belongsTo(ProductVariation, {
  foreignKey: 'variationId',
  as: 'variation',
  onDelete: 'CASCADE'
});

Purchaseitem.Category = Purchaseitem.belongsTo(Category, {
  foreignKey: 'categoryId',
  as: 'category',
  onDelete: 'CASCADE'
});

Comment.User = Comment.belongsTo(User, {
  foreignKey: 'userId',
  as: 'owner',
  onDelete: 'CASCADE'
});

Comment.Product = Comment.belongsTo(Product, {
  foreignKey: 'productId',
  as: 'product',
  onDelete: 'CASCADE'
});

Question.User = Question.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user',
  onDelete: 'CASCADE'
});

Question.Answer = Question.hasOne(Answer, {
  foreignKey: 'questionId',
  as: 'answer',
  onDelete: 'CASCADE'
});

Answer.Question = Answer.belongsTo(Question, {
  foreignKey: 'questionId',
  as: 'question',
  onDelete: 'CASCADE'
});

Answer.User = Answer.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user',
  onDelete: 'CASCADE'
});

Message.User = Message.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user',
  onDelete: 'CASCADE'
});

Message.Chat = Message.belongsTo(Chat, {
  foreignKey: 'chatId',
  as: 'chat',
  onDelete: 'CASCADE'
});

Chat.Buyer = Chat.belongsTo(User, {
  foreignKey: 'buyerId',
  as: 'buyer',
  onDelete: 'CASCADE'
});

Chat.Seller = Chat.belongsTo(User, {
  foreignKey: 'sellerId',
  as: 'seller',
  onDelete: 'CASCADE'
});

Chat.Messages = Chat.hasMany(Message, {
  foreignKey: 'chatId',
  as: 'messages'
});

Frecuentquestion.User = Frecuentquestion.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user'
});

Role.Roleusers = Role.hasMany(Roleuser, {
  foreignKey: 'roleId',
  as: 'roleusers'
});

Roleuser.Users = Roleuser.belongsTo(User, {
  foreignKey: 'userId',
  as: 'users'
});

Roleuser.Roles = Roleuser.belongsTo(Role, {
  foreignKey: 'roleId',
  as: 'roles'
});

Company.Users = Company.hasMany(User, {
  foreignKey: 'companyId',
  as: 'users',
  onDelete: 'CASCADE'
});

User.Company = Product.belongsTo(Company, {
  foreignKey: 'companyId',
  as: 'owner',
  onDelete: 'CASCADE'
});

Company.Products = Company.hasMany(Product, {
  foreignKey: 'companyId',
  as: 'products',
  onDelete: 'CASCADE'
});

Company.Category = Company.belongsTo(Category, {
  foreignKey: 'categoryId',
  as: 'category'
});

Product.Company = Product.belongsTo(Company, {
  foreignKey: 'companyId',
  as: 'company'
});

Invoice.Purchase = Invoice.belongsTo(Purchase, {
  foreignKey: 'purchaseId',
  as: 'purchase'
});

Purchase.Invoice = Purchase.hasMany(Invoice, {
  foreignKey: 'purchaseId',
  as: 'invoices',
  onDelete: 'CASCADE'
});

Purchase.Quoterpurchase = Purchase.belongsTo(Quoterpurchase, {
  foreignKey: 'quoterPurchaseId',
  as: 'quoterPurchase'
});

Quoterpurchase.Purchase = Quoterpurchase.hasMany(Purchase, {
  foreignKey: 'quoterPurchaseId',
  as: 'purchases',
  onDelete: 'CASCADE'
});

Direction.User = Direction.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user'
});

User.Directions = User.hasMany(Direction, {
  foreignKey: 'userId',
  as: 'directions',
  onDelete: 'CASCADE'
});

Image.Product = Image.belongsTo(Product, {
  foreignKey: 'productId',
  as: 'product'
});
Product.Images = Product.hasMany(Image, {
  foreignKey: 'productId',
  as: 'images',
  onDelete: 'CASCADE'
});

Colorvariation.Product = Colorvariation.belongsTo(Product, {
  foreignKey: 'productId',
  as: 'product'
});
Product.Colorvariations = Product.hasMany(Colorvariation, {
  foreignKey: 'productId',
  as: 'colorvariations',
  onDelete: 'CASCADE'
});

Colorvariation.Color = Colorvariation.belongsTo(Color, {
  foreignKey: 'colorId',
  as: 'color'
});
Color.Colorvariations = Color.hasMany(Colorvariation, {
  foreignKey: 'colorId',
  as: 'colorvariations',
  onDelete: 'CASCADE'
});

// module.exports = db;
export default {
  Answer,
  Cart,
  Cartitem,
  Category,
  Chat,
  Comment,
  Frecuentquestion,
  Message,
  Product,
  ProductVariation,
  Color,
  Size,
  Gender,
  Material,
  Purchase,
  Purchaseitem,
  Question,
  Role,
  Roleuser,
  User,
  Company,
  Validatedcompany,
  Adminemail,
  Affiliationcode,
  Discountrule,
  Invoice,
  Image,
  Quoterpurchase,
  Direction,
  Delivery,
  Creditline,
  Colorvariation
};
