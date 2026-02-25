import {
  User,
  Briefcase,
  FolderGit,
  GraduationCap,
  Wrench,
  PanelLeftClose,
  PanelLeftOpen,
  PanelTopClose,
  PanelTopOpen,
} from "lucide-react";
import { Personal, Education, Work, Projects, Skills } from "./Panels";

export const Sidebar = ({ activePanel, setPanel, resume, setResume }) => {
  const panels = {
    personal: Personal,
    education: Education,
    work: Work,
    projects: Projects,
    skills: Skills,
  };
  const itemBase =
    "group flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-transparent p-2 text-slate-400 transition-all duration-200 hover:border-slate-700 hover:bg-slate-800/70 hover:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:h-auto sm:w-full sm:p-3";
  const inactive = "";
  const active =
    "border-slate-700 bg-indigo-500/20 text-indigo-300 shadow-[0_0_0_1px_rgba(129,140,248,0.25)]";
  const Panel = panels[activePanel];
  return (
    <div className="flex w-full flex-col sm:h-screen sm:flex-row">
      <div className="flex w-full justify-center gap-2 overflow-x-auto border-b border-slate-800/80 bg-slate-950 p-2 sm:h-screen sm:w-16 sm:flex-col sm:justify-start sm:overflow-visible sm:border-b-0 sm:border-r sm:px-2 sm:py-4">
        <button className={`${itemBase}`} onClick={() => setPanel("")}>
          {Panel ? (
            <>
              <PanelTopOpen className="sm:hidden" />
              <PanelLeftOpen className="hidden sm:block" />
            </>
          ) : (
            <>
              <PanelTopClose className="sm:hidden" />
              <PanelLeftClose className="hidden sm:block" />
            </>
          )}
        </button>
        <button
          className={`${itemBase} ${activePanel === "personal" ? active : inactive}`}
          onClick={() => setPanel("personal")}
        >
          <User />
        </button>
        <button
          className={`${itemBase} ${activePanel === "education" ? active : inactive}`}
          onClick={() => setPanel("education")}
        >
          <GraduationCap />
        </button>
        <button
          className={`${itemBase} ${activePanel === "work" ? active : inactive}`}
          onClick={() => setPanel("work")}
        >
          <Briefcase />
        </button>
        <button
          className={`${itemBase} ${activePanel === "projects" ? active : inactive}`}
          onClick={() => setPanel("projects")}
        >
          <FolderGit />
        </button>
        <button
          className={`${itemBase} ${activePanel === "skills" ? active : inactive}`}
          onClick={() => setPanel("skills")}
        >
          <Wrench />
        </button>
      </div>
      <div
        className={`min-h-0 overflow-hidden transition-all duration-200 ${Panel ? "flex w-full flex-col bg-slate-900/70 p-3 sm:w-[360px] sm:p-5" : "h-0 w-full bg-transparent p-0 sm:h-auto sm:w-0"}`}
      >
        {Panel && <Panel resume={resume} setResume={setResume} />}
      </div>
    </div>
  );
};
