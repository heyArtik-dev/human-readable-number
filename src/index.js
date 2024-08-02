module.exports = function toReadable(number) {

  const int = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  const tens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  const sot = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  const hundred = 'hundred';

  const str = number.toString();
  const length = number.toString().length;
  let ten = +str.slice(1);
  let readable = '';

  switch (length) {
    case 3: if (number % 100 == 0) {
      readable = int[+str.at(0)] + ' ' + hundred;
    } else if (number % 10 == 0) {
      readable = int[+str.at(0)] + ' ' + hundred + ' ' + sot[+str.at(1)];
    } else if (ten < 20 && ten > 9) {
      readable = int[+str.at(0)] + ' ' + hundred + ' ' + tens[+str.at(2)];
    } else if (ten < 10) {
      readable = int[+str.at(0)] + ' ' + hundred + ' ' + int[+str.at(2)];
    } else {
      readable = int[+str.at(0)] + ' ' + hundred + ' ' + sot[+str.at(1)] + ' ' + int[+str.at(2)];
    }
      break;
    case 2: if (number % 10 == 0 && number !== 10) {
      readable = sot[+str.at(0)];
    } else if (number < 20 && number > 9) {
      readable = tens[+str.at(1)];
    } else {
      readable = sot[+str.at(0)] + ' ' + int[+str.at(1)];
    }
      break;
    case 1: readable = int[+str.at(0)];
      break;
  }

  return readable;
}
