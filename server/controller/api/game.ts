import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send('Hello World Games root');
});

router.get('/:name', (req, res) => {
  const { name } = req.params;

  res.send(name);
});

export default router;
