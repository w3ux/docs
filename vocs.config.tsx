import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'w3ux Library Documentation',
  theme: { 
    colorScheme: 'dark',
    accentColor: '#f2f2f2',
  },
  head() {
    return (
      <>
      <meta property="og:type" content="website" />
      <meta property="og: title" content="w3ux Library" />
      <meta property="og: image" content="https://w3ux.org/og-image.png" />
      <meta property="og:url" content="https://w3ux.org" />
      <meta property="og:description" content="Modular Web3 Utilities for Dapps" />
      </>
    )
  },
  logoUrl: {
    light: '/svg/logo-light.svg',
    dark: '/svg/logo-dark.svg',
  },
  socials: [
    { 
      icon: 'github', 
      link: 'https://github.com/w3ux/w3ux-library', 
    }
  ], 
  sidebar: [
    {
      text: 'Introduction',
      link: '/',
    },
    {
      text: 'Library',
      collapsed: false,
      items: [
        {
          text: 'Extension Assets',
          link: '/library/extension-assets',
        },
        {
          text: 'Factories',
          collapsed: true,
          items: [
            {
              text: "Overview",
              link: '/library/factories/overview',
            },
            {
              text: "withProviders",
              link: '/library/factories/withProviders',
            },
          ]
        },
        {
          text: 'Hooks',
          collapsed: true,
          items: [
            {
              text: "Overview",
              link: '/library/hooks/overview',
            },
            {
              text: 'useEffectIgnoreInitial',
              link: '/library/hooks/use-effect-ignore-initial',
            },
            {
              text: 'useOnResize',
              link: '/library/hooks/use-on-resize',
            },
            {
              text: 'useOutsideAlerter',
              link: '/library/hooks/use-outside-alerter',
            },
            {
              text: 'useSize',
              link: '/library/hooks/use-size',
            },
          ]
        },
        {
          text: 'React Connect Kit',
          collapsed: true,
          items: [
            {
              text: 'Overview',
              link: '/library/react-connect-kit/overview',
            },
            {
              text: 'ExtensionsProvider',
              link: '/library/react-connect-kit/extensions',
            },
            {
              text: 'ExtensionAccountsProvider',
              link: '/library/react-connect-kit/extension-accounts',
            },
          ]
        },
        {
          text: 'React Odometer',
          link: '/library/react-odometer',
        },
        {
          text: 'React Polkicon',
          link: '/library/react-polkicon',
        },
        {
          text: 'Types',
          link: '/library/types',
        },
        {
          text: 'Utils',
          link: '/library/utils',
        },
        {
          text: 'Validator Assets',
          link: '/library/validator-assets',
        },
      ]
    },
  ],
})
