import { Schema, model, Types } from "mongoose";

//*ESTO ES EL MOLDE PARA CREAR QUE ES EL SCHEMA
//*EL MODELO ES EL QUE TIENE LA FUNCIONALIDAD DE EDITAR, MODIFICAR, CREAR
const taskSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
  user: {
    type: Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export const TaskModel = model("Task", taskSchema);

//*done: significa si termino o no
//*ACA DONDE DEFINO LA RELACION
// user: {
//   type: Types.ObjectId,
//   ref: "User",
//   required: true,
// },
