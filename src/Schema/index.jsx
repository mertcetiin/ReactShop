import * as yup from 'yup'
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const loginSchema = yup.object().shape({
    email: yup
        .string()
        .email('Please enter a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .min(5, 'Please enter at least 5 characters')
        .matches(passwordRules, {
            message: 'Please enter at least 1 uppercase letter, 1 lowercase letter and 1 number',
        })
        .required('password is required'),
});


export const createSchema = yup.object().shape({
    email: yup
        .string()
        .email('Please enter a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .min(5, 'Please enter at least 5 characters')
        .matches(passwordRules, {
            message: 'Please enter at least 1 uppercase letter, 1 lowercase letter and 1 number',
        })
        .required('password is required'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Passwords do not match')
        .required('Re-entering the password is required'),
})