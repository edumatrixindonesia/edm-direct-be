import FiturProgram from "../models/FiturProgramModel.js"

export const getFiturProgram = async(req, res) =>{
    try {
        const response = await FiturProgram.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getFiturProgramById = async(req, res) =>{
    try {
        const response = await FiturProgram.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createFiturProgram = async(req, res) =>{
    try {
        await FiturProgram.create(req.body);
        res.status(201).json({msg: "FiturProgram Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateFiturProgram = async(req, res) =>{
    try {
        await FiturProgram.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "FiturProgram Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteFiturProgram = async(req, res) =>{
    try {
        await FiturProgram.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "FiturProgram Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}