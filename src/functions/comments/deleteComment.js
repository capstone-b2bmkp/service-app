import Comment from '../../models/comment';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req, res) => {
  console.log('estoy en deleteComment controller');
  try {
    const body = JSON.parse(req.body);
    const commentId = body.id;
    console.log(commentId);
    const comment = await Comment.findOne({ where: { id: commentId } });
    if (!comment) {
      return errorResponse(`Comment with id ${commentId} not found`, 404);
    }
    await Comment.destroy({ where: { id: commentId } });
    return succesfullResponse('Comment deleted successfully!', 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};
