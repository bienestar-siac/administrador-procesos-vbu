// React
import { Fragment } from 'react'

// Components
import Header from "../../Components/Header/Header"
import SectionModules from "../../Components/Modules/Modules"

// Material IU
import { Box } from "@mui/material"

// Styles
import styles from './styles'

export default function Modules() {
    return (
        <Fragment>
            <Box sx={styles.contPrimary}>
                <Header />
                <SectionModules />
            </Box>
        </Fragment>
    )
} 