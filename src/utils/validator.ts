// Функции валидирования полей формы регистрации/авторизации
export const nameValidator = (value: string): string => {
    if (value.length < 3) return "Имя/Фамилия должны содержать как минимум 2 символа"
    if (value.length > 20) return "Имя/Фамилия должны содержать не более 20 символов"
    if (!/^[a-zA-Zа-яА-ЯёЁ ]+$/.test(value))
      return "Поле должно содержать только пробелы, а также буквы кириллицы и латиницы"
    return ""
}
export const emailValidator = (value: string): string  => {
    if (!/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/.test(value))
        return "Неверно введён адрес электронной почты"
    return ""
}

export const passwordValidator = (value: string): string  => {
    if(!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(value))
        return "Пароль должен содержать от 6 до 16 латинских символов, хотя бы одну цифру и один специальный символ"
    return ""
}

export const repeatedPasswordValidator = (password: string, value: string): string => {
    if(password !== value) return "Пароли не совпадают"
    return ""
}