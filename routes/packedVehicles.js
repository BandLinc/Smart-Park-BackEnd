const express=require ('express')
const router=express.Router()

const PackedVehicles=require('../models/parkedvehicles')


//Get all PackedVehicles availlable
router.get('/',async(req,res)=>{
    try {
        const packedvehicles=await PackedVehicles.find()
        res.json(packedvehicles)
    }catch {
        res.send('Error :'+err)
    }
})

//Add New Packed Vehicle
router.post ('/',async(req,res)=>{
    const pack_vehicle = new PackedVehicles ({
        reg_no:req.body.reg_no,
        parking_spot:req.body.parking_spot,       
    })  
    try {
        const a1=await pack_vehicle.save()
        res.json(a1)
    }catch (err) {
       res.send('Error : '+err)
    }
}) 

//Pack a Vehicle at a spot
router.get('/lot/name/:spot_name',async(req,res)=>{
    try {
        const parkingspots=await PackingSpot.find({parking_lot:req.params.spot_name})
        res.json(parkingspots)
    }catch {
        res.send('Error :'+err)
    }
})

//Get Parking Spot by access type
router.get('/lot/access/:access_type',async(req,res)=>{
    try {
        const parkingspots=await PackingSpot.find({access_type:req.params.access_type})
        res.json(parkingspots)
    }catch {
        res.send('Error :'+err)
    }
})

module.exports=router

