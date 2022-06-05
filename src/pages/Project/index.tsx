import * as React from "react";
import Grid from "@mui/material/Grid";
import ProjectTile from "../../components/ProjectTile";
import SemesterButton from "./components/SemesterButton";
import blob_shape1 from "../../assets/images/blob_shape1.svg";
import blob_shape2 from "../../assets/images/blob_shape2.svg";
import "./style.css";

export default function Project() {
  const projectDatas = [
    {
      semester: "1기",
      projects: [
        {
          id: "0001",
          projectTitle: "projectA",
          projectTeam: "Team A",
          projectDesc:
            "멘토링 프로그램 테커 사이트를 만드는 프로젝트이며 테커 사이트를 만드는 프로젝트이며 프로젝트이다.",
          projectImg:
            "https://upload.wikimedia.org/wikipedia/commons/e/ee/Sample_abc.jpg",
        },
      ],
    },
    {
      semester: "2기",
      projects: [
        {
          id: "0001",
          projectTitle: "projectB",
          projectTeam: "Team B",
          projectDesc:
            "멘토링 프로그램 테커 사이트를 만드는 프로젝트이며 테커 사이트를 만드는 프로젝트이며 프로젝트이다.",
          projectImg:
            "https://upload.wikimedia.org/wikipedia/commons/e/ee/Sample_abc.jpg",
        },
        {
          id: "0002",
          projectTitle: "projectC",
          projectTeam: "Team C",
          projectDesc:
            "멘토링 프로그램 테커 사이트를 만드는 프로젝트이며 테커 사이트를 만드는 프로젝트이며 프로젝트이다.",
          projectImg:
            "https://upload.wikimedia.org/wikipedia/commons/1/16/HDRI_Sample_Scene_Balls_%28JPEG-HDR%29.jpg",
        },
      ],
    },
    {
      semester: "3기",
      projects: [
        {
          id: "0001",
          projectTitle: "projectD",
          projectTeam: "Team D",
          projectDesc:
            "멘토링 프로그램 테커 사이트를 만드는 프로젝트이며 테커 사이트를 만드는 프로젝트이며 프로젝트이다.",
          projectImg:
            "https://upload.wikimedia.org/wikipedia/commons/e/ee/Sample_abc.jpg",
        },
        {
          id: "0002",
          projectTitle: "projectF",
          projectTeam: "Team F",
          projectDesc:
            "멘토링 프로그램 테커 사이트를 만드는 프로젝트이며 테커 사이트를 만드는 프로젝트이며 프로젝트이다.",
          projectImg:
            "https://upload.wikimedia.org/wikipedia/commons/1/16/HDRI_Sample_Scene_Balls_%28JPEG-HDR%29.jpg",
        },
        {
          id: "0003",
          projectTitle: "projectG",
          projectTeam: "Team G",
          projectDesc:
            "멘토링 프로그램 테커 사이트를 만드는 프로젝트이며 테커 사이트를 만드는 프로젝트이며 프로젝트이다.",
          projectImg:
            "https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2FtcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        },
      ],
    },
  ];

  const semesters = ["1기", "2기", "3기"];

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      style={{ padding: "77px" }}
    >
      <Grid item xs={12} className="page_header">
        <img src={blob_shape2} alt="blob_shape2" className="blob_shape2"></img>
        <img src={blob_shape1} alt="blob_shape1" className="blob_shape1"></img>
        <h1>Projects</h1>
        <p>make your skills visible</p>
      </Grid>
      <Grid item xs={12} className="page_hr">
        <div></div>
      </Grid>
      <Grid container xs={12} className="semester_button_groups" spacing={0.5}>
        {semesters.map((semester) => (
          <Grid item xs={1}>
            <SemesterButton label={semester} />
          </Grid>
        ))}
      </Grid>
      <Grid container xs={12} className="projects_groups" spacing={0.5}>
        <ProjectTile item xs={4} />
        <ProjectTile item xs={4} />
        <ProjectTile item xs={4} />
        <ProjectTile item xs={4} />
        <ProjectTile item xs={4} />
        <ProjectTile item xs={4} />
      </Grid>
    </Grid>
  );
}
