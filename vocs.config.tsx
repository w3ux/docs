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
      <script async defer src="https://apisa.polkadot.cloud/latest.js"></script>
      <noscript
        ><img
          src="https://apisa.w3ux.org/noscript.gif"
          alt=""
          referrerPolicy="no-referrer-when-downgrade"
      /></noscript>
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
              text: 'useOutsideAlerter',
              link: '/library/hooks/use-outside-alerter',
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
