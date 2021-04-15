const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/


const clientSchema = new Schema({
  name: { type: String, required: true, unique: true, trim: true },
  age: { type: Number, required: true },
  accountActive: { type: Boolean, default: true },
  balance: { type: Number, default: 0 },
  payments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Payment" }],
  // password: { type: String, minlength: 3, maxlength: 10, match: PASSWORD_REGEX }
  // role: { type: String, enum: ["Host", "Client"]}
});

// Model: Client - Collection: clients
const Client = mongoose.model('Client', clientSchema);

// Export Client model
module.exports = Client;


// type	String, Number, …	Sets a type for the field
// default	Anything	Sets a default value
// required	true	Adds a required validator
// unique	true	Declares an unique index
// enum	An array	Adds an enum validator
// min	A number	Sets a minimum number validator
// max	A number	Sets a maximum number validator
// minlength	A number	Sets a minimum length validator
// maxlength	A number	Sets a maximum length validator
// trim	true	Adds a trim setter
// lowercase	true	Adds an lowercase setter
// match	A regex	Sets a regex validator