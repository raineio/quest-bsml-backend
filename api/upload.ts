import { PUT } from "../routes/router";
import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";


export class Upload {
    @PUT("/")
    async upload() {
        async function finalUpload(req: Request<ParamsDictionary, any, IUpload>) {
            
        }
    }
}