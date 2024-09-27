import { TextField, TextFieldVariants } from "@mui/material";
import { ChangeEvent, useState } from "react";

type TProps = {
    validator: (value: string) => string
    fieldProps: {
        type: string
        variant: TextFieldVariants
        color: "error" | "primary" | "secondary" | "info" | "success" | "warning";
        label: string
        name: string
        fullWidth: boolean
        required: boolean
    }
}

const ValidatedTextField = ({validator, fieldProps} : TProps) => {
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
        onBlur={handleValidate}
        error={!!error}
        helperText={error}
        sx={{
          mb: 3,

          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#22A11F"
          },

          '& label.Mui-focused': {
            color: '#22A11F',
          },

          '& .MuiOutlinedInput-root': {

            '&.Mui-focused fieldset': {
              borderColor: '#22A11F',
            },

          }
        }}
        {...fieldProps}
      />
    )
}

export default ValidatedTextField