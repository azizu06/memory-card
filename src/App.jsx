import { useState } from "react";
import { Sidebar } from "./components/sidebar";
import { defaultResume } from "./const";
import { Resume } from "./components/Resume";

export const App = () => {
  const [resume, setResume] = useState(defaultResume);
  const [activePanel, setActivePanel] = useState("");

  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-slate-950 text-slate-100 sm:h-screen sm:flex-row sm:overflow-hidden">
      <aside className="w-full shrink-0 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur sm:sticky sm:top-0 sm:h-screen sm:w-auto sm:border-b-0 sm:border-r">
        <Sidebar
          activePanel={activePanel}
          setPanel={setActivePanel}
          resume={resume}
          setResume={setResume}
        />
      </aside>
      <main className="grid min-h-0 flex-1 place-items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-2 sm:p-4 md:p-8">
        <Resume resume={resume} />
      </main>
    </div>
  );
};
