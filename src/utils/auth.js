import { totp } from 'otplib';

// Initialize otplib with specific options if needed
totp.options = { /* ... */ };

export const generateCode = (secret) => {
    return totp.generate(secret);
};

// You can add more authentication-related functions here
