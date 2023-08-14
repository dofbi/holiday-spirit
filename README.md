# Holiday Spirit

## About the project

read [Getting into the holiday spirit with Astro, React, and Supabase](https://www.aleksandra.codes/astro-supabase)

## Supabase project initialization

Paste the following SQL query in the Supabase editor and run it

```sql
create extension if not exists "uuid-ossp";

create table
  groups (
    id uuid primary key default uuid_generate_v4 (),
    name text not null,
    created_by text,
    created_at timestamp with time zone default now()
  );

create table
  members (
    id uuid primary key default uuid_generate_v4 (),
    group_id uuid references groups (id),
    name text not null,
    selected_by text,
    unique (group_id, name)
  );

CREATE FUNCTION draw_name11(groupid uuid, username text)
RETURNS text LANGUAGE plpgsql AS $$
  BEGIN
    UPDATE members
    SET selected_by = username
    WHERE name = (SELECT name
                 FROM members
                 WHERE group_id = groupid
                   AND selected_by IS NULL
                 ORDER BY RANDOM()
                 LIMIT 1);
    RETURN (SELECT name
            FROM members
            WHERE group_id = groupid
              AND selected_by = username);
  END;
$$;
```

```
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
