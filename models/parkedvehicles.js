const mongoose=require ('mongoose')

const packedVehicleSchema =new mongoose.Schema ({
    reg_no: {
        type:String,
        required:true
    },
    parking_spot: {
        type:String,
        required:true
    },
    created_at : {
        type:Date,
        default:Date.now()
    }
})

module.exports=mongoose.model('PackedVehicles',packedVehicleSchema)