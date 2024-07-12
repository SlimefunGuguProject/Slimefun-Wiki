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
    },
    {
      type: 'category',
      label: '有用的物品',
      className: 'hidden',
      items: [
        'Portable-Crafter',
        'Portable-Dustbin',
        'Medical-Supplies',
        'Backpacks',
        'Cooler',
        'Tape-Measure',
      ]
    },
    {
      type: 'category',
      label: '基础机器',
      className: 'hidden',
      items: [
        'Enhanced-Crafting-Table',
        'Grind-Stone',
        'Armor-Forge',
        'Ore-Crusher',
        'Compressor',
        'Makeshift-Smeltery',
        'Smeltery',
        'Automatic-Ignition-Chamber',
        'Pressure-Chamber',
        'Magic-Workbench',
        'Ore-Washer',
        'Table-Saw',
        'Composter',
        'Automated-Panning-Machine',
        'Industrial-Miners',
        'Crucible',
        'Juicer',
        'Enhanced-Furnaces',
        'Block-Placer',
        'Output-Chest',
      ],
    },
    {
      type: 'category',
      label: '工具',
      className: 'hidden',
      items: [
        'Gold-Pan',
        'Nether-Gold-Pan',
        'Grappling-Hook',
        'Smelter\'s-Pickaxe',
        'Lumber-Axe',
        'Pickaxe-of-Containment',
        'Hercules\'-Pickaxe',
        'Explosive-Pickaxe',
        'Explosive-Shovel',
        'Pickaxe-of-the-Seeker',
        'Cobalt-Pickaxe',
        'Pickaxe-of-Vein-Mining',
        'Climbing-Pick',
        'Soulbound-Tools',
      ]
    },
  ],
  // auto generated sidebars
};

export default sidebars;
