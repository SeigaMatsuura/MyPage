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
          description: "最近の活動（学会発表・受賞・論文採択など）のタイムライン",
          section: "Navigation",
          handler: () => {
            window.location.href = "/MyPage/news/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "業績一覧。_bibliography/papers.bib から自動生成されます（査読論文・国際会議・プレプリントの3分類）。",
          section: "Navigation",
          handler: () => {
            window.location.href = "/MyPage/publications/";
          },
        },{id: "nav-research",
          title: "research",
          description: "研究テーマ一覧。カードをクリックすると各テーマの詳細ページ（図・アニメーション付き）に移動します。",
          section: "Navigation",
          handler: () => {
            window.location.href = "/MyPage/research/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "経歴・スキル一覧。assets/json/resume.json (JSON Resume 形式) から自動生成されます。",
          section: "Navigation",
          handler: () => {
            window.location.href = "/MyPage/cv/";
          },
        },{id: "news-準備中-後日更新-学会発表-論文採択-受賞などの活動を随時掲載します-satellite",
          title: '準備中（後日更新）— 学会発表・論文採択・受賞などの活動を随時掲載します。 :satellite:',
          description: "",
          section: "News",},{id: "projects-月軌道デブリの衝突確率-回避マヌーバ",
          title: '月軌道デブリの衝突確率・回避マヌーバ',
          description: "月周回軌道上のスペースデブリに対する衝突確率評価と、燃料効率を考慮した回避マヌーバの設計",
          section: "Projects",handler: () => {
              window.location.href = "/MyPage/projects/1_lunar_debris/";
            },},{id: "projects-破片雲の密度伝播",
          title: '破片雲の密度伝播',
          description: "NASA Standard Breakup Model による破片生成と、破片雲の密度分布の時間発展（位相肖像図・密度分布）",
          section: "Projects",handler: () => {
              window.location.href = "/MyPage/projects/2_debris_cloud/";
            },},{id: "projects-sgp4-tle-による軌道追跡",
          title: 'SGP4/TLE による軌道追跡',
          description: "二行軌道要素 (TLE) と SGP4 伝播モデルを用いたロケット上段の軌道追跡・解析",
          section: "Projects",handler: () => {
              window.location.href = "/MyPage/projects/3_sgp4_tracking/";
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
