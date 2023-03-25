import { Box, Stack } from "@mui/material"
import Navbar from "./navbar"
import React from "react";
import { Outlet } from "react-router-dom";


const Page = () => {

    return (
        <Stack>
            <Navbar />
            <Box>
                <Outlet />
            </Box>
        </Stack>
    )
}

export default Page;