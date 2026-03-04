import Section from './Section';

function Education() {
  return (
    <Section title="Education">
      <div className="education__grid">
        <div className="card">
          <p className="education__degree">M.S. in Operations Research &amp; Control Theory</p>
          <p className="education__school">School of Mathematics, Shandong University</p>
          <p className="education__period">2019 — 2022</p>
        </div>
        <div className="card">
          <p className="education__degree">B.S. in Financial Engineering</p>
          <p className="education__school">School of Mathematics &amp; Statistics, Ningbo University</p>
          <p className="education__period">2015 — 2019</p>

        </div>
      </div>
    </Section>
  );
}

export default Education;
