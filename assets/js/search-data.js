// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/MyPage/";
    },
  },{id: "nav-news",
          title: "news",
          description: "A timeline of recent activities (conference talks, media appearances, milestones).",
          section: "Navigation",
          handler: () => {
            window.location.href = "/MyPage/news/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Auto-generated from _bibliography/papers.bib, grouped into journal papers and international conferences.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/MyPage/publications/";
          },
        },{id: "nav-research",
          title: "research",
          description: "Research topics. Click a card to open its detail page (with figures and animations).",
          section: "Navigation",
          handler: () => {
            window.location.href = "/MyPage/research/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Education and skills, auto-generated from assets/json/resume.json (JSON Resume format).",
          section: "Navigation",
          handler: () => {
            window.location.href = "/MyPage/cv/";
          },
        },{id: "news-gave-a-presentation-at-the-9th-european-conference-on-space-debris-bonn-germany-satellite",
          title: 'Gave a presentation at the 9th European Conference on Space Debris (Bonn, Germany)....',
          description: "",
          section: "News",},{id: "news-appeared-on-the-broadcast-of-night-of-makaizo-society-魔改造の夜-nhk-s-engineering-souped-up-competition-program-13th-night-13夜-tv",
          title: 'Appeared on the broadcast of Night of Makaizo society (魔改造の夜), NHK’s engineering “souped-up”...',
          description: "",
          section: "News",},{id: "news-yotsuba-kulover-a-cubesat-co-developed-by-students-of-kyushu-university-and-kyushu-institute-of-technology-was-successfully-deployed-into-orbit-from-the-iss-kibō-module-artificial-satellite",
          title: 'YOTSUBA-KULOVER, a CubeSat co-developed by students of Kyushu University and Kyushu Institute of...',
          description: "",
          section: "News",},{id: "news-featured-in-night-of-makaizo-society-yoake-hen-魔改造の夜-夜明け編-dawn-edition-on-nhk-program-page-www-web-nhk-tv",
          title: 'Featured in Night of Makaizo society: Yoake-hen (魔改造の夜 夜明け編, “Dawn Edition”) on NHK....',
          description: "",
          section: "News",},{id: "projects-collision-probability-amp-avoidance-in-lunar-orbits",
          title: 'Collision Probability &amp;amp; Avoidance in Lunar Orbits',
          description: "Collision probability assessment and fuel-efficient avoidance maneuver design for spacecraft against debris in lunar orbits",
          section: "Projects",handler: () => {
              window.location.href = "/MyPage/projects/1_lunar_debris/";
            },},{id: "projects-density-propagation-of-fragment-clouds",
          title: 'Density Propagation of Fragment Clouds',
          description: "Fragment generation with the NASA Standard Breakup Model and time evolution of the debris-cloud density distribution (phase portraits, density maps)",
          section: "Projects",handler: () => {
              window.location.href = "/MyPage/projects/2_debris_cloud/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6E%65%75%74%72%69%6E%6F.%32%30%30%33.%30%31%33%30@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/SeigaMatsuura", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/MyPage/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
