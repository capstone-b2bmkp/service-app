import Comment from '../../models/comment';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req, res) => {
  console.log('estoy en indexComment controller');
  try {
    const comments = await Comment.findAll();
    return succesfullResponse({ data: comments }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};
