const express = require('express'); 
const { SearchVisitorByNumber, GetVisitorById, GetAllVisitor } = require('../Controllers/Visitor.controller');
const { SaveVisitPurpose, GetAllPurpose } = require('../Controllers/visitpurpose.controller');
const { SaveEmployee, GetAllEmployees } = require('../Controllers/Employee.controller');
const router = express.Router();


router.post('/master/add-Employees', SaveEmployee);
router.get('/master/GetAllEmployees', GetAllEmployees);

router.post('/master/add-purpose', SaveVisitPurpose);
router.get('/master/GetAllPurpose', GetAllPurpose);

router.get('/visitor/visitor-search',SearchVisitorByNumber);
router.get('/visitor/GetVisitorDetailsById/:Visitorid',GetVisitorById);
router.get('/visitor/GetAllVisitor',GetAllVisitor);


module.exports = router;