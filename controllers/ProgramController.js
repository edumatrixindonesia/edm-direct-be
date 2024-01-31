import Program from "../models/ProgramModel.js";

export const getProgram = async(req, res) =>{
    try {
        const response = await Program.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getProgramById = async(req, res) =>{
    try {
        const response = await Program.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createProgram = async(req, res) =>{
    try {
        await Program.create(req.body);
        res.status(201).json({msg: "Program Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateProgram = async(req, res) =>{
    try {
        await Program.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Program Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteProgram = async(req, res) =>{
    try {
        await Program.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Program Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}