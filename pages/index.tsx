import Head from "next/head";
import type { GetStaticProps, NextPage } from "next";
import React from "react";

import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Link from "next/link";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocials } from "../utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  return (
    <div
      className="bg-[#181818] text-white h-screen snap-y snap-mandatory 
      overflow-y-scroll overflow-x-hidden z-0 
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#800020]/60"
    >
      <Head>
        <title>{pageInfo?.name} - Modern Portfolio</title>
      </Head>

      {/* Header */}
      {/* Header is done just need to edit the socials a bit */}
      <Header socials={socials} />
      {/* Hero */}
      <section id="hero" className="snap-start ">
        <Hero pageInfo={pageInfo} />
      </section>
      {/* About */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>
      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursro-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full hover:grayscale cursore-pointer"
              src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/46384/up-arrow-emoji-clipart-md.png"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};
export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 100,
  };
};
