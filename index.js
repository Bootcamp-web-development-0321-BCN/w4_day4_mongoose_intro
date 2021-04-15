const mongoose = require('mongoose');
const Client = require('./models/Client.model');
const data = require('./data');
const DBNAME = 'ironhack-bank';

// Create the connection
mongoose.connect(`mongodb://localhost:27017/${DBNAME}`)
  .then(() => {
    console.log('Connected to Mongo Database')
  })
  .catch(error => console.error(error));

const client1 = {
  name: "Pau",
  accountActive: true,
  age: 21,
  balance: 5000,
  payments: []
}

// (C)reate

Client.create(client1)
  .then(client => {
    console.log(`Client created: ${client.name}`)
  })
  .catch(error => console.error(error));

Client.find({})
  .then(clients => {
    if (clients.length === 0) {
      Client.insertMany(data)
        .then(data => {
          console.log(`Clients created: ${data.length}`)
        })
        .catch(error => console.error(error));
    }
  })



// (R)ead
Client.find({}, { name: 1, _id: 0 })
  .then(clients => console.log(clients))
  .catch(error => console.error(error))

Client.findOne({ name: "Chris Dixon" })
  .then(client => console.log(client))
  .catch(error => console.error(error))

Client.findOne({ _id: "6078130a2c05bc59d1dff0d4" })
  .then(client => console.log(client))
  .catch(error => console.error(error))

Client.findById("6078130a2c05bc59d1dff0d4")
  .then(client => console.log(client))
  .catch(error => console.error(error))


// (U)pdate
const newPayments = [{ amount: 400 }, { amount: 100 }, { amount: 300 }];
Client.findOneAndUpdate({ _id: "6078130a2c05bc59d1dff0d4" }, { $set: { payments: newPayments } }, { new: true })
  .then(client => {console.log(client)})
  .catch(error => console.error(error))

// Client.updateMany({ }, { $set: { payments: newPayments } }, { new: true })
// Client.findByIdAndUpdate("6078130a2c05bc59d1dff0d5", { $set: { payments: newPayments } }, { new: true })


// (D)elete
Client.deleteOne({ name: "Pau"})
.then(client => console.log(client))
.catch(error => console.error(error))

Client.deleteMany({ name: "Claire"})
.then(clients => console.log(clients))
.catch(error => console.error(error))

// Client.findByIdAndRemove("6078130a2c05bc59d1dff0d5")