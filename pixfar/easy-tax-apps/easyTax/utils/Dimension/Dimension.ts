import {Dimensions} from 'react-native';

export const SH = Dimensions.get('window').height;
export const SW = Dimensions.get('window').width;

export const norm = (fraction: number, type: 'h' | 'w') => {
  return Math.floor(type === 'h' ? fraction * SH : fraction * SW);
};

export const addDecimalInNumber = (amount: number) => {
  const amountArray = amount.toString().split(',');

  let finalAmount: string = '';

  switch (amountArray?.length) {
    case 0:
      finalAmount = amountArray[0];
      break;
    case 1:
      finalAmount = amountArray[0] + '' + amountArray[1];
      break;
    case 2:
      finalAmount = amountArray[0] + '' + amountArray[1] + '' + amountArray[2];
      break;
    case 3:
      finalAmount =
        amountArray[0] +
        '' +
        amountArray[1] +
        '' +
        amountArray[2] +
        '' +
        amountArray[3];
      break;
    case 4:
      finalAmount =
        amountArray[0] +
        '' +
        amountArray[1] +
        '' +
        amountArray[2] +
        '' +
        amountArray[3] +
        '' +
        amountArray[4];
      break;
    case 5:
      finalAmount =
        amountArray[0] +
        '' +
        amountArray[1] +
        '' +
        amountArray[2] +
        '' +
        amountArray[3] +
        '' +
        amountArray[4] +
        '' +
        amountArray[5];
      break;
    case 6:
      finalAmount =
        amountArray[0] +
        '' +
        amountArray[1] +
        '' +
        amountArray[2] +
        '' +
        amountArray[3] +
        '' +
        amountArray[4] +
        '' +
        amountArray[5] +
        '' +
        amountArray[6];
      break;
    case 7:
      finalAmount =
        amountArray[0] +
        '' +
        amountArray[1] +
        '' +
        amountArray[2] +
        '' +
        amountArray[3] +
        '' +
        amountArray[4] +
        '' +
        amountArray[5] +
        '' +
        amountArray[6] +
        '' +
        amountArray[7];
      break;
    case 8:
      finalAmount =
        amountArray[0] +
        '' +
        amountArray[1] +
        '' +
        amountArray[2] +
        '' +
        amountArray[3] +
        '' +
        amountArray[4] +
        '' +
        amountArray[5] +
        '' +
        amountArray[6] +
        '' +
        amountArray[7] +
        '' +
        amountArray[8];
      break;
    case 9:
      finalAmount =
        amountArray[0] +
        '' +
        amountArray[1] +
        '' +
        amountArray[2] +
        '' +
        amountArray[3] +
        '' +
        amountArray[4] +
        '' +
        amountArray[5] +
        '' +
        amountArray[6] +
        '' +
        amountArray[7] +
        '' +
        amountArray[8] +
        '' +
        amountArray[9];
      break;
    case 10:
      finalAmount =
        amountArray[0] +
        '' +
        amountArray[1] +
        '' +
        amountArray[2] +
        '' +
        amountArray[3] +
        '' +
        amountArray[4] +
        '' +
        amountArray[5] +
        '' +
        amountArray[6] +
        '' +
        amountArray[7] +
        '' +
        amountArray[8] +
        '' +
        amountArray[9] +
        '' +
        amountArray[10];
      break;
    default:
      finalAmount = amount.toString();
      break;
  }

  const returnNumber: string = finalAmount?.split('undefined')[0];

  return Number(returnNumber);
};
