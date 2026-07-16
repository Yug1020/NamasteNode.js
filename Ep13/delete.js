import { MongoClient, ObjectId, ReturnDocument } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

async function main() 
{
    const uri = process.env.MONGODB
    const client = new MongoClient(uri)

    try {
        await client.connect();
        const sample_mflix = client.db("sample_mflix");
        const theaters = sample_mflix.collection("theaters");

        //deleteOne
            // const field = {_id:new ObjectId("6a58e088ae98bb1166720e32")}
            // const deletedResult = await theaters.deleteOne(field)
            // console.log("deleted count", deletedResult.deletedCount)   output : deleted count 1

        //deleteMany
            // const field1 = 
            // {
            //     "location.geo.coordinates.1": {$gt:40, $lt:45}
            // }
            // const deleteManyResult = await theaters.deleteMany(field1)
            // console.log("deleted many count", deleteManyResult.deletedCount)  output : deleted many count 517

        //collection.findOneAndDelete()
            const field2 = 
            {
                _id : new ObjectId("59a47286cfa9a3a73e51e743")
            }
            const cursor = await theaters.findOneAndDelete(field2)

            if (cursor){console.log(cursor), console.log(cursor.location.geo.coordinates)};


    } catch (err) {
        console.log(err)
    }finally{
        await client.close();
    }
    
}

main()