import React, { FC } from "react"
import { styled } from "~stitches"


const StyledButton = styled("button", { pad: "5rem" })

export const Button: FC = () =>
    <StyledButton>
        click
    </StyledButton>
