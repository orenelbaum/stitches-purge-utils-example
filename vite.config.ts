import path from "path"
import { defineConfig } from 'vite'


export default defineConfig(
    ({ mode }) => ({
        resolve: {
            alias: [
                { 
                    find: "~stitches",
                    replacement: path.resolve("./src/stitches.ts")
                },
                {
                    find: "~utils",
                    replacement: mode === "production" 
                        ? path.resolve("./stitches/purged-utils/utils.ts")
                        : path.resolve("./src/stitches-utils/utils.ts")
                }
            ] 
        }
    })
)