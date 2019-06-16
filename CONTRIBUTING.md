# Contributing to react-native-eva-icons

- [Guidance](#guidance)
- [Commit Message Guide](#commit-message-guidelines)
- [Submitting a Pull Request](#submitting-a-pull-request)

## Guidance

### On easy to review PRs

If you implement a feature which can affect on a UI please create a short demo on it in a [playground app](./DEV_DOCS.md#creating-a-playground-demo).
This will decrease maintainer time to review requested changes.

### On maintainable code

Code is much more expensive to maintain than it is to write. A maintainable PR is much more likely to be accepted.

A maintainable PR is simple to understand and often small in scope. It is robust and unlikely to break if another part of the system is modified. It keeps related code close together and avoids prematurely separating concerns. It follows the coding standards implied by the codebase and Expo coding guidelines. It strikes a balance with enough code to provide a feature that's widely useful without being overly generalized. A maintainable PR minimizes the attention it needs as the codebase changes over time.

Tests and types can improve maintainability and we expect PRs to include them. In particular, use tests to demonstrate the behavior of edge cases that are less likely to occur than the common code path. It is the edge cases we are less likely to notice if they break, and it is the edge cases that we need to behave correctly when they expose an issue in an app and the developer needs to debug. It is relatively easy to get code working; write tests to keep the code working.

However, tests and types can also obstruct maintainability. Overfitted tests break more often and are more difficult to update even when refactoring code that doesn't change its public API. They consume time and attention. Some APIs don't lend themselves well to static typing and lead to precarious type definitions that are not simple to understand or modify. We use tests and types as a means to an end, not an end to zealously pursue.

## Commit Message Guidelines

I have very precise rules over how our git commit messages can be formatted. This leads to **more
readable messages** that are easy to follow when looking through the **project history**.  But also,
I use the git commit messages to **generate the react-native-eva-icons change log**.

### Commit Message Format

Each commit message has a special format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
```

The **scope** is optional.

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier
to read on GitHub as well as in various git tools.

### Revert
If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of
the reverted commit. In the body, it should say: `These reverts commit <hash>.`, where the hash is
the SHA of the commit being reverted.

### Type
Must be one of the following:

* **feat**: A new feature
* **fix**: A bug fix
* **docs**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing
  semi-colons, etc)
* **refactor**: A code change that neither fixes a bug or adds a feature
* **perf**: A code change that improves performance
* **test**: Adding missing tests or correcting existing tests
* **build**: Changes that affect the build system, CI configuration or external dependencies
            (example scopes: gulp, broccoli, npm)
* **chore**: Other changes that don't modify `src` or `test` files
* **release**: Release version commit

### Subject
The subject contains a succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize the first letter
* no dot (.) at the end

## Submitting a Pull Request
Before you submit your Pull Request (PR) consider the following guidelines:

* Search [GitHub][link:repo-pulls] for an open or closed PR
  that relates to your submission. You don't want to duplicate effort.
* Make your changes in a new git branch:

     ```shell
     git checkout -b my-fix-branch master
     ```
* Read the [developer documentation](./DEV_DOCS.md).
* Create your patch, **including appropriate test cases**.
* Test your changes.
* Commit your changes using a descriptive commit message that follows our [commit message conventions](#commit-message-guidelines). Adherence to these conventions is necessary because release notes are automatically generated from these messages.

     ```shell
     git commit -a
     ```
  Note: the optional commit `-a` command line option will automatically "add" and "rm" edited files.

* Push your branch to GitHub:

    ```shell
    git push my-fork my-fix-branch
    ```

* In GitHub, send a pull request to `master`.
* If we suggest changes then:
  * Make the required updates.
  * Rebase your branch and force push to your GitHub repository (this will update your Pull Request):

    ```shell
    git rebase master -i
    git push -f
    ```

That's it! Thank you for your contribution!
