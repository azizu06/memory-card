import { SquarePen, CirclePlus, Trash, SquareX } from "lucide-react";
import {
  PersonalForm,
  EducationForm,
  WorkForm,
  ProjectsForm,
  SkillsForm,
} from "./Forms";
import { useState } from "react";
import { defaultEdu, defaultWork, defaultProjects } from "../const";

export const Personal = ({ resume, setResume }) => {
  const personal = resume.personal;
  const setPersonal = (val) => {
    setResume((prev) => ({
      ...prev,
      personal: {
        ...val,
      },
    }));
  };
  return (
    <div className="flex min-h-0 flex-col gap-5 rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-xl shadow-black/20">
      <div>
        <h2 className="text-lg font-semibold tracking-tight text-slate-100">
          Personal Information
        </h2>
      </div>
      <PersonalForm personal={personal} setPersonal={setPersonal} />
    </div>
  );
};

export const Education = ({ resume, setResume }) => {
  const [id, setId] = useState(null);
  const [key, resetKey] = useState(0);
  const edu = resume.education;
  const updateEdu = (id, val) => {
    setResume((prev) => ({
      ...prev,
      education: prev.education.map((item) =>
        item.id === id ? { ...item, ...val } : item,
      ),
    }));
  };
  const delEdu = (id) => {
    setResume((prev) => ({
      ...prev,
      education: prev.education.filter((item) => item.id !== id),
    }));
  };
  const addEdu = (val) => {
    setResume((prev) => ({
      ...prev,
      education: [...prev.education, val],
    }));
  };
  const handleClose = () => {
    setId(null);
    resetKey((k) => k + 1);
  };
  const eduItem = edu.find((e) => e.id === id) ?? defaultEdu;
  return (
    <div className="flex min-h-0 flex-col gap-5 rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-xl shadow-black/20">
      <div className="flex w-full items-center justify-between border-b border-slate-800 pb-3">
        <h2 className="text-lg font-semibold tracking-tight text-slate-100">
          Education
        </h2>
        {id ? (
          <SquareX
            className="w-5 cursor-pointer text-slate-400 transition hover:text-rose-300"
            onClick={handleClose}
          />
        ) : (
          <CirclePlus
            className="w-5 cursor-pointer text-slate-400 transition hover:text-indigo-300"
            onClick={() => setId("add")}
          />
        )}
      </div>
      {id ? (
        <EducationForm
          key={key}
          edu={eduItem}
          setEdu={id === "add" ? addEdu : updateEdu}
          setId={setId}
          id={id}
        />
      ) : (
        <div className="flex flex-col gap-3">
          {edu.map((item) => {
            return (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/50 p-3"
              >
                <p className="max-w-[70%] flex-wrap text-sm font-medium text-slate-200">
                  {item.school}
                </p>
                <div className="flex items-center gap-4">
                  <SquarePen
                    className="w-4 cursor-pointer text-slate-400 transition hover:text-indigo-300"
                    onClick={() => setId(item.id)}
                  />
                  <Trash
                    className="w-4 cursor-pointer text-slate-400 transition hover:text-rose-300"
                    onClick={() => delEdu(item.id)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export const Work = ({ resume, setResume }) => {
  const [id, setId] = useState(null);
  const [key, resetKey] = useState(0);
  const work = resume.experience;
  const handleClose = () => {
    setId(null);
    resetKey((k) => k + 1);
  };
  const updateWork = (id, val) => {
    setResume((prev) => ({
      ...prev,
      experience: prev.experience.map((item) =>
        item.id === id ? { ...item, ...val } : item,
      ),
    }));
  };
  const delWork = (id) => {
    setResume((prev) => ({
      ...prev,
      experience: prev.experience.filter((item) => item.id !== id),
    }));
  };
  const addWork = (val) => {
    setResume((prev) => ({
      ...prev,
      experience: [...prev.experience, val],
    }));
  };
  const curWork = work.find((e) => e.id === id) ?? defaultWork;
  return (
    <div className="flex min-h-0 flex-col gap-5 rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-xl shadow-black/20">
      <div className="flex w-full items-center justify-between border-b border-slate-800 pb-3">
        <h2 className="text-lg font-semibold tracking-tight text-slate-100">
          Experience
        </h2>
        {id ? (
          <SquareX
            className="w-5 cursor-pointer text-slate-400 transition hover:text-rose-300"
            onClick={handleClose}
          />
        ) : (
          <CirclePlus
            className="w-5 cursor-pointer text-slate-400 transition hover:text-indigo-300"
            onClick={() => setId("add")}
          />
        )}
      </div>
      {id ? (
        <WorkForm
          key={key}
          work={curWork}
          setWork={id === "add" ? addWork : updateWork}
          setId={setId}
          id={id}
        />
      ) : (
        <div className="flex flex-col gap-3">
          {work.map((item) => {
            return (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/50 p-3"
              >
                <p className="max-w-[70%] flex-wrap text-sm font-medium text-slate-200">
                  {item.company}
                </p>
                <div className="flex items-center gap-4">
                  <SquarePen
                    className="w-4 cursor-pointer text-slate-400 transition hover:text-indigo-300"
                    onClick={() => setId(item.id)}
                  />
                  <Trash
                    className="w-4 cursor-pointer text-slate-400 transition hover:text-rose-300"
                    onClick={() => delWork(item.id)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export const Projects = ({ resume, setResume }) => {
  const [id, setId] = useState(null);
  const [key, resetKey] = useState(0);
  const projects = resume.projects;
  const handleClose = () => {
    setId(null);
    resetKey((k) => k + 1);
  };
  const updateProject = (id, val) => {
    setResume((prev) => ({
      ...prev,
      projects: prev.projects.map((item) =>
        item.id === id ? { ...item, ...val } : item,
      ),
    }));
  };
  const delProject = (id) => {
    setResume((prev) => ({
      ...prev,
      projects: prev.projects.filter((item) => item.id !== id),
    }));
  };
  const addProject = (val) => {
    setResume((prev) => ({
      ...prev,
      projects: [...prev.projects, val],
    }));
  };
  const curProject = projects.find((e) => e.id === id) ?? defaultProjects;
  return (
    <div className="flex min-h-0 flex-col gap-5 rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-xl shadow-black/20">
      <div className="flex w-full items-center justify-between border-b border-slate-800 pb-3">
        <h2 className="text-lg font-semibold tracking-tight text-slate-100">
          Projects
        </h2>
        {id ? (
          <SquareX
            className="w-5 cursor-pointer text-slate-400 transition hover:text-rose-300"
            onClick={handleClose}
          />
        ) : (
          <CirclePlus
            className="w-5 cursor-pointer text-slate-400 transition hover:text-indigo-300"
            onClick={() => setId("add")}
          />
        )}
      </div>
      {id ? (
        <ProjectsForm
          key={key}
          project={curProject}
          setProject={id === "add" ? addProject : updateProject}
          setId={setId}
          id={id}
        />
      ) : (
        <div className="flex flex-col gap-3">
          {projects.map((item) => {
            return (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/50 p-3"
              >
                <p className="max-w-[70%] flex-wrap text-sm font-medium text-slate-200">
                  {item.name}
                </p>
                <div className="flex items-center gap-4">
                  <SquarePen
                    className="w-4 cursor-pointer text-slate-400 transition hover:text-indigo-300"
                    onClick={() => setId(item.id)}
                  />
                  <Trash
                    className="w-4 cursor-pointer text-slate-400 transition hover:text-rose-300"
                    onClick={() => delProject(item.id)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export const Skills = ({ resume, setResume }) => {
  const skills = resume.skills;
  const setSkills = (val) => {
    setResume((prev) => ({
      ...prev,
      skills: {
        ...val,
      },
    }));
  };
  return (
    <div className="flex min-h-0 flex-col gap-5 rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-xl shadow-black/20">
      <div>
        <h2 className="text-lg font-semibold tracking-tight text-slate-100">
          Technical Skills
        </h2>
      </div>
      <SkillsForm skills={skills} setSkills={setSkills} />
    </div>
  );
};
