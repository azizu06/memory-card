import { Save } from "lucide-react";
import { useState } from "react";

export const PersonalForm = ({ personal, setPersonal }) => {
  const [draft, setDraft] = useState({
    firstName: personal.firstName,
    lastName: personal.lastName,
    phone: personal.phone,
    email: personal.email,
    linkedin: personal.linkedin,
    github: personal.github,
  });
  const updateDraft = (field, val) => {
    setDraft((prev) => ({
      ...prev,
      [field]: val,
    }));
  };
  return (
    <div className="flex w-full min-w-0 flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold uppercase tracking-wide text-slate-400" htmlFor="firstName">First Name*</label>
        <input
          className="h-11 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 text-sm text-slate-100 placeholder:text-slate-500 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          type="text"
          required={true}
          value={draft.firstName}
          onChange={(e) => updateDraft("firstName", e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold uppercase tracking-wide text-slate-400" htmlFor="lastName">Last Name*</label>
        <input
          className="h-11 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 text-sm text-slate-100 placeholder:text-slate-500 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          type="text"
          required={true}
          value={draft.lastName}
          onChange={(e) => updateDraft("lastName", e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold uppercase tracking-wide text-slate-400" htmlFor="phone">Phone Number*</label>
        <input
          className="h-11 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 text-sm text-slate-100 placeholder:text-slate-500 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          type="tel"
          required={true}
          value={draft.phone}
          onChange={(e) => updateDraft("phone", e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold uppercase tracking-wide text-slate-400" htmlFor="email">Email*</label>
        <input
          className="h-11 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 text-sm text-slate-100 placeholder:text-slate-500 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          type="email"
          required={true}
          value={draft.email}
          onChange={(e) => updateDraft("email", e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold uppercase tracking-wide text-slate-400" htmlFor="linked">Linkedin</label>
        <input
          className="h-11 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 text-sm text-slate-100 placeholder:text-slate-500 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          type="url"
          value={draft.linkedin}
          onChange={(e) => updateDraft("linkedin", e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold uppercase tracking-wide text-slate-400" htmlFor="github">Github</label>
        <input
          className="h-11 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 text-sm text-slate-100 placeholder:text-slate-500 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          type="url"
          value={draft.github}
          onChange={(e) => updateDraft("github", e.target.value)}
        />
      </div>
      <button
        className="inline-flex items-center justify-center gap-2 rounded-xl border border-indigo-400/30 bg-indigo-500/20 px-4 py-2.5 text-sm font-semibold text-indigo-100 transition hover:border-indigo-300/50 hover:bg-indigo-500/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
        onClick={() => setPersonal(draft)}
      >
        <Save className="w-4" /> <span>Save</span>
      </button>
    </div>
  );
};

export const EducationForm = ({ id, setId, edu, setEdu }) => {
  const [draft, setDraft] = useState({
    id: edu.id,
    school: edu.school,
    degree: edu.degree,
    start: edu.start,
    end: edu.end,
    location: edu.location,
    github: edu.github,
  });
  const updateDraft = (field, val) => {
    setDraft((prev) => ({
      ...prev,
      [field]: val,
    }));
  };
  const hanldeSave = () => {
    if (!draft.school || !draft.degree || !draft.location) return;
    if (id === "add") {
      setEdu(draft);
    } else {
      setEdu(id, draft);
    }
    setId(null);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="flex w-full min-w-0 flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-400" htmlFor="eduName">School Name*</label>
          <input
            className="h-11 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 text-sm text-slate-100 placeholder:text-slate-500 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            type="text"
            required={true}
            value={draft.school}
            onChange={(e) => updateDraft("school", e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-400" htmlFor="degree">Degree*</label>
          <input
            className="h-11 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 text-sm text-slate-100 placeholder:text-slate-500 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            type="text"
            required={true}
            value={draft.degree}
            onChange={(e) => updateDraft("degree", e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-400" htmlFor="eduLocation">Location*</label>
          <input
            className="h-11 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 text-sm text-slate-100 placeholder:text-slate-500 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            type="text"
            required={true}
            value={draft.location}
            onChange={(e) => updateDraft("location", e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-400" htmlFor="eduStart">Start Date</label>
          <input
            className="h-11 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 text-sm text-slate-100 placeholder:text-slate-500 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            type="text"
            value={draft.start}
            onChange={(e) => updateDraft("start", e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-400" htmlFor="eduEnd">End Date</label>
          <input
            className="h-11 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 text-sm text-slate-100 placeholder:text-slate-500 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            type="text"
            required={true}
            value={draft.end}
            onChange={(e) => updateDraft("end", e.target.value)}
          />
        </div>
        <button
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-indigo-400/30 bg-indigo-500/20 px-4 py-2.5 text-sm font-semibold text-indigo-100 transition hover:border-indigo-300/50 hover:bg-indigo-500/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          type="submit"
          onClick={hanldeSave}
        >
          <Save className="w-4" /> <span>Save</span>
        </button>
      </div>
    </form>
  );
};

export const WorkForm = ({ id, setId, work, setWork }) => {
  const [draft, setDraft] = useState({
    id: work.id,
    company: work.company,
    role: work.role,
    start: work.start,
    end: work.end,
    location: work.location,
    description: work.description.join(" "),
  });
  const updateDraft = (field, val) => {
    setDraft((prev) => ({
      ...prev,
      [field]: val,
    }));
  };
  const descToArray = (str) => {
    return str
      .split(".")
      .map((s) => s.trim())
      .filter(Boolean);
  };
  const handleSave = () => {
    if (!draft.company || !draft.role || !draft.location) return;
    if (id === "add") {
      setWork({
        ...draft,
        description: descToArray(draft.description),
      });
    } else {
      setWork(id, {
        ...draft,
        description: descToArray(draft.description),
      });
    }
    setId(null);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="flex w-full min-w-0 flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-400" htmlFor="workName">Company Name*</label>
          <input
            className="h-11 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 text-sm text-slate-100 placeholder:text-slate-500 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            type="text"
            required={true}
            value={draft.company}
            onChange={(e) => updateDraft("company", e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-400" htmlFor="workRole">Job Title*</label>
          <input
            className="h-11 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 text-sm text-slate-100 placeholder:text-slate-500 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            type="text"
            required={true}
            value={draft.role}
            onChange={(e) => updateDraft("role", e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-400" htmlFor="workLo">Location*</label>
          <input
            className="h-11 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 text-sm text-slate-100 placeholder:text-slate-500 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            type="text"
            required={true}
            value={draft.location}
            onChange={(e) => updateDraft("location", e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-400" htmlFor="workStart">Start Date</label>
          <input
            className="h-11 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 text-sm text-slate-100 placeholder:text-slate-500 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            type="text"
            value={draft.start}
            onChange={(e) => updateDraft("start", e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-400" htmlFor="workEnd">End Date</label>
          <input
            className="h-11 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 text-sm text-slate-100 placeholder:text-slate-500 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            type="url"
            required={true}
            value={draft.end}
            onChange={(e) => updateDraft("end", e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-400" htmlFor="workDesc">Description</label>
          <textarea
            className="max-h-[220px] min-h-[130px] w-full resize-y overflow-y-auto rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            value={draft.description}
            onChange={(e) => updateDraft("description", e.target.value)}
          />
        </div>
        <button
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-indigo-400/30 bg-indigo-500/20 px-4 py-2.5 text-sm font-semibold text-indigo-100 transition hover:border-indigo-300/50 hover:bg-indigo-500/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          type="submit"
          onClick={handleSave}
        >
          <Save className="w-4" /> <span>Save</span>
        </button>
      </div>
    </form>
  );
};

export const ProjectsForm = ({ id, setId, project, setProject }) => {
  const [draft, setDraft] = useState({
    id: project.id,
    name: project.name,
    description: project.description.join(" "),
    tech: project.tech.join(", "),
    start: project.start,
    end: project.end,
  });
  const skillsToArray = (str) => {
    return str
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  };
  const descToArray = (str) => {
    return str
      .split(".")
      .map((s) => s.trim())
      .filter(Boolean);
  };
  const updateDraft = (field, val) => {
    setDraft((prev) => ({
      ...prev,
      [field]: val,
    }));
  };
  const handleSave = () => {
    if (!draft.name || !draft.tech) return;
    if (id === "add") {
      setProject({
        ...draft,
        description: descToArray(draft.description),
        tech: skillsToArray(draft.tech),
      });
    } else {
      setProject(id, {
        ...draft,
        description: descToArray(draft.description),
        tech: skillsToArray(draft.tech),
      });
    }
    setId(null);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="flex w-full min-w-0 flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-400" htmlFor="projectName">Project Name*</label>
          <input
            className="h-11 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 text-sm text-slate-100 placeholder:text-slate-500 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            type="text"
            required={true}
            value={draft.name}
            onChange={(e) => updateDraft("name", e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-400" htmlFor="techStack">Tech Stack*</label>
          <textarea
            required={true}
            className="max-h-[220px] min-h-[130px] w-full resize-y overflow-y-auto rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            value={draft.tech}
            onChange={(e) => updateDraft("tech", e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-400" htmlFor="projectStart">Start Date</label>
          <input
            className="h-11 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 text-sm text-slate-100 placeholder:text-slate-500 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            type="text"
            value={draft.start}
            onChange={(e) => updateDraft("start", e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-400" htmlFor="projectEnd">End Date</label>
          <input
            className="h-11 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 text-sm text-slate-100 placeholder:text-slate-500 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            type="text"
            required={true}
            value={draft.end}
            onChange={(e) => updateDraft("end", e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-400" htmlFor="projectDesc">Description</label>
          <textarea
            className="max-h-[220px] min-h-[130px] w-full resize-y overflow-y-auto rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            value={draft.description}
            onChange={(e) => updateDraft("description", e.target.value)}
          />
        </div>
        <button
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-indigo-400/30 bg-indigo-500/20 px-4 py-2.5 text-sm font-semibold text-indigo-100 transition hover:border-indigo-300/50 hover:bg-indigo-500/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          type="submit"
          onClick={handleSave}
        >
          <Save className="w-4" /> <span>Save</span>
        </button>
      </div>
    </form>
  );
};
export const SkillsForm = ({ skills, setSkills }) => {
  const [draft, setDraft] = useState({
    languages: skills.languages.join(", "),
    frameworks: skills.frameworks.join(", "),
    tools: skills.tools.join(", "),
  });
  const skillsToArray = (str) => {
    return str
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  };
  const newSkills = {
    languages: skillsToArray(draft.languages),
    frameworks: skillsToArray(draft.frameworks),
    tools: skillsToArray(draft.tools),
  };
  const updateDraft = (field, val) => {
    setDraft((prev) => ({ ...prev, [field]: val }));
  };
  return (
    <div className="flex w-full min-w-0 flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold uppercase tracking-wide text-slate-400" htmlFor="languages">Languages*</label>
        <textarea
          className="max-h-[220px] min-h-[130px] w-full resize-y overflow-y-auto rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          required={true}
          value={draft.languages}
          onChange={(e) => updateDraft("languages", e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold uppercase tracking-wide text-slate-400" htmlFor="frameworks">Frameworks & Libraries</label>
        <textarea
          className="max-h-[220px] min-h-[130px] w-full resize-y overflow-y-auto rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          value={draft.frameworks}
          onChange={(e) => updateDraft("frameworks", e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold uppercase tracking-wide text-slate-400" htmlFor="tools">Developer Tools</label>
        <textarea
          className="max-h-[220px] min-h-[130px] w-full resize-y overflow-y-auto rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          value={draft.tools}
          onChange={(e) => updateDraft("tools", e.target.value)}
        />
      </div>
      <button
        className="inline-flex items-center justify-center gap-2 rounded-xl border border-indigo-400/30 bg-indigo-500/20 px-4 py-2.5 text-sm font-semibold text-indigo-100 transition hover:border-indigo-300/50 hover:bg-indigo-500/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
        onClick={() => setSkills(newSkills)}
      >
        <Save className="w-4" /> <span>Save</span>
      </button>
    </div>
  );
};
