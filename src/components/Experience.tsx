import Section from './Section';

function Experience() {
  return (
    <Section title="Work Experience">
      <div className="card">
        <p className="experience__role">
          Software Engineer · <span className="experience__company">Huawei Technologies Co., Ltd.</span>
        </p>
        <p className="experience__period">Jul 2022 — Present</p>
        <ul className="experience__list">
          <li>
            Developed an AI agent platform full-stack, building an agent
            orchestration system on the backend with the OpenJiuWen framework
            (LangGraph-like), and implementing interactive interfaces with React
            on the frontend.
          </li>
          <li>
            Contributed to a web-based collaborative presentation tool,
            implementing rich-text editing and real-time multi-user collaboration
            using React, ProseMirror, and Zustand.
          </li>
          <li>
            Participated in large language model framework migration, converting HuggingFace
            open-source models from PyTorch to MindSpore.
          </li>
          <li>
            Developed multiple backend service systems using Java.
          </li>
        </ul>
      </div>
    </Section>
  );
}

export default Experience;
