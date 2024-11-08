import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
      // links: [
      //   {
      //     text: 'SaaS',
      //     href: getPermalink('/homes/saas'),
      //   },
      //   {
      //     text: 'Startup',
      //     href: getPermalink('/homes/startup'),
      //   },
      //   {
      //     text: 'Mobile App',
      //     href: getPermalink('/homes/mobile-app'),
      //   },
      //   {
      //     text: 'Personal',
      //     href: getPermalink('/homes/personal'),
      //   },
      // ],
    },
    {
      text: 'Services',
      href: getPermalink('/services'),
      
    },
    {
      text: 'Pricing',
      href: getPermalink('/pricing'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
    // {
    //   text: 'Pages',
    //   links: [
    //     {
    //       text: 'Features (Anchor Link)',
    //       href: getPermalink('/#features'),
    //     },

    //     {
    //       text: 'About us',
    //       href: getPermalink('/about'),
    //     },

    //     {
    //       text: 'Terms',
    //       href: getPermalink('/terms'),
    //     },
    //     {
    //       text: 'Privacy policy',
    //       href: getPermalink('/privacy'),
    //     },
    //   ],
    // },
    {
      text: 'Offers',
      links: [
        {
          text: 'Win Cargo Ticket',
          href: getPermalink('/offers/pakistan-cargo-ticket'),
        },
        {
          text: 'Pakistan Cargo Service',
          href: getPermalink('/offers/pakistan-cargo-service'),
        },
        {
          text: 'Cargo Services Dubai to Pakistan',
          href: getPermalink('/offers/cargo-services-dubai-to-pakistan'),
        },
        {
          text: 'Cargo Pakistan',
          href: getPermalink('/offers/cargo-pakistan'),
        },
        {
          text: 'Pak Cargo',
          href: getPermalink('/offers/pak-cargo'),
        },
        {
          text: 'Cargo UAE to Pakistan',
          href: getPermalink('/offers/cargo-uae-to-pakistan'),
        },
        {
          text: 'Cargo Packing',
          href: getPermalink('/offers/cargo-packing'),
        },
      ],
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
      // links: [
      //   {
      //     text: 'Blog List',
      //     href: getBlogPermalink(),
      //   },
      //   {
      //     text: 'Article',
      //     href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
      //   },
      //   {
      //     text: 'Article (with MDX)',
      //     href: getPermalink('markdown-elements-demo-post', 'post'),
      //   },
      //   {
      //     text: 'Category Page',
      //     href: getPermalink('tutorials', 'category'),
      //   },
      //   {
      //     text: 'Tag Page',
      //     href: getPermalink('astro', 'tag'),
      //   },
      // ],
    },
    // {
    //   text: 'Widgets',
    //   href: '#',
    // },
  ],
  actions: [
    {
      variant: 'primary',
      text: 'Call',
      icon: 'tabler:phone',
      href: 'tel:+971504948135',
    },
    {
      text: 'WhatsApp',
      icon: 'tabler:brand-whatsapp',
      href: 'https://wa.me/message/TJZP4WU2P2XGD1',
      target: '_blank',
      // target: '_parent',
    },
    
  ],
};

export const footerData = {
  links: [
    {
      title: 'Products',
      links: [
        { text: 'Sea Cargo', href: '/services/sea-cargo' },
        { text: 'Air Cargo', href: '/services' },
        { text: 'Warehousing', href: '/services' },
        { text: 'Courier Services', href: '/services' },
        { text: 'Transportation', href: '/services' },
        { text: 'Packing services', href: '/services' },
        { text: 'Full Container', href: '/services' },
      ],
    },
    // {
    //   title: 'Platform',
    //   links: [
    //     { text: 'Developer API', href: '#' },
    //     { text: 'Partners', href: '#' },
    //     { text: 'Atom', href: '#' },
    //     { text: 'Electron', href: '#' },
    //     { text: 'AstroWind Desktop', href: '#' },
    //   ],
    // },
    // {
    //   title: 'Support',
    //   links: [
    //     { text: 'Docs', href: '#' },
    //     { text: 'Community Forum', href: '#' },
    //     { text: 'Professional Services', href: '#' },
    //     { text: 'Skills', href: '#' },
    //     { text: 'Status', href: '#' },
    //   ],
    // },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Blog', href: '/blog' },
        { text: 'Careers', href: '/contact' },
        { text: 'Contact', href: '/contact' },
        // { text: 'Inclusion', href: '#' },
        // { text: 'Social Impact', href: '#' },
        // { text: 'Shop', href: '#' },
      ],
    },
  ],
  // secondaryLinks: [
  //   { text: 'Terms', href: getPermalink('/terms') },
  //   { text: 'Privacy Policy', href: getPermalink('/privacy') },
  // ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/Pakistani_cargo' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/pakistanicargo' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/pakistancargouae' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/pakistancargo' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://www.pakistancargoexpress.com)]"></span>
    <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://www.pakistancargo.org/"> Pakistan Cargo</a> · All rights reserved.
  `,
};
