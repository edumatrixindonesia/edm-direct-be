import express from "express";
import {
  getIbuKota,
  getIbuKotaById,
  updateIbuKota,
  saveIbuKota,
  deleteIbuKota,
} from "../controllers/IbuKotaKabController.js";

const router = express.Router();

router.get("/ibukotakab", getIbuKota);
router.get("/ibukotakab/:id", getIbuKotaById);
router.post("/ibukotakab", saveIbuKota);
router.patch("/ibukotakab/:id", updateIbuKota);
router.delete("/ibukotakab/:id", deleteIbuKota);

export default router;

// const express = require("express");
// const router = express.Router();
// const { Kota, District } = require("../models");

// Create a new city
// router.post("/", async (req, res) => {
//   try {
//     const newKota = await Kota.create({
//       name: req.body.name,
//       slug: req.body.slug,
//       image: req.body.image,
//       url: req.body.url,
//     });
//     res.status(200).json(newKota);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// Create a new district within a city
// router.post("/:id/districts", async (req, res) => {
//   try {
//     const newDistrict = await District.create({
//       name