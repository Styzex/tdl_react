import React from "react";

const links = [
  {
    platform: "GitHub",
    url: "https://github.com/Styzex",
    icon: "github-icon",
  },
  {
    platform: "X",
    url: "https://x.com/viktreeej",
    icon: "X-icon",
  },
  {
    platform: "Email me",
    url: "mailto:viktor.paraj@gmail.com",
    icon: "envelope-icon",
  },
];

const SocialLinks = () => {
  return (
    <ul className="mt-5 flex flex-row justify-center space-x-4">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 transition duration-150 ease-in-out hover:text-blue-800 hover:underline"
          >
            <i className={`fa fa-${link.icon}`} aria-hidden="true" />
            {link.platform}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#000000] to-[#1b1b1b] text-white">
      <div className="mt-5 flex flex-col flex-wrap items-center">
        <h1 className="mb-5 text-3xl">About Me</h1>
        <p>
          Hi, I'm Viktor. I'm a enterpreneur software engineer and a web
          developer from Slovakia.
        </p>
        <p>
          I'm currently making fullstack web applications and smaller projects
          with Rust as a hobby.
        </p>
        <p>
          I love to learn new things and I'm always looking for new challenges.
        </p>
        <p>If you want to contact me, you can find me on:</p>
        <SocialLinks />
      </div>
    </main>
  );
}
