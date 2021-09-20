import { PropertyValue } from "@stitches/react"
import { textStitchesUtils } from './text.stitches-utils';


export const utilList = {
    pad: (value: PropertyValue<"padding">) => ( { padding: value }),

    mar: (value: PropertyValue<"margin">) => ( { margin: value }),
    
    bg: (value: PropertyValue<"background">) => ( { background: value })
}

export const stitchesUtils = { ...utilList, ...textStitchesUtils }