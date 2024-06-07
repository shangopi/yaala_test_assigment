import crypto from 'crypto';
const SECRET = "yaala_test"

export const random = () => crypto.randomBytes(128).toString('base64');
export const authentication = (salt: string, password: string) => { //usually sha 256 is bad for passwords pbkdf2
    return crypto.createHmac('sha256',[salt,password].join('/')).update(SECRET).digest('hex');
}