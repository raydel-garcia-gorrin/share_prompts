import { Schema, model, models } from 'mongoose'

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'El email ya existe!'],
    required: [true, 'El email es obligatorio!']
  },
  username: {
    type: String,
    required: [true, 'El nombre de usuario es obligatorio!'],
    match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Nombre de usuario invalido, debe contener de 8 a 20 caracteres alfanumericos y debe ser unico!"]
  },
  image: {
    type: String,
  }
});

const User = models.User || model("User", UserSchema)

export default User;