import { MongoClient, ObjectId, ReturnDocument } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

async function  main() {
    const uri = process.env.MONGODB
    const client = new MongoClient(uri)
    try{
        await client.connect();
        const factory = client.db("Factory");
        const carFactory = factory.collection("carFactory")

        const sample_mflix = client.db("sample_mflix")
        const movies = sample_mflix.collection("movies")

    // You can modify documents in a MongoDB collection by using update and replace operations. 
    // Update operations modify the fields and values of a document while keeping other fields 
    // and values unchanged. Replace operations substitute all fields and values in an existing document 
    // with specified fields and values while keeping the _id field value unchanged.    
    //set field update

    //update one
      // const field = { _id:new ObjectId("6a32ad3b595d910de1af366b")}
      // const update = { $set:{name:"Jaguar"}}
      // const update = {$set:{price:8}}
      // const option = {upsert:true};
      // const cursor = await carFactory.updateOne(field, update);
      // console.log("Matched:", cursor.matchedCount);
      // console.log("Modified:", cursor.modifiedCount);
      
    //update many
      // await carFactory.updateMany(
      //   { price_unit: "Cr" },
      //   [
      //     {
      //       $set: {
      //         advantage: {
      //           $concat: ["$advantage", " luxury car"]
      //         }
      //       }
      //     }
      //   ]
      // );        
      // console.log("Matched:", cursor.matchedCount);
      // console.log("Modified:", cursor.modifiedCount);
      // await cursor.close()
    

    //replace and findOneAndReplace
      // const query = {_id : new ObjectId("6a32ad07595d910de1af3668")}
      // const doc = {name: "BMW", advantage:"speed", problem: "safety", price: 1.96, price_unit: "Cr", type:"four wheeler"}
      // const result = await carFactory.replaceOne
      // (
        // query, 
        // doc
      // )
      // console.log("match count",result.matchedCount)
      // console.log("modified count", result.modifiedCount)

      const field = {_id:new ObjectId("6a32ad18595d910de1af3669")}
      const replace = { name: "Marcedes", advantage: "luxury", problem: "Speed", price: 1.5, price_unit: "Cr", type: "four wheeler"}
      const cursor = await carFactory.findOneAndReplace
      (
        field,
        replace,
        {
          returnDocument: ReturnDocument.AFTER
        }
      )
      console.log(cursor)
    

    //update an array
      const field = {_id: new ObjectId("573a1390f29313caabcd42e8")}
      const doc = {$set:{"languages.$[]":"Hindi"} }

      const cursor = await movies.updateOne(field, doc)

      console.log("matched", cursor.matchedCount)
      console.log("modified", cursor.modifiedCount)



    }catch(err){
        console.log(err)
    }
    finally{
        await client.close()
    }
}

main()