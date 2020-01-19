- [Before contributing](#things-you-must-follow-before-contributing)
- [New Feature Checklist](#new-feature-checklist)
- [Framework Structure](#framework-structure)
- [Development](#development)

## Things you must follow before contributing

- Don’t overcomplicate
- Don’t make things too abstract
- Use tslint, to check the code style
- Write tests

## New Feature Checklist

- lint checks are passing
- generation scripts works without fails
- typescript is compiled into javascript without errors which works properly
- tests are added/updated and passing
- commit message is properly formatted

## Framework Structure

- lib - Framework itself, represents the package published to npm.
- playground - Separated demo application used to quickly debug changes.
- scripts
    - ts-node - contains ts-node scripts launched from npm scripts
    - src - contains source scripts launched from ts-node scripts
      
## Icons 

Located in [./lib/icons](./lib/icons). In master branch generated source code is not tracked, [see why](./README.md#where-is-icons-source-code).

## Development

### Generate Icons

Run `npm run clean:lib && npm run generate`. This will cleanup generated sources and replace it with a new one.

### Creating a Playground Demo

If you're working on a feature which can affect UI please create a short demo on it in a playground app. To do that, simply create React component demonstrating this feature in ./playground/showcase dir.

Before running an app make sure you have generated icons in a ./lib dir so application can resolve it.

To run a playground application use `yarn playground start`.

