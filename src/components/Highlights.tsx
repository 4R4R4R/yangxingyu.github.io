import Section from './Section';

const items = [
  {
    title: 'Full-Stack Development',
    desc: <>Proficient in React, TypeScript, Java, and Python across frontend and backend.</>,
  },
  {
    title: 'LLM / AI Agent',
    desc: <>Hands-on experience building AI agent orchestration platforms and migrating large language models.</>,
  },
  {
    title: 'Indie Game Developer',
    desc: <>Published <a href="https://store.steampowered.com/app/4377410/Polygon_War/" target="_blank" rel="noopener noreferrer">Polygon War</a> on Steam — a roguelike game built from scratch.</>,
  },
  {
    title: 'AI-Powered Workflow',
    desc: <>Proficient with AI coding tools like Claude Code to boost development efficiency.</>,
  },
];

function Highlights() {
  return (
    <Section title="Highlights">
      <div className="highlights__grid">
        {items.map((item) => (
          <div className="card" key={item.title}>
            <h3 className="highlight__title">{item.title}</h3>
            <p className="highlight__desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Highlights;
