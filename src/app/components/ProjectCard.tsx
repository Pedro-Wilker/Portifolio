import { Col } from "react-bootstrap";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  imgUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imgUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <Image src={imgUrl} alt={title} width={300} height={200} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;