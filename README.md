## Development Guide

### Local development

Run `yarn && yarn start` from the repository's directory (`brabbitturns26`). This will compile the necessary packages and build the site locally. The site will be available at `localhost:3000`, any changes you make will only be reflected locally until you commit these changes, and push them to remote.

### Pushing changes

1. `git pull`
2. `git checkout -b <branch_name>`
3. Make your local changes
4. `git add -A`
5. `git commit -m "commit message"`
6. `git push origin <branch_name>`

Line by line:

- We must incorporate all the changes we made to the repository, so we must add the files with the (-A) argument denoting 'all' changes to our files.
- We commit, or persist the files we added to the local version of the repository. Every commit requires a commit message, therefore the (-m) argument gives the 'commit' a commit message of the following text in quotes. This is up to the user to fill in, and is for documentation purposes. E.g. it could range anywhere from "replaced team 1 results pdf" to "small style change to home page"
- Push the committed code to the master version. If there is an error denoting upstream branches, execute the full command ("git push -u origin master"). Otherwise, "git push" will suffice.

If at any point something unexpected comes up, CTRL+D or CTRL+C will terminate command execution and will return you to the command prompt.

The github repo is tied to a Heroku app, that auto deploys the website (https://brabbitturns26.herokuapp.com/) whenever Heroku detects a new commit in the main branch of the github repository. Therefore, `git push origin <branch_name>` or simply pushing to the main branch wil automatically deploy any changes you have made to the live site.

### Adding blog posts

In `src/components/Blogs/constants.js`, the `allBlogs` variable is defined as a list of objects, with corresponding `id`, `date`, `title`, and `content` keys. To create a new post:

1. Add a new object to the end of this list, incrementing `id` so that this new post has a unique id.
2. Fill in the given date and title.
3. Add content, which should be valid HTML syntax. You can reference existing content or https://www.learn-html.org/en/Basic_Elements
4. Go to localhost:3000/blogs to see your newly added blog post

### Adding photos

Various .jpg files live in `src/media/`, numbered currently from 1 to 51. The photos page is setup such that, (in `src/components/Photos/constants.js`, the code looks for .jpg files numbered from 1 to `MAX_PHOTO_NUMBER`. You can change `MAX_PHOTO_NUMBER` depending on which number, e.g. `51.jpg` you want to cut off at.

### Adding vlogs

In `src/components/Videos/constants.js`, the `allVideos` is a list of objects to which you will need to append objects to add vlogs. Add in another object, and fill in the title, subtitle, and src links. Note that you will need to take the youtube link by clicking 'Share' on the youtube video, going to the 'Embed' option, and copying the `src` attribute within the `iframe`

## Tips

### Helpful Git Commands

```console
git status
```

"git status" checks whether any files have been added or committed, and is a useful check to determine which git command you should run next.

```console
git stash
```

If you run into a merge conflict, or there files you have worked on whose changes you would like to discard, "git stash" will do this. It resets the state of your local repository to the last time you pushed to the master.

```console
git pull
```

Sometimes, you will need to incorporate changes made by another collaborator to your local codebase. "git pull" does exactly that, and takes all modified files from the master and syncs up the repository with your local. Be careful using this if you know that other collaborators have changed files that you are working on (or vice versa, if you begin working on files that others have modified).

### Basic terminal commands

https://computers.tutsplus.com/tutorials/navigating-the-terminal-a-gentle-introduction--mac-3855
