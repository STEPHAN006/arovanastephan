import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon, GithubIcon } from "lucide-react";
export default function Home() {
  return (
    <div className="max-w-[600px] mx-auto mt-8 p-5 flex flex-col">
      <header>
        <h1 className="text-4xl font-semibold mb-3 font-space-grotesk">Arovana Stephan</h1>
        <p className="text-lg">Fullstack developer specializing in <span className="text-blue-400 italic ">React</span>, <span className="text-blue-400 italic ">Next.js</span>, and <span className="text-blue-400 italic ">Tailwind CSS</span>, I build modern and optimized web applications. I leverage <span className="text-blue-400 italic ">Next.js backend for APIs</span>, authentication, and database management, ensuring high-performance and tailored solutions.</p>
      </header>
      <main className="mt-8">
        <section>
          <h2 className="text-2xl font-semibold mb-2 font-space-grotesk">Experience</h2>
          <ul className="list-disc list-inside">
            <li>
              <b>Developer Fullstack </b>
              at
              <a href="" className="text-blue-400 hover:underline"> UPA </a>
              - 2023 - Now
            </li>
            <li>
              <b>Developer</b>
              <a href="" className="text-blue-400 hover:underline"> freelance </a>
              - 2023 - 2024
            </li>
          </ul>
        </section>
        <section className="mt-6">
          <h2 className="text-2xl font-semibold mb-2 font-space-grotesk">Projects</h2>
          <ul className="list-disc list-inside">
            <li><b>Blog</b> - A personal blog built with Next.js and Tailwind CSS</li>
          </ul>
        </section>
      </main>
      <footer className="flex  gap-4 text-sm text-gray-500 absolute bottom-0 p-4">
        <a href="#"><FacebookIcon className="hover:text-blue-400"/></a>
        <a href="#"><LinkedinIcon className="hover:text-blue-400"/></a>
        <a href="#"><TwitterIcon className="hover:text-blue-400"/></a>
        <a href="#"><GithubIcon className="hover:text-blue-400"/></a>
      </footer>
    </div>
  );
}
