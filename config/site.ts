export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "سامانه پاسداری از میراث فرهنگی ناملموس",
  description:
    "سامانه مدیریت سایت مرکز مطالعات منطقه ای پاسداری از میراث فرهنگی ناملموس در آسیای غربی و مرکزی تحت نظارت یونسکو",
  navItems: [
    {
      label: "Home",
      href: "/",
      static: true,
    },
    {
      label: "About Us",
      href: "/about-us",
      static: true,
      children: [
        {
          label: "Contact Us",
          href: "/contact-us",
          static: true,
        },
      ],
    },
    {
      label: "NGO",
      href: "/ngo",
      static: true,

      children: [
        {
          label: "NGOs Registration",
          href: "/ngos-registration",
          static: true,
        },
        {
          label: "Statistics",
          href: "/statistics",
          static: true,
        },
      ],
    },
    {
      label: "Education & Training",
      href: "/education",
      static: true,
    },
    {
      label: "Events",
      href: "/events",
      static: true,
    },
    {
      label: "Projects",
      href: "/projects",
      static: true,
      children: [
        {
          label: "Good Practice",
          href: "/good-practice?status=goodPractice&page=1",
          static: true,
        },
        {
          label: "Onegoing Projects",
          href: "/ongoing-projects?status=ongoing&page=1",
          static: true,
        },
        {
          label: "Completed Projects",
          href: "/completed-projects?status=completed&page=1",
          static: true,
        },
        {
          label: "Collaboration Opportunities",
          href: "/collaboration-opportunities?status=collaborationOpportunities&page=1",
          static: true,
        },
      ],
    },
    {
      label: "Data Archive",
      href: "/data-archive?page=1",
      static: true,
    },
  ],

  navMenuItems: [
    {
      label: "Home",
      href: "/",
      static: true,
    },
    {
      label: "About Us",
      href: "/about-us",
      static: true,

      children: [
        {
          label: "Contact Us",
          href: "/contact-us",
          static: true,
        },
      ],
    },
    {
      label: "NGO",
      href: "/ngo",
      static: true,

      children: [
        {
          label: "NGOs Registration",
          href: "/ngos-registration",
          static: true,
        },
        {
          label: "Statistics",
          href: "/statistics",
          static: true,
        },
      ],
    },
    {
      label: "Education",
      href: "/education",
      static: true,
    },
    {
      label: "Events",
      href: "/events",
      static: true,
    },
    {
      label: "Projects",
      href: "/projects",
      static: true,

      children: [
        {
          label: "Good Practice",
          href: "/good-practice",
          static: true,
        },
        {
          label: "Onegoing Projects",
          href: "/ongoing-projects",
          static: true,
        },
        {
          label: "Completed Projects",
          href: "/completed-projects",
          static: true,
        },
        {
          label: "Collaboration Opportunities",
          href: "/collaboration-opportunities",
          static: true,
        },
      ],
    },
    {
      label: "Data Archive",
      href: "/data-archive",
      static: true,
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
