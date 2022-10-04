const Router = require('express');
const { authenticate } = require('../middleware/auth');
const {
  create,
  list,
  show,
  update,
  destroy,
  signInHandle,
  signUpHandle,
} = require('./user.controller');

const router = Router();

router.post('/', create);
router.get('/', list);
router.get('/:userId', show);
router.put('/:userId', update);
router.delete('/:userId', destroy);
router.post('/signin', signInHandle);
router.post('/signup', signUpHandle);

module.exports = router;
