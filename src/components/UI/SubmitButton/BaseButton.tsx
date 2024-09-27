import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const BaseButton = styled(Button)(() => ({
    color: "#fff",
    backgroundColor: "#22A11F",
    textTransform: "capitalize",
    fontSize: "1.125rem",
    fontFamily: `ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
    borderColor: "rgb(255 255 255 / 50%)",
    padding: "0.5rem 1.25rem",

    "&:hover": {
        backgroundColor: "#177715",
    },
}));