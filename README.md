# DocsyCannon

DocsyCannon is a template for technical documentation sites, providing easysite navigation, structure, and more. This template's aim is to get you started writing documentation using the [Docsy](www.docsy.dev) Hugo theme, with [CloudCannon's CMS](www.cloudcannon.com). Use this project as a template and edit it with your own content. 

## Features

- Pre-built pages
- Pre-styled components
- Pre-built [search](www.pagefind.app)
- Docs with sidebar navigation menu and taxonomy features
- Blog with pagination and category pages
- Optimised for editing in [CloudCannon](www.cloudcannon.com)

## Examples

- [DocsyCannon example site](https://star-map.cloudvent.net/)
- [DocsyCannon documentation](https://sassy-lace.cloudvent.net/)

## Using DocsyCannon as a template

A simple way to get started is to use this project as a template, which gives you a site project that is set up and ready to use. To do this:

1. Click **Use this template**.

2. Select a name for your new project and click **Create repository from template**.

3. [Sign up][] for CloudCannon using their free trial period.

4. [Build your site][].

## Running the website locally

Make your own local working copy of your new repo using git clone, replacing https://github.com/me/example.git with your repo’s web URL:

```bash
git clone https://github.com/me/example.git
```

Building and running the site locally requires [Hugo](https://gohugo.io).

Once you've made your working copy of the site repo, from the repo root folder, run:

```
hugo server
```

You can now edit your own versions of the site’s source files.

If you want to do SCSS edits and want to publish these, you need to install `PostCSS`

```bash
npm install
```

## Hugo Modules

In this project, the Docsy theme component is pulled in as a Hugo module, together with other module dependencies:

```bash
$ hugo mod graph
hugo: collected modules in 566 ms
hugo: collected modules in 578 ms
github.com/google/docsy-example github.com/google/docsy@v0.5.1-0.20221017155306-99eacb09ffb0
github.com/google/docsy-example github.com/google/docsy/dependencies@v0.5.1-0.20221014161617-be5da07ecff1
github.com/google/docsy/dependencies@v0.5.1-0.20221014161617-be5da07ecff1 github.com/twbs/bootstrap@v4.6.2+incompatible
github.com/google/docsy/dependencies@v0.5.1-0.20221014161617-be5da07ecff1 github.com/FortAwesome/Font-Awesome@v0.0.0-20220831210243-d3a7818c253f
```

## Running a container locally

You can run docsy-example inside a [Docker](https://docs.docker.com/)
container, the container runs with a volume bound to the `docsy-example`
folder. This approach doesn't require you to install any dependencies other
than [Docker Desktop](https://www.docker.com/products/docker-desktop) on
Windows and Mac, and [Docker Compose](https://docs.docker.com/compose/install/)
on Linux.

1. Build the docker image

   ```bash
   docker-compose build
   ```

1. Run the built image

   ```bash
   docker-compose up
   ```

   > NOTE: You can run both commands at once with `docker-compose up --build`.

1. Verify that the service is working.

   Open your web browser and type `http://localhost:1313` in your navigation bar,
   This opens a local instance of the docsy-example homepage. You can now make
   changes to the docsy example and those changes will immediately show up in your
   browser after you save.

### Cleanup

To stop Docker Compose, on your terminal window, press **Ctrl + C**.

To remove the produced images run:

```console
docker-compose rm
```

For more information see the [Docker Compose
documentation](https://docs.docker.com/compose/gettingstarted/).

## Troubleshooting

As you run the website locally, you may run into the following error:

```
➜ hugo server

INFO 2021/01/21 21:07:55 Using config file:
Building sites … INFO 2021/01/21 21:07:55 syncing static files to /
Built in 288 ms
Error: Error building site: TOCSS: failed to transform "scss/main.scss" (text/x-scss): resource "scss/scss/main.scss_9fadf33d895a46083cdd64396b57ef68" not found in file cache
```

This error occurs if you have not installed the extended version of Hugo.
See this [section](https://www.docsy.dev/docs/get-started/docsy-as-module/installation-prerequisites/#install-hugo) of the user guide for instructions on how to install Hugo.

Or you may encounter the following error:

```
➜ hugo server

Error: failed to download modules: binary with name "go" not found
```

This error occurs if you have not installed the `go` programming language on your system.
See this [section](https://www.docsy.dev/docs/get-started/docsy-as-module/installation-prerequisites/#install-go-language) of the user guide for instructions on how to install `go`.

[alternate dashboard]: https://app.netlify.com/sites/goldydocs/deploys
[deploys]: https://app.netlify.com/sites/docsy-example/deploys
[docsy user guide]: https://docsy.dev/docs
[Docsy]: https://github.com/google/docsy
[docsycannon]: #
[example.docsy.dev]: https://example.docsy.dev
[hugo theme module]: https://gohugo.io/hugo-modules/use-modules/#use-a-module-for-a-theme
[CloudCannon's CMS]: https://cloudcannon.com/
[Sign up]: https://app.cloudcannon.com/register?trial=cc_standard
[Build your site]: https://cloudcannon.com/community/learn/hugo-cms---get-started-with-cloudcannon/