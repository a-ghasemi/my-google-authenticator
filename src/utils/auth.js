import { jsSHA } from 'jssha';

export function generateTOTP(secret, window = 30) {
    const epoch = Math.round(new Date().getTime() / 1000.0);
    const time = leftPad(Math.floor(epoch / window).toString(16), 16, '0');
    // use the Web Crypto API to create an HMAC-SHA1 hash of 'time' using 'secret'
    // extract the TOTP code from the hash
    // return the code
}
