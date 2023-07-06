import { check } from "express-validator";

export const LoginSchema=[
    check('username','username does not exist').exists().isAlphanumeric().withMessage("username is required").isLength({
        min:6,
        max:32
    }),
    check('password','at least 8 letters').isLength({
        min:8,
        max:50
    })
]