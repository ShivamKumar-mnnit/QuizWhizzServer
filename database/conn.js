import mongoose from "mongoose";
import dotenv from 'dotenv';

import { MongoMemoryServer } from "mongodb-memory-server";
dotenv.config();

async function connect(){

    const mongod = await MongoMemoryServer.create();
    

    mongoose.set('strictQuery', true)
    // const db = await mongoose.connect(getUri);
    const db = await mongoose.connect(process.env.ATLAS_URI);
    console.log("Database Connected")
    return db;
}

export default connect;