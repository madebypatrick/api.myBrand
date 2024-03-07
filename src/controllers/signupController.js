import bcrypt from 'bcrypt';
import User from "../model/user.js";
import { validationResult, check } from 'express-validator';

const signupValidation = [
    check('email').isEmail().normalizeEmail().withMessage("Please check your email format!"),
    check('password').isLength({ min: 8 }).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, "i").withMessage('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character'),
];

const signupController = async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password } = req.body;

    try {
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = await User.create({ fullname, email, password: hashedPassword });
        res.status(201).json({
            message: "New user created successfully",
            data: newUser
        });
    } catch (error) {
        if (error.code === 11000 && error.keyPattern && error.keyPattern.email) {
            // Unique constraint violation for email field
            return res.status(400).json({ message: "Email is already in use" });
        }
        // Other server errors
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}

export { signupController, signupValidation };

