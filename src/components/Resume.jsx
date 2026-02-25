export const Resume = ({ resume }) => {
  const user = resume.personal;
  const edu = resume.education;
  const work = resume.experience;
  const projects = resume.projects;
  const skills = resume.skills;
  return (
    <div className="h-full w-full max-w-[900px] overflow-y-auto rounded-2xl border border-slate-700/70 bg-slate-800/40 p-2 shadow-2xl shadow-black/40 sm:rounded-3xl sm:p-4">
      <div className="mx-auto flex w-full max-w-[850px] flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-4 text-slate-900 shadow-[0_20px_45px_-25px_rgba(15,23,42,0.45)] sm:gap-6 sm:p-8">
      <div className="flex flex-col gap-2">
        <h1 className="flex justify-center text-2xl font-bold tracking-tight sm:text-4xl">
          {user.firstName} {user.lastName}
        </h1>
        <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-xs text-slate-600 sm:text-sm">
          <p className="font-medium">{user.phone}</p>
          <p className="text-slate-400">|</p>
          <p className="font-medium">{user.email}</p>
          <p className="text-slate-400">|</p>
          <p className="font-medium text-slate-900">{user.linkedin}</p>
          <p className="text-slate-400">|</p>
          <p className="font-medium text-slate-900">{user.github}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="border-b border-slate-300 pb-1 text-sm font-semibold tracking-[0.2em] text-slate-600">
          EDUCATION
        </h2>
        <div className="flex flex-col gap-4">
          {edu.map((item) => {
            return (
              <div key={item.id}>
                <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-4">
                  <h3 className="text-base font-semibold text-slate-900">
                    {item.school}
                  </h3>
                  <p className="text-sm text-slate-600">{item.location}</p>
                </div>
                <div className="flex flex-col gap-1 text-sm text-slate-700 sm:flex-row sm:justify-between sm:gap-4">
                  <p>{item.degree}</p>
                  <p className="text-slate-600">
                    {item.start} - {item.end}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="border-b border-slate-300 pb-1 text-sm font-semibold tracking-[0.2em] text-slate-600">
          EXPERIENCE
        </h2>
        <div className="flex flex-col gap-4">
          {work.map((item) => {
            return (
              <div key={item.id} className="flex flex-col gap-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-4">
                  <h3 className="text-base font-semibold text-slate-900">
                    {item.role}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {item.start} - {item.end}
                  </p>
                </div>
                <div className="flex flex-col gap-1 text-sm text-slate-700 sm:flex-row sm:justify-between sm:gap-4">
                  <p className="font-medium">{item.company}</p>
                  <p className="text-slate-600">{item.location}</p>
                </div>
                <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate-700 marker:text-slate-400">
                  {item.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="border-b border-slate-300 pb-1 text-sm font-semibold tracking-[0.2em] text-slate-600">
          PROJECTS
        </h2>
        <div className="flex flex-col gap-4">
          {projects.map((item) => {
            return (
              <div key={item.id} className="flex flex-col gap-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-base font-semibold text-slate-900">
                      {item.name}
                    </h4>
                    <p className="text-slate-400">|</p>
                    <p className="text-sm text-slate-700">{item.tech.join(", ")}</p>
                  </div>
                  <div className="shrink-0">
                    <p className="text-sm text-slate-600">
                      {item.start} - {item.end}
                    </p>
                  </div>
                </div>
                <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate-700 marker:text-slate-400">
                  {item.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="border-b border-slate-300 pb-1 text-sm font-semibold tracking-[0.2em] text-slate-600">
          TECHNICAL SKILLS
        </h2>
        <div className="flex flex-col gap-1.5 text-sm text-slate-700">
          <p>
            <span className="font-semibold text-slate-900">Languages:</span>{" "}
            {skills.languages.join(", ")}
          </p>
          <p>
            <span className="font-semibold text-slate-900">
              Frameworks & Libraries:
            </span>{" "}
            {skills.frameworks.join(", ")}
          </p>
          <p>
            <span className="font-semibold text-slate-900">Developer Tools:</span>{" "}
            {skills.tools.join(", ")}
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};
