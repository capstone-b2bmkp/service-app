import Comment from '../../models/comment';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req, res) => {
  console.log('estoy en updateComment controller');
  const body = JSON.parse(req.body);
  const userId = body.userId;
  const productId = body.productId;
  const rating = body.rating;
  const content = body.content;
  const commentId = body.commentId;
  console.log(commentId, userId, productId, rating, content);

  try {
    const comment = await Comment.findOne({ where: { id: commentId } });
    if (!comment) {
      return errorResponse(`Comment with id ${commentId}not found`, 404);
    }
    const updates = {};
    if (userId) {
      updates.userId = userId;
    }
    if (productId) {
      updates.productId = productId;
    }
    if (rating) {
      updates.rating = rating;
    }
    if (content) {
      updates.content = content;
    }
    await Comment.update(updates, { where: { id: commentId } });
    return succesfullResponse({ message: 'Comment updated successfully!' }, 201);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};
