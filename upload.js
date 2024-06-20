const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

// Reemplaza con tu cadena de conexión de MongoDB Atlas
const uri = "mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.mzhoetl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function uploadData() {
    const client = new MongoClient(uri);

    try {
        console.time("Tiempo de carga");
        await client.connect();
        const database = client.db('marvelDB');
        const collection = database.collection('heroes');

        const filePath = path.join(__dirname, 'Marvel.json');
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

        const result = await collection.insertMany(data.results);
        console.timeEnd("Tiempo de carga");

        console.log(`${result.insertedCount} documentos insertados.`);
    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
}

uploadData();
