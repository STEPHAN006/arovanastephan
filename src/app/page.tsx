"use client";
import { useState } from "react";
import { FacebookIcon, LinkedinIcon, TwitterIcon, GithubIcon } from "lucide-react";
import { baseSkills, translations, experiences, projects } from './data';

export default function Home() {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const t = translations.en;

  return (
    <div className="max-w-[600px] mx-auto mt-8 p-5 sm:py-10 flex flex-col dark:bg-[#0a0a0a] dark:text-[#ededed] pb-0">
      <header>
        <h1 className="text-3xl sm:text-5xl sm-mb-4 font-semibold mb-3 dark:text-[#ededed]">
          Arovana Stephan
        </h1>
        <p className="text-lg sm:text-xl">
          {t.fullstack} developer specializing in <span className="text-blue-400 italic">React</span>, <span className="text-blue-400 italic">Next.js</span>, and <span className="text-blue-400 italic">Tailwind CSS</span>. I build modern, high-performance web applications. I have expertise in <span className="text-blue-400 italic">Next.js</span> backend development, managing APIs, authentication, and databases to deliver tailored and efficient solutions.
        </p>
      </header>
      <main className="mt-8">
        <section>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2 dark:text-[#ededed]">
            {t.experience}
          </h2>
          <ul className="sm:text-lg">
            <li>
              <b>Developer Fullstack </b>
            <span> at </span>
              <a href="" className="text-blue-400 hover:text-blue-500 dark:hover:text-blue-300">
                UPA
              </a>
              <span> - 2024 - now</span>
            </li>
            <li>
              <b>Freelance Developer</b>
              <span> - 2023 - 2024</span>
            </li>

          </ul>
        </section>
        <section className="mt-6">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2 dark:text-[#ededed]">
            {t.projects}
          </h2>
          <ul className="sm:text-lg">
            {projects.map((project, index) => (
              <li key={index}><b>{project.title}</b> - {t[project.description as keyof typeof t]}</li>
            ))}
          </ul>
        </section>
        <section className="mt-6">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2 dark:text-[#ededed]">
            {t.skills}
          </h2>
          <ul className="sm:text-lg">
            {baseSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>
      </main>
      <footer className="flex justify-end gap-4 text-sm text-gray-500 dark:text-gray-400 p-4 mt-auto">
        <a href="#" className="hover:text-blue-400 dark:hover:text-blue-300">
          <FacebookIcon />
        </a>
        <a href="#" className="hover:text-blue-400 dark:hover:text-blue-300">
          <LinkedinIcon />
        </a>
        <a href="#" className="hover:text-blue-400 dark:hover:text-blue-300">
          <TwitterIcon />
        </a>
        <a href="#" className="hover:text-blue-400 dark:hover:text-blue-300">
          <GithubIcon />
        </a>
      </footer>
    </div>
  );
}
