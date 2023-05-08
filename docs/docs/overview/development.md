---
title: Development
sidebar_position: 2
---

# Development

A good CSS framework is not only about the design. It is also about the code. MatCSS is built with the idea of being easy to use and easy to customize. We want to make it easy for you to create a website that looks good and feels good. We also wanted to allow you to customize the framework to your liking, or even make your own changes and propose them! (Via a PR)

This page will cover the development process of MatCSS. It will also cover the tools that we use, the structure of the code, and more.

MatCSS is built with [SCSS](https://sass-lang.com/). It is a CSS preprocessor that allows us to use variables, mixins, functions and more. It also allows us to create a modular structure for our code. 

## Prerequisites

Before you start developing MatCSS, you should be familiar with the following concepts:

- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [SCSS](https://sass-lang.com/)
- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [PostCSS](https://postcss.org/)

Then you will want to install the following tools:

- [Node.js](https://nodejs.org/en/)
- [NPM](https://npmjs.org) or [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)
- [VSCode](https://code.visualstudio.com/) (Optional ** Recommended)

## Customizing MatCSS

To get started, you will want to [install](/docs/getting-started/installation) MatCSS.

## Contributing to MatCSS

If you wish to contribute to MatCSS, you'll first want to [fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) the repository. Then you can clone it to your computer.

### Installing dependencies

Once you have cloned the repository, you will want to install the dependencies. To do so, you can run the following command:

```bash
npm install
```

Once that is done, you can start the development process by running the following command:

```bash
npm run watch
```

This will start the development build. It will watch for changes in the `scss` folder and compile the code to the `dist` folder.

You can use `index.html` to test the components.

### Pull requests

Once you have made your changes, you can commit them and push them to your fork. Then you can create a pull request to the `main` branch of the repository. Before that, be sure to do the following:

- Test your changes
- Make sure your code is formatted correctly
- Make sure you read the [CONTRIBUTING.md](https://github.com/MatCSSKit/MatCSS/blob/main/CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](https://github.com/MatCSSKit/MatCSS/blob/main/CODE_OF_CONDUCT.md)
- Make sure you have a good description of your changes

Once you have done that, you can create a pull request. We will review your changes and merge them if they everything looks good!

## Modifying variables

Once you have installed MatCSS, you can start customizing it. You can customize MatCSS by changing the variables in the `scss/_variables.scss` file.

## Modifying components

If ever you wish to create/modify/delete a component, you can do so by modifying the files in the `scss/components` folder. Be sure to then edit `scss/mat.scss` to import the component, or remove it if you deleted it.

## Project structure

Here is the structure of MatCSS:

```bash
├── dist # The compiled code
├── docs # The documentation
├── scss # The source code for the SCSS part of MatCSS
│   ├── animations # The animations of MatCSS
│   ├── base # The foundation of MatCSS
│   ├── components # The components of MatCSS
│   ├── mixins # The mixins of MatCSS
│   ├── utilities # The utilities of MatCSS
│   ├── _mixins.scss # Where we import all the mixins
│   ├── _variables.scss # Where all the variables are defined
│   └── mat.scss # Where we import all the components, this is the main file
├── index.html # The index.html file for testing
├── package.json # The package.json file
```

## Building MatCSS

### Normal build

To build MatCSS, you can run the following command:

```bash
npm run build
```

This will build MatCSS and output the compiled code to the `dist` folder.

### Development build

To start the development build, you can run the following command:

```bash
npm run watch
```

This will start the development build. It will watch for changes in the `scss` folder and compile the code to the `dist` folder.

### Documentation build

To serve the documentation locally, you can run the following command in the `docs` folder:

```bash
npm start
```