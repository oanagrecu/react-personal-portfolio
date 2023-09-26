import data from "../../data/index.json";
import "@fortawesome/fontawesome-free/css/all.css";

export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Recent Projects</p>
          <h2 className="section--heading">My Portfolio</h2>
        </div>
        <div>
          <a
            href="https://github.com/oanagrecu?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <i className="fab fa-github"></i> Visit My GitHub
          </a>
        </div>
      </div>

      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img
                src={item.src}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <a
                href={item.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm portfolio--link"
              >
                {item.link}
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
