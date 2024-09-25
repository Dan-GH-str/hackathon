'use client'

import React, {FormEvent, useState} from 'react';
import { Button, Stack } from '@mui/material';
import Link from 'next/link';
import ValidatedTextField from '@/components/ValidatedTextField/ValidatedTextField';
import { emailValidator, nameValidator, passwordValidator, repeatedPasswordValidator } from '@/utils/validator';
 
 
const RegisterForm = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatedPassword, setRepeatedPassword] = useState('')
 
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(firstName, lastName, email, password) 
    }
 
    return (
        <>
            <h2 className="text-slate-900 dark:text-slate-50 mb-3">Форма регистрации</h2>
            <form onSubmit={handleSubmit}>
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <ValidatedTextField
                        onChange={setFirstName}
                        validator={nameValidator}
                        fieldProps = {{
                            type: "text",
                            variant: 'outlined',
                            color: 'primary',
                            label: "Имя",
                            value: firstName,
                            fullWidth: true,
                            required: true
                        }}
                    />
                    <ValidatedTextField
                        onChange={setLastName}
                        validator={nameValidator}
                        fieldProps={{
                            type: "text",
                            variant: 'outlined',
                            color: 'primary',
                            label: "Фамилия",
                            value: lastName,
                            fullWidth: true,
                            required: true
                        }}
                    />
                </Stack>
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
                        sx: {mb: 4}

                    }}
                />
                <ValidatedTextField
                    onChange={setRepeatedPassword}
                    validator={(e: string) => repeatedPasswordValidator(password, e)}
                    fieldProps={{
                        type: "password",
                        variant: 'outlined',
                        color: 'primary',
                        label: "Повторите пароль",
                        value: repeatedPassword,
                        required: true,
                        fullWidth: true,
                        sx: {mb: 2}
                    }}
                />
                <Button variant="outlined" className="text-sky bg-sky capitalize mb-1" type="submit">Зарегестрироваться</Button>
            </form>
            <small>Уже есть аккаунт? <Link className="text-sky-500 dark:text-sky-400 hover:underline" href="/signin">Войдите здесь</Link></small>
        </>
    )
}
 
export default RegisterForm;