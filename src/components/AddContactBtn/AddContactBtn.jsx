import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {Add} from "@mui/icons-material";
import Box from "@mui/material/Box";

export default function AddContactBtn() {
    return (
        <Box position={"absolute"} bottom={8} right={8}>
            <Stack direction="row" spacing={1}>
                <Button color={"error"} variant="contained" endIcon={<Add/>}>
                    {"Add New Contact"}
                </Button>
            </Stack>
        </Box>
    );
}