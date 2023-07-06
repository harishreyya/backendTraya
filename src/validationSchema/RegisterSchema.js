import { check } from "express-validator";

export const RegisterSchema=[
    check('name').isAlpha().withMessage("alphabets only"),
    check('username','at least 6 letters').exists().isAlphanumeric().withMessage("username is required").isLength({
        min:6,
        max:32
    }),
    check('password','at least 8 letters').exists().isLength({
        min:8,
        max:50
    }),
    check('email','valid email is required').exists().isEmail(),
]