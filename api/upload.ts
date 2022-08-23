import { POST } from "../routes/router";
import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { IUpload } from "../interfaces/IUpload";
import { Add } from "../db";
import { request } from "http";
import { encrypt } from "./authorization";

export class Upload {
    @POST("/")
    // @ts-ignore
    async postreq(req: Request<ParamsDictionary, any, IUpload>, res: Response, auth: string) {
    
        let encryptedAuthToken = encrypt(auth);
        if (encryptedAuthToken === null) {
            return res.sendStatus(403);
        }

        if (req != null) {
            Add(req);
            res.sendStatus(200);
        }
    }
}
