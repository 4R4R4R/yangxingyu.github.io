import Section from './Section';

function Awards() {
  return (
    <Section title="Awards &amp; Honors">
      <div className="awards__grid">
        <div className="card">
          <h3 className="awards__card-title">Competitions</h3>
          <ul className="awards__list">
            <li>2018 MCM Meritorious Winner</li>
            <li>2017 Chinese Mathematical Modeling Competition — Second Prize (National)</li>
            <li>2017 Zhejiang Provincial Advanced Mathematics Competition — First Prize</li>
            <li>2016 Chinese Mathematics Competition — First Prize (National)</li>
            <li>2016 Chinese Mathematical Modeling Competition — Second Prize (National)</li>
            <li>2016 Ningbo University Mathematical Modeling Competition — First Prize</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="awards__card-title">Honors</h3>
          <ul className="awards__list">
            <li>Provincial Government Scholarship (2017, 2018)</li>
            <li>Outstanding Graduate of Zhejiang Province</li>
            <li>Star of Mathematics &amp; Physics, Ningbo University</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

export default Awards;
