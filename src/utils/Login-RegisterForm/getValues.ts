export function getValues(form: HTMLFormElement): Record<string, string> {
    // Все данные хранятся в виде <Имя_поля>: <Значение_поля>
    const formData: Record<string, string> = {}

    // Сбор всех значений с формы
    Array.from(form.elements)
        .filter((el) => el instanceof HTMLInputElement)
        .forEach((el) => formData[el.name] = el.value)

    return formData
}