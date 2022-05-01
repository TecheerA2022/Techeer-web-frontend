import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "react-bootstrap/Button";
import "./style.css";

export default function ProjectTile(props: any) {
  return (
    <div className="projectCard">
      <CardMedia
        className="projectCardImg"
        component="img"
        height="170"
        image="https://upload.wikimedia.org/wikipedia/commons/e/ee/Sample_abc.jpg"
        alt="test photo"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Techeer Site Project
        </Typography>
        <Typography variant="caption">Techeer-A</Typography>
        <Typography
          className="projectDesc"
          variant="body2"
          color="text.secondary"
        >
          멘토링 프로그램 테커 사이트를 만드는 프로젝트이며 테커 사이트를 만드는
          프로젝트이며 프로젝트이다.
        </Typography>
      </CardContent>
      <div className="projectTags">
        <Button className="projectTagBtn" variant="contained" size="sm">
          <h6>React</h6>
        </Button>
        <Button className="projectTagBtn" variant="contained" size="sm">
          <h6>Spring Boot</h6>
        </Button>
        <Button className="projectTagBtn" variant="contained" size="sm">
          <h6>Redis</h6>
        </Button>
      </div>
    </div>
  );
}
