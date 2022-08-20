import { model } from "mongoose";
import { IDataBase, DBSchema, IAuthorization, AuthSchema } from "./IDataBase";

export const Model = model<IDataBase>("bsml_schema", DBSchema);
export const AuthModel = model<IAuthorization>("bsml_auth", AuthSchema);