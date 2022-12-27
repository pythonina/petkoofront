import { createTheme } from "@mui/material";
import { adaptV4Theme } from '@mui/material/styles';
import tinyColor from 'tinycolor2'

const bgMain = '#F9F9F9';
const bgBtn1 = '#0084FF';
const bgBtn2 = '#FF5959';
const clrTitle = '#525252';

const Theme = createTheme(adaptV4Theme({
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '*': {
                    'scrollbar-width': 'thin',
                },
                '*::-webkit-scrollbar': {
                    width: '4px',
                    height: '4px',
                }
            }
        }
    },
    palette: {
        background: {
            main: bgMain,
            light: tinyColor(bgMain).lighten().toHexString()
        },
        primary: {
            main: bgBtn1,
            light: tinyColor(bgBtn1).lighten().toHexString()
        },
        secondary: {
            main: bgBtn2,
            light: tinyColor(bgBtn2).lighten().toHexString()
        },
        grey: {
            main: clrTitle,
            light: tinyColor(clrTitle).lighten(60).toHexString()
        }
    },
    overrides: {
        MuiTypography: {
            root: {
                fontFamily: "IranSansX !important",
            }
        },
        MuiTab: {
            root: {
                fontFamily: "IranSansX !important",
            }
        },
        MuiButton: {
            label: {
                fontFamily: "IranSansX !important",
            }
        },
        MuiMenuItem: {
            root: {
                fontFamily: "IranSansX !important",
            }
        },
    }
}))

export default Theme;