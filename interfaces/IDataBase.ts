import Mongoose from "mongoose";

interface IDataBase extends Mongoose.Document {
    types: string[];
    description: string;
    components: string[];
}

interface IAuthorization extends Mongoose.Document {
    authKey: string;
    applicationName: string;
}

const DBSchema: Mongoose.Schema = new Mongoose.Schema<IDataBase>({
    types: Array,
    description: String,
    components: Array,
});

const AuthSchema: Mongoose.Schema = new Mongoose.Schema<IAuthorization>({
    authKey: String,
    applicationName: {type: String, required: false},
});

export { IDataBase, IAuthorization, DBSchema, AuthSchema };
