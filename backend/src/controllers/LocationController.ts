import { Request, Response } from "express";
import Location from "../models/Location";

export const CreateNewLocation = async (req:Request, res: Response)=>{
    try{
        const newLocation = await Location.create(req.body);
        res.status(200).json({success:true, data:newLocation})
    }
    catch(error){
        res.status(400).json({
            success:false,
            error:(error as Error).message,
        })
    }
}

export const GetAllLocation = async(req: Request, res: Response) =>{
    try {
        const allLocations = await Location.find({});
        res.status(200).json({success:true, data: allLocations})
    } catch (error) {
        res.status(400).json({
            success:false,
            error:(error as Error).message,
        })
    }
}

