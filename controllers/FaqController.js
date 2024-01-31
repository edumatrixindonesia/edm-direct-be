import Faq from "../models/FaqModel.js";

export const getFaq = async(req, res) =>{
    try {
        const response = await Faq.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getFaqById = async(req, res) =>{
    try {
        const response = await Faq.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createFaq = async(req, res) =>{
    try {
        await Faq.create(req.body);
        res.status(201).json({msg: "Faq Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateFaq = async(req, res) =>{
    try {
        await Faq.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Faq Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteFaq = async(req, res) =>{
    try {
        await Faq.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Faq Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}