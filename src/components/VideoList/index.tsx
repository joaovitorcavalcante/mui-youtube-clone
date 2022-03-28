import { Box, Toolbar, Typography, Grid } from "@material-ui/core";
import { ReactNode } from "react";

type VideoListProps = {
  title: string;
  children: ReactNode;
};

export function VideoList({ title, children }: VideoListProps) {
  return (
    <Box p={3} height="100vh">
      <Toolbar />

      <Typography variant="h5" color="textPrimary" style={{ fontWeight: 600 }}>
        {title}
      </Typography>

      <Grid container spacing={2}>
        {children}
      </Grid>
    </Box>
  );
}
