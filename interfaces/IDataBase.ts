import Mongoose from "mongoose";

interface IDataBase extends Mongoose.Document {
    types: string[];
    description: string;
    components: string[];
}

const DBSchema: Mongoose.Schema = new Mongoose.Schema<IDataBase>({
    types: Array,
    description: String,
    components: Array,
});

export { IDataBase, DBSchema };
