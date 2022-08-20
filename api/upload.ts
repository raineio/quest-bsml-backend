import { POST } from "../routes/router";
import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { IUpload } from "../interfaces/IUpload";
import * as fs from "fs";

export class Upload {
    @POST("/")
    // @ts-ignore
    async postreq() {
        async function finalPost(req: Request<ParamsDictionary, any, IUpload>) {

        }
    }
}
