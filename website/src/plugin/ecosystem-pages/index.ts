import type { LoadContext, Plugin } from "@docusaurus/types";


const pages = [
  'prowler',
  'privateer', 
  'azure-policy',
  'azure-verified-modules',
  'aws-lightning-lane', 
  'gemara', 
  'grc-store', 
  'github-releases',
  'calm',
];
export default function pluginecosystemPages(context: LoadContext): Plugin<void> {
  return {
    name: "ecosystem-pages",

    async contentLoaded({ actions }) {
      const { createData, addRoute } = actions;

      pages.forEach(page => {
        addRoute({
          path: "/ecosystem/"+page,
          component: "@site/src/components/ecosystem/"+page+"/index.tsx",
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
