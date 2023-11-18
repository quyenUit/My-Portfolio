import Project from "./Project";

const ProjectList = ({ data }) => {
    return (
      <div>
        {data.map((project, index) => (
          <Project key={index} item={project} />
        ))}
      </div>
    );
  };

export default ProjectList;