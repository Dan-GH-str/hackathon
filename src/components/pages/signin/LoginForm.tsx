'use client'

import React, {FormEvent, useState} from 'react';
import { Button } from '@mui/material';
import Link from 'next/link';
import ValidatedTextField from '@/components/ValidatedTextField/ValidatedTextField';
import { emailValidator, passwordValidator, repeatedPasswordValidator } from '@/utils/validator';
 
 
const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
 
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(email, password) 
    }
 
    return (
        <>
            <h2 className="text-slate-900 dark:text-slate-50 mb-3">Форма авторизации</h2>
            <form onSubmit={handleSubmit}>
                <ValidatedTextField
                    onChange={setEmail}
                    validator={emailValidator}
                    fieldProps={{
                        type: "email",
                        variant: 'outlined',
                        color: 'primary',
                        label: "Email",
                        value: email,
                        fullWidth: true,
                        required: true,
                        sx: {mb: 4},
                    }}
                />
                <ValidatedTextField
                    onChange={setPassword}
                    validator={passwordValidator}
                    fieldProps={{
                        type: "password",
                        variant: 'outlined',
                        color: 'primary',
                        label: "Пароль",
                        value: password,
                        required: true,
                        fullWidth: true,
                        sx: {mb: 2}
                    }}
                />
                <Button variant="outlined" className="text-sky-500 dark:text-sky-400 border-sky-400 capitalize mb-1" type="submit">Войти</Button>
            </form>
            <small>Нет аккаута? <Link className="text-sky-500 dark:text-sky-400 hover:underline" href="/signup">Зарегестрироваться</Link></small>
        </>
    )
}
 
export default LoginForm;