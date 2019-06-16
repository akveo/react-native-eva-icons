- [Before contributing](#things-you-must-follow-before-contributing)
- [New Feature Checklist](#new-feature-checklist)
- [Framework Structure](#framework-structure)
- [Development](#development)

# Things you must follow before contributing
- Don’t overcomplicate
- Don’t make things too abstract
- Use tslint, to check the code style
- Write tests

# New Feature Checklist
- lint checks are passing
- typescript is compiled into javascript without errors which works properly
- tests are added/updated and passing
- commit message is properly formatted

# Framework Structure

- lib - Framework itself, represents the package published to npm.
- scripts
    - ts-node - contains ts-node scripts launched from npm scripts
    - src - contains source scripts launched from ts-node scripts
      
## Icons 

Located in [./lib/icons](./lib/icons). In master branch generated source code is not tracked, [see why](./README.md#where-is-icons-source-code).

# Development

## Generate Icons

Run `npm run clean:lib && npm start`. This will cleanup generated sources and replace it with a new one.
