import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  rootSidebar: [
    {
      type: 'doc',
      id: 'Home'
    },
    {
      type: 'category',
      label: '总览',
      collapsed: false,
      items: [
        'Slimefun-in-a-nutshell',
        'Installing-Slimefun',
        'Getting-Started',
        'Common-Issues',
        'How-to-report-bugs',
        'Expanding-the-Wiki',
        'Translating-Slimefun',
        'FAQ',
      ]
    },
    {
      type: 'category',
      label: '其他插件',
      collapsed: false,
      items: [
        'Addons',
        'Developer-Guide',
        'Protection-Plugins',
      ]
    },
    {
      type: 'category',
      label: '分类',
      collapsed: false,
      items: [
        'Weapons',
        'Items',
        'Basic-Machines',
        'Tools',
        'Resources',
        'Food',
        'Magical-Items',
        'Magical-Armor',
        'Technical-Components',
        'Miscellaneous-Items',
        'Armor',
        'Talismans',
        'Magical-Gadgets',
        'Technical-Gadgets',
        'Electric-Machines',
        'GPS',
        'Androids',
        'Cargo-Management',
        'Seasonal-Categories',
      ]
    },
    {
      type: 'link',
      label: '附属插件非官方 Wiki',
      href: 'https://slimefun-addons-wiki.guizhanss.cn/'
    },
    // hidden categories below
    {
      type: 'category',
      label: '武器',
      className: 'hidden',
      items: [
        'Walking-Sticks',
        'Sword-of-Beheading',
        'Blade-of-Vampires',
        'Seismic-Axe',
        'Soulbound-Weapons',
        'Bows',
      ]
    }
  ],
  // auto generated sidebars
};

export default sidebars;
