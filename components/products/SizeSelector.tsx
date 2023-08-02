import { ISizes } from "@/interfaces";
import { Box, Button } from "@mui/material";
import { FC } from "react"

interface Props {
    selectedSize?: ISizes;
    sizes: ISizes[];
}

export const SizeSelector:FC<Props> = ({selectedSize,sizes}) => {
  return (
    <Box>
       {
        sizes.map( size => (
            <Button size="small" key={size} color={selectedSize === size ? 'secondary' : 'primary'}>
                {size}
            </Button>
        ))
       } 
    </Box>
  )
}
