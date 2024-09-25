import { TextField, TextFieldVariants } from "@mui/material";
import { ChangeEvent, useState } from "react";

type TProps = {
    validator: (value: string) => string
    onChange: (value: string) => void
    fieldProps: {
        type: string
        variant: TextFieldVariants
        color: "error" | "primary" | "secondary" | "info" | "success" | "warning";
        label: string
        value: string
        fullWidth: boolean
        required: boolean
        sx? : object
    }
}

const ValidatedTextField = ({validator, onChange, fieldProps} : TProps) => {
    const [error, setError] = useState("")

    // При потере фокуса с полей ввода выполняется валидация
    const handleValidate = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      const newValue = e.target.value
      const errorMessage = validator(newValue)
      
      if (errorMessage)
        // Установка ошибки и показ текста ошибки
        setError(errorMessage)
      else if (error)
        // Удаление ошибки и скрытие текста ошибки
        setError("")
    }

    return (
      <TextField
        onChange={e => onChange(e.target.value)}
        onBlur={handleValidate}
        error={!!error}
        helperText={error}
        {...fieldProps}
      />
    )
}

export default ValidatedTextField