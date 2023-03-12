import { Box, Stack } from "@mui/material"
import Navbar from "./navbar"


const Page = ({children}) => {

    return (
        <Stack>
            <Navbar />
            <Box>
                {children}
            </Box>
        </Stack>
    )
}

export default Page;