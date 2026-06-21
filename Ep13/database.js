import { MongoClient, ObjectId } from "mongodb";
// import { Cursor } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

async function  main() {
    
    const uri = process.env.MONGODB;
    const client = new MongoClient(uri)

    try{

        //building connection with atlas's database
        await client.connect()
        // console.log("successfully connected to cluster")
        // const adminDB = client.db().admin()
        // adminDB ? console.log("admindb connected"): console.log("Admindb not connected")
        // const database = client.db("admins_journey")
        const sample_mflix = client.db("sample_mflix")
        const movies = await sample_mflix.collection("movies")
    // creating a DB
        const factory = await client.db("Factory")
        factory ? console.log("connected to factory db"):console.log("db not online")

    // // checking database collection
    //     const versions = database.collection("till22")
    //     versions ? console.log("connection made successfully") : null

    // following are the collection queries

    //     //creating new collection list
    //         const NewCollection = await database.createCollection("example_collection")
    //         NewCollection ? console.log("new collection has been created") : null     


    // // getting collection list from database
    //     const myDbCollectionList = await database.listCollections().toArray()
    //     console.log(myDbCollectionList)


    // // delete collection
    //     const deleteCollection = await database.collection("example_collection").drop()
    //     console.log("is collection deleted", deleteCollection)
        

    // //getting collection list by nameonly, following command only provide name of collection and collection type
    //     const myCollectionListNameOnly = await database.listCollections({}, {nameOnly:true}).toArray();        
    //     console.log(myCollectionListNameOnly)        

    // //listing all the databse in atlas cluster
    //     const allDatabase = await adminDB.listDatabases()
    //     allDatabase.databases.forEach(db => {
    //         console.log(`${db.name} (Size on disk: ${db.sizeOnDisk} bytes)`)
    //     })

    //creating a collection
        const carFactory = await factory.createCollection("carFactory")

    // //creating a document in carFactory collection of factory DB
    //     const document = {name:"BMW", advantage:"fast", problem:"safety", price:"1.35", price_unit:"Cr"}
    //     const oneIn = await carFactory.insertOne(document)
    //     console.log(oneIn.insertedId)
        
    // // creating many documents in carFactory collection of factory DB
    //     try{
        // const document = [
        //                     {name:"Marcedes", advantage:"Safe", problem:"Speed", price:"1.50", price_unit:"Cr"},
        //                     {name:"Ferrari", advantage:"Speed", problem:"No modification", price:"2.95", price_unit:"Cr"},
                            
        //                     //inserting with manual id's
                            
        //                     // {_id:"1", name:"Jaguar", advantage:"Tata product"},
        //                     // {_id:"2", name:"hero", advantage:"best bikes"}
        //                 ]
        
        // const manyIn = await carFactory.insertMany(document);
        
        // let ids = manyIn.insertedIds

        // for (let id of Object.values(ids)){
        //     console.log("Insterted id",id)
        // }}catch{
        //     console.log("something is wrong with instering many files")
        // }

    // //finding a documents with no parameters
    //     const result1 = await carFactory.find().toArray()
        // console.log(result1);


    // //finding documents with parameter
    //     const para =  {_id: { $in: ["1", "2"] }}

    //     const result2 = await carFactory.find(para).toArray()
    //     console.log(result2)

    //     const result3 = await carFactory.findOne({_id:new ObjectId('6a2c1bce531096924130e82d')})
    //     console.log(result3)

    //cursor chaining method

        // await carFactory.insertOne({_id:0, name:"Audi", price_unit:"Cr", price:"2.00"})
    
        // const ignore = new ObjectId("6a2c20f7e1d0518c09948631")
        // const cursor = await carFactory.find({price_unit:"Cr"}).sort({name:1}).limit(2).skip(2)  //here skip will ignore first 2 docs
        // for await (const model of cursor){
        //     console.log(model)
        // }
    
    //Specify Which Fields to Return

        // const projectFields = { name: 1 };
        // const docsArray = await carFactory.find().project(projectFields).toArray();
        // console.log(docsArray);
    
    //Specify a Query

        // const query = { price:"1.35" };
        // const cursor = carFactory.find(query);
        // for await (const doc of cursor) {
        //   console.dir(doc);
        // }

        // const qur1 = {price:{$eq:"1.50"}};
        // const cursor1 = carFactory.find(qur1);
        // for await (const doc1 of cursor1){
        //     console.log(doc1)
        // }

        // const qur2 = {price:{$gt:"2.1"}};
        // const cursor2 = carFactory.find(qur2);
        // for await (const doc1 of cursor2){
        //     console.log(doc1)
        // }

        // console.log("\nprint car prices who's price_unit is not lac(Cr)\n")
        // const qur3 = {price:{$not:{$eq:"Lac"}}};
        // const cursor3 = carFactory.find(qur3);
        // for await (const doc1 of cursor3){
        //     console.log(doc1)
        // }
        
        // console.log("\nprint car prices who has a problem\n")
        // const q5 = {problem:{$exists:true}}
        // const cursor4 = await carFactory.find(q5).toArray()
        // for await (const doc of cursor4){
        //     console.log(doc)
        // }

        // console.log("\nprint car prices can be divisible by 2\n")

        // const q6 = {price:{$mod: [2, 0]}}
        // const cursor5 = await carFactory.find(q6).toArray()
        // // console.log(cursor5)
        // for await (const doc of cursor5){
        //     console.log(doc)
        // }


    // Count Document
        // const cursor1 = await carFactory.countDocuments();
        // console.log(cursor1)

        // const cursor = await carFactory.estimatedDocumentCount();
        // console.log(cursor)

        // estimatedDocumentCount() is faster than countDocuments() because the estimation uses the collection's metadata rather than scanning the collection. 
        // countDocuments() takes longer to return, but provides an accurate count of the number of documents and supports specifying a filter. 

        // const count = await carFactory.countDocuments({price:{$gt:1.5}});
        // console.log(count);

        // const count = await carFactory.countDocuments({}).hint("_id");   ???????????
        // console.log(count)       ??????????

    // Retrieve Distinct Values
        // const myDB = client.db("myDB");
        // const myColl = myDB.collection("restaurants");

        // await myColl.insertMany([
        //   { "_id": 1, "restaurant": "White Bear", "borough": "Queens", "cuisine": "Chinese" },
        //   { "_id": 2, "restaurant": "Via Carota", "borough": "Manhattan", "cuisine": "Italian" },
        //   { "_id": 3, "restaurant": "Borgatti's", "borough": "Bronx", "cuisine": "Italian" },
        //   { "_id": 4, "restaurant": "Tanoreen", "borough": "Brooklyn", "cuisine": "Middle Eastern" },
        //   { "_id": 5, "restaurant": "Äpfel", "borough": "Queens", "cuisine": "German" },
        //   { "_id": 6, "restaurant": "Samba Kitchen", "borough": "Manhattan", "cuisine": "Brazilian" },
        // ]);

        // const snapshot = await myColl.distinct("borough");
        // const snapshot1 = await myColl.distinct("borough", {borough:{$ne:"Brooklyn"}});
        // console.log(snapshot)
        // console.log(snapshot1)
    
    // ran Query Text on mongo's collection named movies
        // await carFactory.createIndex({name:"text"});
        // const qur = await movies.find({$text:{$search:"\"star trek"\"}}).limit(2).project({_id:0, title:1});

        // for await (const doc of qur){
        //     console.dir(doc)
        // }

    //create an index and ran query text on my collection
        // // 1. Create the text index on the 'name' field (Correct!)
        // await carFactory.createIndex({ name: "text" });
        // // await carFactory.dropIndex("name_text")

        // // 2. Query using $text and project the correct field
        // const qur = await carFactory
        //     .find({ $text: { $search: "BMW" } })
        //     .limit(2)
        //     .project({ _id: 0, name: 1 }) // <-- Changed 'title' to 'name'
        //     .toArray();

        // // 3. Print the results
        // for (const doc of qur) {
        //     console.dir(doc);
        // }

        // const indexdetails = await carFactory.listIndexes().toArray();
        // console.log(indexdetails)

    // stream API

        // const cursor69 = await carFactory.find({});
        
        // await new Promise((resolve, reject) => {
        //     const stream = cursor69.stream();
                
        //     cursor69.on("data", doc => {
        //         console.log(doc);
        //     });
        
        //     cursor69.on("end", () => {
        //         console.log("\n--- Stream Finished ---");
        //         resolve(); // Allows the try block to finish, moving onto finally
        //     });
        
        //     cursor69.on("error", err => {
        //         reject(err);
        //     });
        // });
    
    //Rewind() method
        // const cursor = carFactory.find({});
        // const firstResult = await cursor.toArray();
        // console.log("First count: " + firstResult.length);
        // await cursor.rewind();
        // const secondResult = await cursor.toArray();
        // console.log("Second count: " + secondResult.length);

    //Abort cursor in middle of the operation

        const abortController = new AbortController();
        const {signal} = abortController;

        process.on("signal", () => abortController.abort(new Error("^C pressed")));

        try{
            const cursor99 = await carFactory.find({}, {signal})
            for await (const doc of cursor99){
                console.log(doc)
            }
        }catch{
            if (error === signal.reason){
                console.log(signal.reason)
            }else{
                console.log("Error", error)
            }
        }

    }   
    finally{
        await client.close()
    }
}

main().catch(console.dir);