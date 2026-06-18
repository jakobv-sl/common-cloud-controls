import type { LoadContext, Plugin } from "@docusaurus/types";


export const pages = [
  {
    name: 'AWS Lightning Lane',
    nav: 'aws-lightning-lane',
  },
  {
    name: 'Azure Policy',
    nav: 'azure-policy',
  },
  {
    name: 'Azure Verified Modules',
    nav: 'azure-verified-modules',
  },
  {
    name: 'CALM',
    nav: 'calm',
  },
  {
    name: 'Gemara',
    nav: 'gemara',
  },
  {
    name: 'GitHub Releases',
    nav: 'github-releases',
  },
  {
    name: 'GRC.Store',
    nav: 'grc-store',
  },
  {
    name: 'Privateer',
    nav: 'privateer',
  },
  {
    name: 'Prowler',
    nav: 'prowler',
  },
];

export default function pluginecosystemPages(context: LoadContext): Plugin<void> {
  return {
    name: "ecosystem-pages",

    async contentLoaded({ actions }) {
      const { createData, addRoute } = actions;

      pages.forEach(page => {
        addRoute({
          path: "/ecosystem/"+page.nav,
          component: "@site/src/components/ecosystem/"+page.nav+"/index.tsx",
          exact: true,
        });
      });

      addRoute({
        path: "/ecosystem",
        component: "@site/src/components/ecosystem/Home/index.tsx",
        exact: true,
      });
    },
  };
}
