import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const checkRut = (rawRut) => {
  try {
    // check length:
    if (rawRut.length < 9 || rawRut.length > 10) {
      return errorResponse({ error: 'Rut too long or too short' }, 400);
    }
    // split rut:
    const rutArray = rawRut.split('-');
    const rut = rutArray[0];
    const verifyingDigit = rutArray[1];
    // check correct sintax:
    if (!rut.match(/^[0-9a-z]+$/)) {
      return errorResponse({ error: 'Rut is not alphanumeric' }, 400);
    }
    let reversedRut = '';
    for (let i = rut.length - 1; i >= 0; i--) {
      reversedRut += rut[i];
    }
    const series = [2, 3, 4, 5, 6, 7];
    let j = 0;
    let finalSum = 0;
    for (let i = 0; i < reversedRut.length; i++) {
      finalSum += reversedRut[i] * series[j];
      j += 1;
      if (j === series.length) {
        j = 0;
      }
    }
    const realDigit = Math.abs(11 - (finalSum - Math.floor(finalSum / 11) * 11));
    let digit;
    if (realDigit === 11) {
      digit = 0;
    } else if (realDigit === 10 && verifyingDigit === 'K') {
      return succesfullResponse({ message: 'succesfull rut check!!' }, 200);
    } else {
      digit = realDigit;
    }
    if (parseInt(verifyingDigit) !== digit) {
      return errorResponse({ error: 'wrong verifyingDigit' }, 401);
    }
    return succesfullResponse({ message: 'succesfull rut check!!' }, 200);
  } catch (error) {
    return errorResponse({ error: 'bad request' }, 400);
  }
};

// Fuente: https://validarutchile.cl/calcular-digito-verificador.php
//         https://stackoverflow.com/questions/4434076/best-way-to-alphanumeric-check-in-javascript
//         https://bobbyhadz.com/blog/javascript-check-if-string-contains-character
