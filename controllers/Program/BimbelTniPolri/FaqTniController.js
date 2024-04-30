import Faqtni from "../../../models/Program/BimbelTniPolri/FaqTniModel.js";

export const getFaqtni = async(req, res) =>{
    try {
        const response = await Faqtni.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getFaqtniById = async(req, res) =>{
    try {
        const response = await Faqtni.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createFaqtni = async(req, res) =>{
    try {
        await Faqtni.create(req.body);
        res.status(201).json({msg: "Faqtni Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateFaqtni = async(req, res) =>{
    try {
        await Faqtni.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Faqtni Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteFaqtni = async(req, res) =>{
    try {
        await Faqtni.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Faqtni Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}