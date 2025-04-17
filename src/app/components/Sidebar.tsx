import { Col } from "react-bootstrap";

const Sidebar: React.FC = () => {
  return (
    <Col md={2} className="sidebar-fixed">
      <ul>
        <li><a href="#home">🏠</a></li>
        <li><a href="#skills">⭐</a></li>
        <li><a href="#projects">📂</a></li>
        <li><a href="#connect">📩</a></li>
      </ul>
    </Col>
  );
};

export default Sidebar;