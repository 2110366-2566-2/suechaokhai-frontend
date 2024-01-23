## Getting Started

**Prerequisite**

- Node.js
- pnpm
- git

1. Clone repository

```bash
git clone https://github.com/brain-flowing-company/pprp-frontend.git
```

2. If you don't yet have `pnpm` run this to install it

```bash
npm i -g pnpm
```

3. Navigation to root directory and install dependencies

```bash
pnpm i
```

4. Run development server

```bash
pnpm run dev
```

## Contribution

1. Make sure to pull the latest commit from `dev` branch

```bash
git pull origin dev
```

2. Create new branch with your git GUI tools or use this command

```bash
git checkout -b <branch-name>
```

3. Make sure you on the correct branch
4. Craft your wonderful code and don't forget to commit frequently

```bash
git add <file-path> # add specific file
# or
git add . # add all files
```

```bash
git commit -m "<prefix>: <commit message>"
```

> Note: _check out [commit message convention](#commit-message-convention)_

5. Push code to remote repository
6. Create pull request on [github](https://github.com/brain-flowing-company/pprp-frontend/pulls)

- compare changes with **base**: `dev` &#8592; **compare**: `<branch-name>`
- title also apply [commit message convention](#commit-message-convention)
- put fancy description

### Commit message convention

```bash
git commit -m "<prefix>: <commit message>"
```

- use lowercase
- **meaningful** commit message

**Prefix**

- **`feat`**: introduce new feature
- **`fix`**: fix bug
- **`refactor`**: changes which neither fix bug nor add a feature
- **`chore`**: changes to the build process or extra tools and libraries
