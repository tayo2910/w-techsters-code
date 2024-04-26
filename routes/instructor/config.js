const instructorController = require('../controllers/instructorControllers.js');

app.post('/instructor', [
  instructorController.create
]);

app.get('/instructor/:instructorId', [
    instructorController.getById
]);

app.patch('/instructor/:instructorId', [
    instructorController.getById
]);

app.delete('/instructor/:instructorId', [
    instructorController.getById
]);