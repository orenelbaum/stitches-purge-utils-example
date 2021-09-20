import { PropertyValue } from "@stitches/react"


export const utilList = {
    col: (value: PropertyValue<"color">) => ( { color: value }),
    
    bold: (value: boolean) => value ? { "font-weight": "bold" } : {},

    italic: (value: boolean) => value ? { "font-style": "italic" } : {}
}

export const textStitchesUtils = utilList