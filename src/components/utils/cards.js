import "./style.scss";

export const Card1 = ({ image, title, description }) => (
  <div className="card">
    <div className="card-image">{image}</div>
    <div className="card-text-box">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  </div>
);
