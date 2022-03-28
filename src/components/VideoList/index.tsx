import { Box, Toolbar, Typography } from "@material-ui/core";
import { ReactElement } from "react";

type VideoListProps = {
  title: string;
  children: ReactElement;
};

export function VideoList({ title, children }: VideoListProps) {
  return (
    <Box p={3} height="100vh">
      <Toolbar />

      <Typography variant="h5" color="textPrimary" style={{ fontWeight: 600 }}>
        {title}
      </Typography>

      {children}
    </Box>
  );
}
