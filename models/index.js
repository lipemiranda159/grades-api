import mongoose from "mongoose";

const db = {};
db.mongoose = mongoose;
db.url = `${process.env.MONGODB}${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}${process.env.URI}`;

const gradesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
    //Valida se a nota inserida e' menor que zero
    validate(value) {
      if (value < 0) throw new Error("Valor negativo para nota");
    },
  },
  lastModified: {
    type: Date,
    default: Date.now,
  },
});

const gradesModel = mongoose.model("grade", gradesSchema, "grade");

export { gradesModel };
