import React, { FC } from "react"
import { render } from "react-dom"
import { globalCss, styled } from "~stitches"
import { Button } from "./button.component"
import { StyledAnchor } from "./styled-anchor.component"


globalCss({
    button: {
        mar: "5rem"
    }
})()

const AppContainer = styled("div", {})

const App: FC = () => {
    return <AppContainer>
        Hi
        <Button />
        <StyledAnchor>Anchor</StyledAnchor>
    </AppContainer>
}

const root = document.getElementById("root")
render(<App />, root)
