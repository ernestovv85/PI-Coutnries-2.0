import { Router } from 'express'
import countries from './countriesRoutes'
import activities from './activitiesRoutes'

const router = Router();
router.use('/countries', countries);
router.use('/activities', activities);

export default router;