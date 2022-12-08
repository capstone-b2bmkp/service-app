import jwt from 'jsonwebtoken';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const checkAuth = (req) => {
  try {
    const body = JSON.parse(req.body);
    console.log('headers...', req.headers);
    const token = req.headers.Authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    // Con esto se puede acceder a la info del usuario desde otro lado
    const { apiUser } = decoded;
    return succesfullResponse({
      message: 'Valid Token!',
      dataToken: apiUser,
      isSeller: decoded.isSeller
    }, 200);
  } catch (error) {
    return errorResponse({ error: 'Auth failed' }, 401);
  }
};
