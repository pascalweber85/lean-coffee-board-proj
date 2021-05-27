const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

const url = 'mongodb//localhost:27017'

const dbName = 'lean-coffee-board'

MongoClient.connect(url, function (err, client) {
  assert.strictEqual(null, err)
  console.log('Connected correctly to server')

  const db = client.db(dbName)
  const collection = db.collection('users')

  collection.insertOne({ name: 'Passi', age: 36, email: 'PW@gmail.com' })

  client.close()
})
