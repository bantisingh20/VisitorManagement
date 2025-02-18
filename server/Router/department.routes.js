const express = require('express');
const { Department } = require('../Model/department.model');
const router = express.Router();

  
router.post('/add', async (req, res) => {
    try {

        console.log(req.body);
        const { departmentname, recordstatus, disabled, isdeleted } = req.body;

        if (!departmentname) {
            return res.status(400).json({ message: 'Missing required fields' });
        }
      

        const IsExists = await Department.findOne({ where: { departmentname } });

        if(IsExists){
           return res.status(400).json({success:false, message:'Department Already Exists'});
        }
        const newDepartment = await Department.create({
            departmentname,
            recordstatus,
            disabled,
            isdeleted,
        });
        res.status(201).json(newDepartment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to create department' });
    }
});

// Get all departments
router.get('/', async (req, res) => {
    try {
        const departments = await Department.findAll();
        res.status(200).json(departments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch departments' });
    }
});

// Get a single department by ID
router.get('/:id', async (req, res) => {
    try {
        const department = await Department.findByPk(req.params.id);
        if (department) {
            res.status(200).json(department);
        } else {
            res.status(404).json({ message: 'Department not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch department' });
    }
});

// Update a department
router.put('/:id', async (req, res) => {
    try {
        const { departmentname, recordstatus, disabled, isdeleted } = req.body;
        const department = await Department.findByPk(req.params.id);
        if (department) {
            department.departmentname = departmentname || department.departmentname;
            department.recordstatus = recordstatus || department.recordstatus;
            department.disabled = disabled || department.disabled;
            department.isdeleted = isdeleted || department.isdeleted;

            await department.save();
            res.status(200).json(department);
        } else {
            res.status(404).json({ message: 'Department not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to update department' });
    }
});

// Delete a department
router.delete('/:id', async (req, res) => {
    try {
        const department = await Department.findByPk(req.params.id);
        if (department) {
            await department.destroy();
            res.status(200).json({ message: 'Department deleted successfully' });
        } else {
            res.status(404).json({ message: 'Department not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to delete department' });
    }
});

  module.exports = router;
