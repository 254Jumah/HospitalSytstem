import mongoose from 'mongoose';

const hospitalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique:true,    
  },
  username: {
    type: String,
    unique:true, 
    required:true,   
  },
  email: {
    type: String,
    unique:true,  
    required:true  
  },
  password: {
    type: String,
    required:true    
  },
},
  {timestamps: true });   

const Hospital = mongoose.model('Hospital', hospitalSchema);

export default Hospital;