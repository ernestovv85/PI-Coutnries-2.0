import { Router } from "express";
import {
  findActivities,
  findById,
  findByName,
  addActivity,
  updateActivity,
  deleteActivity,
} from "../controllers/activitiesC";

const router = Router();

router.get("/", async (req, res) => {
  const name = req.query.name;
  try {
    if(name){
      const activity = await findByName(String(name));
      res.status(200).json(activity);
    }else {
      const activities = await findActivities();
      res.status(200).json(activities);
    }
  }catch(error) {
    res.send({error: error});
  };
})

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try{
    const activity = await findById(String(id));
    res.status(200).json(activity);
  }catch(error) {
    res.send({error: error});
  };
})

router.post("/", async (req, res) => {
  const body = req.body;
  try{
    const add = await addActivity(body);
    res.status(201).json(add + " Actividad creada exitosamente");
  }catch(error) {
    res.send({error: error});
  };
})

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    const update = await updateActivity(id, body);
    res.status(200).json(update + " Actividad actualizada exitosamente");
  }catch(error) {
    res.send({error: error})
  }
})

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try{
    const supr = await deleteActivity(id);
    res.status(200).json(supr + "Actividad eliminada exitosamente")
  }catch(error) {
    res.send({error: error})
  }
})

export default router;
