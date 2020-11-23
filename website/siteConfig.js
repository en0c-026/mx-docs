/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  title: "Docs", // Title for your website.
  tagline: "Welcome to Elrond",
  url: "https://docs.elrond.com", // Your website URL
  baseUrl: "/", // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: "Elrond Docs",
  organizationName: "Elrond Network",
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [{ search: true }],

  /* path to images for header/footer */
  headerIcon: "img/logos/logo.svg",
  footerIcon: "img/logos/elrond.svg",
  favicon: "img/favicon/favicon-32x32.png",

  /* Colors for website */
  colors: {
    primaryColor: "#000",
    secondaryColor: "#000",
  },

  /* Custom fonts for website */

  fonts: {
    myFont: ["Montserrat", "sans-serif"],
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Elrond Network. All rights reserved.`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: "atom-one-dark",
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [],

  stylesheets: [
    "https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap",
    "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.css",
  ],

  markdownPlugins: [
    // Highlight admonitions.
    require('remarkable-admonitions')({ icon: 'svg-inline' })
  ],

  // On page navigation for the current documentation page.
  onPageNav: "separate",
  cleanUrl: true,
  docsSideNavCollapsible: true,

  algolia: {
    apiKey: "12345678",
    indexName: "test",
  },

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  highlightPanels: [
    {
      title: "Discover Elrond",
      content:
        "Meet the internet-scale blockchain.",
      docName: "welcome/welcome-to-elrond",
      image: "symbol.svg",
    },
    {
      title: "Build an Application",
      content:
        "Use the Elrond devkit to build a dApp.",
      docName: "technology/architecture-overview",
      image: "symbol.svg",
    },
    {
      title: "Manage a Wallet",
      content:
        "Send, receive and store tokens.",
      docName: "wallet/ledger",
      image: "symbol.svg",
    },
    {
      title: "Run a Validator Node",
      content:
        "Earn rewards for producing blocks.",
      docName: "validators/overview",
      image: "symbol.svg",
    },
    {
      title: "Integrate a Platform",
      content:
        "Make Elrond a part of your tech stack.",
      docName: "integrators/observing-squad",
      image: "symbol.svg",
    },
    {
      title: "Create a Token",
      content:
        "Issue your ESDT or NFT tokens.",
      docName: "developers/esdt-tokens",
      image: "symbol.svg",
    },
    {
      title: "Explore the Devkit",
      content:
        "Use the SDK & APIs.",
      docName: "sdk-and-tools/erdpy/erdpy",
      image: "symbol.svg",
    },
    {
      title: "Learn how Elrond works",
      content:
        "Understand Adaptive State Sharding.",
      docName: "technology/architecture-overview",
      image: "symbol.svg",
    },
    ],
};

module.exports = siteConfig;
