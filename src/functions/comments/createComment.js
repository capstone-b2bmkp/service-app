import User from '../../models/user';
import Product from '../../models/product';
import Comment from '../../models/comment';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req, res) => {
  console.log('estoy en createComment controller');
  const body = JSON.parse(req.body);
  const userId = body.userId;
  const productId = body.productId;
  const rating = body.rating;
  const content = body.content;

  try {
    const user = await User.findOne({ where: { id: userId } });
    console.log(user);
    if (!user) {
      return errorResponse(`User with id ${userId} not found`, 404);
    }
    const product = await Product.findOne({ where: { id: productId } });
    console.log(product);
    if (!product) {
      return errorResponse(`Product with id ${productId} not found`, 404);
    }
    await Comment.create({
      userId,
      productId,
      rating,
      content
    });
    return succesfullResponse({ message: 'Comment created successfully!' }, 201);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};
