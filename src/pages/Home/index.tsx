import { Box } from "@material-ui/core";
import { LeftBar } from "../../components/LeftBar";
import { TopBar } from "../../components/TopBar";
import { VideoList } from "../../components/VideoList";
import { useStyles } from "./styles";

export function Home() {
  const classes = useStyles();

  return (
    <Box className={classes.Root}>
      <TopBar />
      <Box display="flex">
        <LeftBar />
        <VideoList title="Recomendados">
          <h1>Insira o resto aqui... 53:08</h1>
        </VideoList>
      </Box>
    </Box>
  );
}
