# Website HTWK Smart Driving

This is the [Gatsby](https://www.gatsbyjs.org/) based website of the HTWK Smart Driving team.

## Development

You might want to use [yarn](https://yarnpkg.com/lang/en/) instead of npm.

```
npm install
npm run dev
```

## How to write a new post

Adding a post is easy!

1. Add a new directory for the new post under `src/posts/` and give it a meaningful name.<br>
    Note that this name is only useful for other developers and has nothing to do with the resulting URL structure.
1. Create an `index.md` Markdown file in the directory like the following example:

    ```md
    ---
    title: My post title
    date: "2018-06-20"
    ---
    My **awesome** post content.
    
    ![My picture](./picture_in_same_directory.jpg)
    ```

1. Start the development server as descriped in the previous section (`npm run dev`).
1. The page should show the newly created post and reflect content changes immediately.
1. Commit your changes and merge the branch into `master` when you're happy.

It is imported to **create the Markdown file first** and to start the development server afterwards, because the title and date need to be parsed once by Gatsby in the beginning. Afterwards the hot reloading works as expected.

## Production build

```
npm run build
```

## Deployment

Every time a branch is merged into `master` (or commits are pushed to `master`) a GitLab pipeline is started, which builds the Gatsby project and deploys the build articafts to the website document root `/var/www/html` afterwards. 

**So the page goes live immediately!**
