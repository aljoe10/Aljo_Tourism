import './GalCard.css';
const GallCard = (props) => {
  return (
    <>
      <div className="col-md-4">
        <div className="card" style={{ width: "18rem"}}>
          <img src={props.image} className="card-img-top" alt="..." style = {{height: "20rem"}}/>
          <div className="card-body">
            <h5 className="card-title">{props.heading}</h5>
            <p className="card-text">
              {props.description}
            </p>
            {/* <a href="#" className="btn mr-2">
              <i className="fas fa-link"></i> Visit Site
            </a>
            <a href="#" className="btn">
              <i className="fab fa-github"></i> Github
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
};

export {GallCard};