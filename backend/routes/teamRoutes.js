

const express = require('express');
const { createTeam, assignTask, getTeamProgress, getAssignedTasks, updateTaskStatus } = require('../controllers/TeamController');
const { deleteTeam } = require('../controllers/TeamController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// router.post('/team', createTeam);
router.post('/teams', authMiddleware, createTeam);
router.delete('/teams', authMiddleware, deleteTeam); 
router.post('/task/assign', assignTask);
router.get('/team/progress', getTeamProgress);
router.get('/task/assigned', getAssignedTasks); // New route for getting assigned tasks
router.put('/task/:taskId/status', updateTaskStatus); // New route for updating task status

module.exports = router;