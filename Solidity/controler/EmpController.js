const Employee = require('../model/EmpModel')


async function demo(req, res) {

    return await res.json("Hello from anand ")
    console.log("demo calling")
}

async function getAllEmpList(req, res) {

    const allempUser = await Employee.find()
    console.log("getAllEmpList calling")
    res.json(allempUser)

}



async function empRegistration(req, res) {
    console.log("insertEmp calling")
    try {
        const normalizedEmail = (req.body.email || '').trim().toLowerCase();
        const EmpUser = await Employee.create({
            name: req.body.name || req.body.first_name,
            position: req.body.position,
            department: req.body.department,
            salary: req.body.salary,
            email: normalizedEmail,
            password: req.body.password
        });
        res.status(201).json({ message: "Employee Created successfully", EmpUser });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Employee registration failed",
            error: error.message
        });
    }
}

async function empLogin(req, res) {
    console.log("empLogin is calling")
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required"
            });
        }

        const normalizedEmail = email.trim().toLowerCase();

        // Await the database query to get the actual employee document
        const employee = await Employee.findOne({ email: normalizedEmail });
        if (!employee) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        // If the 10-minute lock period has expired, automatically reset lock and attempts
        if (employee.lockUntil && employee.lockUntil <= new Date()) {
            employee.loginAttempts = 0;
            employee.lockUntil = null;
            await employee.save();
        }

        // Check if account is currently locked
        if (employee.lockUntil && employee.lockUntil > new Date()) {
            const remainingTime = Math.ceil(
                (employee.lockUntil - new Date()) / 1000
            );

            return res.status(429).json({
                success: false,
                message: "Too many wrong attempts. Try again after 10 minutes.",
                remainingSeconds: remainingTime
            });
        }

        // Check password
        if (employee.password !== password) {
            employee.loginAttempts = (employee.loginAttempts || 0) + 1;

            if (employee.loginAttempts >= 3) {
                employee.lockUntil = new Date(
                    Date.now() + 10 * 60 * 1000
                );
                await employee.save();
                return res.status(429).json({
                    success: false,
                    message: "3 wrong attempts. Account locked for 10 minutes."
                });
            }

            await employee.save();
            return res.status(401).json({
                success: false,
                message: "Invalid email or password",
                attemptsRemaining: 3 - employee.loginAttempts
            });
        }

        // Reset login attempts on successful login
        employee.loginAttempts = 0;
        employee.lockUntil = null;
        await employee.save();

        return res.status(200).json({
            success: true,
            message: "Login successful",
            data: {
                id: employee._id,
                name: employee.name,
                email: employee.email,
                position: employee.position,
                department: employee.department
            }
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Login failed",
            error: error.message
        });
    }
}

async function getEmpById(req, res) {
    console.log("getEmpById calling")
    try {
        const employee = await Employee.findById(req.params.id);
        if (!employee) {
            return res.status(404).json({
                success: false,
                message: "Employee not found"
            });
        }
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching employee",
            error: error.message
        });
    }
}

async function deleteEmp(req, res) {
    console.log("deleteEmp calling")
    const allempUser = await Employee.find()
    res.json(allempUser)

}

module.exports = {
    getAllEmpList,
    deleteEmp,
    getEmpById,
    empLogin,
    empRegistration,

}