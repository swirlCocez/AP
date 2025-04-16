const { MongoClient, ServerApiVersion } = require('mongodb'); 
const uri = 
"mongodb+srv://nita63441:<password>@nitakshiAzad.yhbuk.mongodb.net/?retryWrites=true&w=major ity&appName=Nitakshi"; 
// Create a MongoClient with a MongoClientOptions object to set the Stable API version 
const client = new MongoClient(uri, { 
serverApi: { 
version: ServerApiVersion.v1, 
strict: true, 
deprecationErrors: true, 
} 
}); 
const connectDB = async () => { 
try { 
// Connect the client to the server (optional starting in v4.7) 
await client.connect(); 
// Send a ping to confirm a successful connection 
await client.db("admin").command({ ping: 1 }); 
console.log("Pinged your deployment. You successfully connected to MongoDB!"); 
} catch (err) { 
console.error(err.message); 
process.exit(1); 
} 
}; 
module.exports = { connectDB, client }; 
