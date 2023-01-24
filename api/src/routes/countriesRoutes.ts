import { Router } from "express";
import {
  getAllCountries,
  findByName,
  findById,
  updateCountry,
  deleteCountry,
} from "../controllers/countriesC";

const router = Router();

router.get("/", async (req, res) => {
  const name = req.query.name;
  try {
    if (name) {
      const country = await findByName(String(name));
      res.status(200).json(country);
    } else {
      const countries = await getAllCountries();
      res.status(200).json(countries);
    }
  } catch (error) {
    res.send({error: error});
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const idCountry = await findById(String(id));
    res.status(200).json(idCountry);
  } catch (error) {
    res.send({error: error});
  }
});

router.put("/:id", async (req, res) => {
  const body = req.body;
  const id = req.params.id;
  try {
    const updated = await updateCountry(id, body);
    res.status(200).json(updated);
  } catch (error) {
    res.send({error: error});
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deleted = await deleteCountry(id);
    res.status(200).send(deleted + " País ha sido borrado exitosamente");
  } catch (error) {
    res.send({error: error});
  }
});

export default router;
