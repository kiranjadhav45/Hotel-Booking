import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          className="featuredImage"
          src="https://i.ibb.co/YP41zFR/sasha-kaunas-TAg-GZWz6-Qg8-unsplash.jpg"
          alt="oswald-elsaboath-ym-EI-DTS1g-unsplash-1"
          border="0"
        />
        <div className="featuredTitles">
          <h1>Ane</h1>
          <h2>123 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImage"
          src="https://i.ibb.co/S0YQGbG/oswald-elsaboath-ym-EI-DTS1g-unsplash-1.jpg"
          alt="oswald-elsaboath-ym-EI-DTS1g-unsplash-1"
          border="0"
        />
        <div className="featuredTitles">
          <h1>Kole</h1>
          <h2>123 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImage"
          src="https://i.ibb.co/YP41zFR/sasha-kaunas-TAg-GZWz6-Qg8-unsplash.jpg"
          alt="oswald-elsaboath-ym-EI-DTS1g-unsplash-1"
          border="0"
        />
        <div className="featuredTitles">
          <h1>Karad</h1>
          <h2>123 Properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
