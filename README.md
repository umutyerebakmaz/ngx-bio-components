[![wakatime](https://wakatime.com/badge/github/umutyerebakmaz/ngx-bio-components.svg)](https://wakatime.com/badge/github/umutyerebakmaz/ngx-bio-components)
# @ngx-bio-components

Welcome,
You can access and contribute NGX Bio Component UI libraries developed for Angular in this repo.

It has been developed by taking inspiration from the core features of Angular Material and TailwindUI interface components.

Thank you to the [Angular Material](https://github.com/angular/components) and [TailwindCSS](https://github.com/tailwindlabs/tailwindcss) team for their contributions.

## Components List

**_Some of the components on the list are still in development and may not work properly._**

- [Alert](https://www.npmjs.com/package/@ngx-bio-components/alert)
- [Avatar](https://www.npmjs.com/package/@ngx-bio-components/avatar)
- Badge
- Bottom Sheet
- [Button](https://www.npmjs.com/package/@ngx-bio-components/button)
- Button Toggle
- Card
- Checkbox
- Chip
- Chip List
- datepicker
- Form Field
- Hint
- Icon
- Input
- Label
- List
- List Item
- Menu
- Menu Item
- Paginator
- Progress Bar
- Progress Spinner
- Radio Button
- Select
- Sidenav
- Slide Toggle
- Slider
- Snackbar
- Stepper
- Tab
- Table
- Toolbar
- Tooltip

## Get started developing your own Angular Component UI Library

### Using Workspace Generators

Create a new library project using the workspace generator

```console
nx workspace-generator generate-library button
```

Create a new component using the workspace generator.

```console
nx workspace-generator generate-component foo --project="button
```

## Start developing with Storybook

```console
nx run button:storybook
```

Navigate to <http://localhost:4200/>. The storybook will automatically reload if you change any of the source files.

## Build

```console
nx run button:build:production
```

o build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

There are also many [community plugins](https://nx.dev/community) you could add.

## Further help

This project was generated using [Nx](https://nx.dev). Visit the [Nx Documentation](https://nx.dev) to learn more.
