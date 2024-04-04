const ProjectList = ({ projects }) => {

  return (
    <div className="projectList">
      {projects.map((prj, index) => <img src={prj.img} key={index} />)}
    </div>
  )
}

export default ProjectList
