import Activity, { IActivity } from "../Models/Activity";

export async function findActivities(){
  const allActivities = await Activity.find();
  return allActivities;
}

export async function findByName (name: String) {
  const activity = await Activity.find({name: { $regex: name }})
  return activity;
}

export async function findById (id: String) {
  const activity = await Activity.findById(id);
  return activity;
}

export async function addActivity (body: IActivity) {
  const {name, difficulty, duration, season} = body
  const newActivity = new Activity({
    name,
    difficulty,
    duration,
    season
  })
  const activitySave = await newActivity.save()
  return activitySave;
}

export async function updateActivity (id: String, body: IActivity) {
  const {name, difficulty, duration, season} = body;
  const update = await Activity.findByIdAndUpdate(id, {
    name,
    difficulty,
    duration,
    season
  })
  return update;
}

export async function deleteActivity (id: String) {
  const del = await Activity.findByIdAndDelete(id);
  return del;
}