import * as React from "react";
import Grid from "@mui/material/Grid";
import ProjectTile from "../../components/ProjectTile";
import blob_shape1 from "../../assets/images/blob_shape1.svg";
import blob_shape2 from "../../assets/images/blob_shape2.svg";
import "./style.css";

export default function Project() {
  const projectDatas = [
    {
      id: "0001",
      projectTitle: "projectA",
      projectTeam: "Team A",
      projectDesc:
        "멘토링 프로그램 테커 사이트를 만드는 프로젝트이며 테커 사이트를 만드는 프로젝트이며 프로젝트이다.",
      projectImg:
        "https://upload.wikimedia.org/wikipedia/commons/e/ee/Sample_abc.jpg",
    },
    {
      id: "0002",
      projectTitle: "projectB",
      projectTeam: "Team B",
      projectDesc:
        "멘토링 프로그램 테커 사이트를 만드는 프로젝트이며 테커 사이트를 만드는 프로젝트이며 프로젝트이다.",
      projectImg:
        "https://upload.wikimedia.org/wikipedia/commons/1/16/HDRI_Sample_Scene_Balls_%28JPEG-HDR%29.jpg",
    },
    {
      id: "0003",
      projectTitle: "projectC",
      projectTeam: "Team C",
      projectDesc:
        "멘토링 프로그램 테커 사이트를 만드는 프로젝트이며 테커 사이트를 만드는 프로젝트이며 프로젝트이다.",
      projectImg:
        "https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2FtcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    },
  ];

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      style={{ padding: "77px" }}
    >
      <Grid item xs={12}>
        <img src={blob_shape2} alt="blob_shape2" className="blob_shape2"></img>
        <img src={blob_shape1} alt="blob_shape1" className="blob_shape1"></img>
        <h1>Projects</h1>
      </Grid>
      <Grid item xs={4}>
        <ProjectTile />
      </Grid>
      <Grid item xs={4}>
        <ProjectTile />
      </Grid>
      <Grid item xs={4}>
        <ProjectTile />
      </Grid>
    </Grid>
  );
}
