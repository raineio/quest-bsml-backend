import bcrypt from "bcrypt";
import { AuthModel, Model } from "../interfaces/IModel";
import { run, Add } from "../db";
import { IAuthorization, IDataBase } from "../interfaces/IDataBase";
const saltRounds: number = 10;

function encrypt(key: string) {
    return bcrypt.hash(key, saltRounds, async (error, hash) => {
        if (error) return console.log(error.message);
        Add({ key: hash });
    });
}

function decrypt(hash: string, key: string) {
    return new Promise((resolve, reject) => {
        resolve(bcrypt.compare(hash, key));
    });
}

export { encrypt, decrypt };
