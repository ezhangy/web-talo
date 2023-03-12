# TALO Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/1783448f-3274-4da9-b260-189e8c09e931/deploy-status)](https://app.netlify.com/sites/talounion/deploys)

This is the website of TALO, Brown's CS TA Labor Organization. We're CS TA union at Brown University. 

This site is built using **Astro**, with **yarn** as the package manager. To contribute, feel free to read the instructions below! 

## Structure
**Astro** creates routes based on pages in the `src/pages` folder. Add `.astro` (mix of JavaScript and HTML) or `.mdx` (Markdown with JSX components) files to create new pages on the site. `src/components` contains components, some are TypeScript React and some are Astro components. `src/layouts` contains base layouts for pages. This includes the header, style, footer, nav bar components so your content can be directly included in. All styles are in `src/styles`. Components, layouts, assets, styles can be accessed using `@components`, `@layouts`, etc. 

Here's an example file directory: 
```
/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Base.astro
│   └── pages/
│       └── index.astro
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                           |
| :------------------ | :----------------------------------------------- |
| `yarn install`      | Installs dependencies                            |
| `yarn dev`          | Starts local dev server at `localhost:3000`      |
| `yarn build`        | Build your production site to `./dist/`          |
| `yarn preview`      | Preview your build locally, before deploying     |
| `yarn astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `yarn astro --help` | Get help using the Astro CLI                     |

Generally, running `yarn dev` will create a live version of the website as you make edits. 

## Contributing

We welcome pull requests! Pull requests are automatically deployed as a preview as well. Let us know if you have any questions! 