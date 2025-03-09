export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About Us",
      href: "/about-us",
      children: [
        {
          label: "Contact Us",
          href: "/contact-us",
        },
      ],
    },
    {
      label: "NGO",
      href: "/ngo",
      children: [
        {
          label: "NGOs Registration",
          href: "/ngos-registration",
        },
        {
          label: "Statistics",
          href: "/statistics",
        },
      ],
    },
    {
      label: "Education & Training",
      href: "/education",
    },
    {
      label: "Events",
      href: "/events",
    },
    {
      label: "Projects",
      href: "/projects",
      children: [
        {
          label: "Good Practice",
          href: "/good-practice",
        },
        {
          label: "Onegoing Projects",
          href: "/ongoing-projects",
        },
        {
          label: "Completed Projects",
          href: "/completed-projects",
        },
        {
          label: "Collaboration Opportunities",
          href: "/collaboration-opportunities",
        },
      ],
    },
    {
      label: "Data Archive",
      href: "/data-archive",
    },
  ],

  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About Us",
      href: "/about-us",
      children: [
        {
          label: "Contact Us",
          href: "/contact-us",
        },
      ],
    },
    {
      label: "NGO",
      href: "/ngo",
      children: [
        {
          label: "NGOs Registration",
          href: "/ngos-registration",
        },
        {
          label: "Statistics",
          href: "/statistics",
        },
      ],
    },
    {
      label: "Education",
      href: "/education",
    },
    {
      label: "Events",
      href: "/events",
    },
    {
      label: "Projects",
      href: "/projects",
      children: [
        {
          label: "Good Practice",
          href: "/good-practice",
        },
        {
          label: "Onegoing Projects",
          href: "/ongoing-projects",
        },
        {
          label: "Completed Projects",
          href: "/completed-projects",
        },
        {
          label: "Collaboration Opportunities",
          href: "/collaboration-opportunities",
        },
      ],
    },
    {
      label: "Data Archive",
      href: "/data-archive",
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
