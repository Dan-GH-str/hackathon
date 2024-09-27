'use client'

import React, {FormEvent, useRef} from 'react';
import Link from 'next/link';
import ValidatedTextField from '@/components/ValidatedTextField/ValidatedTextField';
import { emailValidator, passwordValidator } from '@/utils/Login-RegisterForm/validator';
import { formFieldsNames } from '@/utils/Login-RegisterForm/formFieldsNames';
import { getValues } from '@/utils/Login-RegisterForm/getValues';
import { BaseButton } from '@/components/UI/SubmitButton/BaseButton';

const LoginForm = () => {
    const { emailFieldName, passwordFieldName } = formFieldsNames
    // Обозначим форму для использования в последующих функциях
    const form = useRef<HTMLFormElement>(null)
 
    // Обработка сабмита формы
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        
        // Получение значений с формы
        // Все данные хранятся в виде <Имя_поля>: <Значение_поля>
        const formData = getValues(form.current!)

        // Результат 
        console.log(formData);
    }
 
    return (
        <>
            <form onSubmit={handleSubmit} ref={form}>
                <ValidatedTextField
                    validator={emailValidator}
                    fieldProps={{
                        name: emailFieldName,
                        type: "email",
                        variant: 'outlined',
                        color: 'primary',
                        label: "Email",
                        fullWidth: true,
                        required: true,
                    }}
                />
                <ValidatedTextField
                    validator={passwordValidator}
                    fieldProps={{
                        name: passwordFieldName,
                        type: "password",
                        variant: 'outlined',
                        color: 'primary',
                        label: "Пароль",
                        required: true,
                        fullWidth: true,
                    }}
                />
                <BaseButton type="submit" variant="outlined">Войти</BaseButton>
            </form>
            <small>Нет аккаута? <Link className="text-primary hover:underline" href="/signup">Зарегестрироваться</Link></small>
        </>
    )
}
 
export default LoginForm;