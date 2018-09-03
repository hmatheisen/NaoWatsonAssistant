/**
 * 
 * Cloud function used to find the last med stored in the mongo database.
 * For more informetion, check : https://console.bluemix.net/docs/openwhisk/index.html#index
 * 
 * This functions returns a Promise that resolves the last med stored in MongoDB (nothing to fancy)
 */

function main(params) {
    const { MongoClient } = require('mongodb');
    const url = 'mongodb://admin:QQFDDVQEPZTXSFVD@portal-ssl162-34.bmix-dal-yp-3a010191-34a0-4aa2-9b90-648b33786e50.1762601857.composedb.com:55417,portal-ssl160-33.bmix-dal-yp-3a010191-34a0-4aa2-9b90-648b33786e50.1762601857.composedb.com:55417/compose?authSource=admin&ssl=true';
    const dbName = 'compose';
    const collectionName = 'medicaments'
    
    const MongoConnection = new Promise((resolve, reject) => {
        MongoClient.connect(url, { useNewUrlParser: true}, (err, client) => {
            if (err) {
                reject(err);
            } else {
                resolve(client)
            }
        });
    });
    
    return new Promise((resolve, reject) => {
        MongoConnection
        .then(client => {
            const db = client.db(dbName);
            const collection = db.collection(collectionName);
            collection.find({}).sort({ createdAt: -1 }).toArray((err, docs) => {
                if (err) {
                    reject({response: err})
                } else {
                    try {
                        resolve({response: docs[0].nom});
                    } catch (err) {
                        resolve({response: 'no_med'})
                    }
                }
            });
        })
        .catch(err => {
            console.log(err);
        });
    });
}