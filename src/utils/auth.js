import { jsSHA } from 'jssha';

export function generateTOTP(secret, window = 30) {
    const epoch = Math.round(new Date().getTime() / 1000.0);
    const time = Math.floor(new Date().getTime() / 1000.0).toString(16).padStart(16, '0');
}
