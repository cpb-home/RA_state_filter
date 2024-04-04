import { useState } from "react";
import Toolbar from '../Toolbar/Toolbar';
import ProjectList from '../ProjectList/ProjectList';
import projects from "../../database";

const Portfolio = () => {
  const [selected, setSelected] = useState('All');
  const [updatedProjects, setProjects] = useState(projects);
  
  const filters = ["All", "Websites", "Flayers", "Business Cards"];
  const onSelectFilter = (newSelected) => {
    setSelected(newSelected);

    if (newSelected === 'All') {
      setProjects(projects);
    } else {
      setProjects(projects.filter(el => el.category === newSelected));
    }
  };

  
  return (
    <div className="container">
      <Toolbar filters={filters} selected={selected} onSelectFilter={onSelectFilter}/>
      <ProjectList projects={updatedProjects} />
    </div>
  );
}

export default Portfolio
