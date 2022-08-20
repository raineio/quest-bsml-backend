import { GET} from "../routes/router";
import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";

export class GetDocument {
    @GET("/json_store")
    // @ts-ignore
    async getreq() {
        async function finalGet(req: Request<ParamsDictionary, any>) {
            
        }
    }
}