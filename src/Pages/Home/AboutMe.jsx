export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img
          src={process.env.PUBLIC_URL + "/img/cardOana.png"}
          alt="About Me"
        />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills--section--heading">About Me</h1>
          <p className="hero--section-description">
            Hello. My name is Oana-Alexandra, and I am a dedicated teacher
            looking to transition to a career in frontend development. As a
            teacher, I have honed my problem-solving skills, attention to
            detail, communication skills, and creativity, all of which I believe
            will translate well to a career in frontend development. I am
            passionate about learning and staying up-to-date with the latest
            technologies and best practices, and I am committed to developing
            practical skills and building a strong portfolio of frontend
            development projects that demonstrate my abilities. I am excited
            about the prospect of joining a team of like-minded professionals
            and contributing to meaningful projects that make a difference in
            people's lives.
          </p>
          <p className="hero--section-description">
            I am eager to embark on a successful journey as a Front-end Web
            Developer, soon to be Full-stack.
          </p>
        </div>
      </div>
    </section>
  );
}
