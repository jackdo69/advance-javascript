import express from 'express';
import User from '../controllers/user';

const userController = new User();
const router = express.Router();

router.get('/', (req, res) => {
  const data = userController.getAll();
  res.send(data);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const data = userController.getById(id);
  res.send(data);
});

export default router;
