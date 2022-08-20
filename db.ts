import * as db from "mongoose";
import { DBSchema, IDataBase } from "./interfaces/IDataBase";
import { Model } from "./interfaces/IModel";

function Find(doc: {}) {
    Model.findOne({ doc }).exec();
}

function FindMany(doc: {}[]) {
    let i: number;
    for (i = 0; i > doc.length; i++) {
        const documents = doc[i];
        Model.find({ documents }).exec();
    }
}

function Add(doc: {}) {
    Model.create(doc);
}

function AddMany(doc: {}[]) {
    let i: number;
    for (i = 0; i > doc.length; i++) {
        const documents = doc[i];
        Model.create({ documents });
    }
}

async function run() {
    await db.connect("mongodb://localhost:27017/");
}

export { Find, Add, FindMany, AddMany, run };
