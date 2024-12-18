const mongoose =require('mongoose')

const gameSchema= mongoose.Schema({
    title:{type:String,required:true},
    price:{type:Number,required:true},
    description:{type:String,required:true},
    releasedate:{type:String,required:true},
    image: { type: String },
    video:{type: String},
    // Relationships
    genre: [
        { type: mongoose.SchemaTypes.ObjectId, ref: 'Genre' },
    ],
    publisher: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Publisher", // Reference to Publisher schema
        required: true,
    }
},
{timestamps: true})
const Game = mongoose.model("Game",gameSchema)
module.exports=Game