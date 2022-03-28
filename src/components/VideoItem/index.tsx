import { Box, Grid, Typography } from "@material-ui/core";

type VideoData = {
  id: number;
  title: string;
  channel: string;
  views: string;
  date: string;
  avatar: string;
  thumb: string;
};

type VideoItemProps = {
  video: VideoData;
};

export function VideoItem({ video }: VideoItemProps) {
  return (
    <Grid key={video.id} item lg={3} md={4} sm={6} xs={12}>
      <Box>
        <img style={{ width: "100%" }} alt={video.title} src={video.thumb} />
      </Box>
      <Box>
        <Typography
          style={{ fontWeight: 600 }}
          gutterBottom
          variant="body1"
          color="textPrimary"
        >
          {video.title}
        </Typography>
        <Typography display="block" variant="body2" color="textSecondary">
          {video.channel}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {`${video.views} - ${video.date}`}
        </Typography>
      </Box>
    </Grid>
  );
}
