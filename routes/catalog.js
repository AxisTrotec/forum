var express = require('express');
var router = express.Router();

var general_controller = require('../controllers/generalController');
var offtopic_controller = require('../controllers/offtopicController');
var technology_controller = require('../controllers/technologyController');

router.get('/', general_controller.index);
router.get('/general/create', general_controller.general_create_get);
router.post('/general/create', general_controller.general_create_post);
router.get('/general/:id/delete', general_controller.general_delete_get);
router.post('/general/:id/delete', general_controller.general_delete_post);
router.get('/general/:id/update', general_controller.general_update_get);
router.post('/general/:id/update', general_controller.general_update_post);
router.get('/general/:id', general_controller.general_detail);
router.get('/general', general_controller.general_list);


router.get('/offtopic/create', offtopic_controller.offtopic_create_get);
router.post('/offtopic/create', offtopic_controller.offtopic_create_post)
router.get('/offtopic/:id/delete', offtopic_controller.offtopic_delete_get);
router.post('/offtopic/:id/delete', offtopic_controller.offtopic_delete_post);
router.get('/offtopic/:id/update', offtopic_controller.offtopic_update_get);
router.post('/offtopic/:id/update', offtopic_controller.offtopic_update_post);
router.get('/offtopic/:id', offtopic_controller.offtopic_detail);
router.get('/offtopic', offtopic_controller.offtopic_list);


router.get('/technology/create', technology_controller.technology_create_get);
router.post('/technology/create', technology_controller.technology_create_post);
router.get('/technology/:id/delete', technology_controller.technology_delete_get);
router.post('/technology/:id/delete', technology_controller.technology_delete_post);
router.get('/technology/:id/update', technology_controller.technology_update_get);
router.post('/technology/:id/update', technology_controller.technology_update_post);
router.get('/technology/:id', technology_controller.technology_detail);
router.get('/technology', technology_controller.technology_list);

module.exports = router;
