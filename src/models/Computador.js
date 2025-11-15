import mongoose from "mongoose";

const computadorSchema = new mongoose.Schema({
  //id: { type: mongoose.Schema.Types.ObjectId },
  fabricante: { type: String, required: true },
  modelo: { type: String },
  localizacao: { type: String },
  sistema_operacional: { type: String}

}, { versionKey: false });

const computadores = mongoose.model("computadores", computadorSchema);

export default computadores;
