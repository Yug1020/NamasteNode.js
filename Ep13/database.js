import { MongoClient, ObjectId } from "mongodb";
// import { Cursor } from "mongoose";


async function  main() {
    
    const uri = "mongodb+srv://yugandhardhore_admin:eYrNXpTkK5aAYCSm@namastenode1.hbw2xwc.mongodb.net/?appName=NamasteNode1";
    const client = new MongoClient(uri)

    try{

        //building connection with atlas's database
        await client.connect().then(console.log("successfully connected to cluster"))
        // const adminDB = client.db().admin()
        // adminDB ? console.log("admindb connected"): console.log("Admindb not connected")
        // const database = client.db("admins_journey")
        // const movies = client.db("sample_mflix")
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
    
        const ignore = new ObjectId("6a2c20f7e1d0518c09948631")
        const cursor = await carFactory.find({price_unit:"Cr"}).sort({name:1}).limit(2).skip(2)  //here skip will ignore first 2 docs
        for await (const model of cursor){
            console.log(model)
        }

    }
    finally{
        await client.close()
    }
}

main().catch(console.dir);