**Author**: [@njsfield](https://github.com/njsfield)

# Accessibility Morning Challenge (60 minutes)

1. Clone this repo

   We are going to copy this repository to our local environment.

   At the top of this page, click on the "Clone or download" button and copy the url shown here:

   ![where to copy url on github](./img/copy-clone-link.png)

   Then use the command in your terminal:

   ```
   git clone https://github.com/foundersandcoders/accessibility-challenge.git
   ```

   The git clone command copies an existing git repository, normally from some remote location to your local environment.

   You should now be able to move into the directory in your terminal:

   ```
   cd accessibility-challenge
   ```

1. Open the directory in your editor. Use either `code .` for VS Code or `atom .` for Atom.
1. Open `index.html` in your editor and improve as many semantic/accessibility issues littered throughout the file as you can. (**Hint: Ideally there shouldn't be any `div`s or `span`s left!**)
1. Don't forget to check automated accessibility tools in your browser or online.

You'll notice that some of the accessibility tools we've used so far (such as Chrome Developer Tools Audit and HTML Checker) **won't work** on your `index.html` if you've opened it as a local file in your browser.

Luckily, both Atom and VS Code have packages that allow you to get around this, through launching your project on a simple HTTP server. You can install these packages from within your editor, and then in VS Code, simply right-click your `index.html` in the file tree and click 'Open with Live Server'. In Atom, hit the packages tab at the top and go to "atom-live-server".

## Resources

- [Accessibility Tools](https://github.com/jsms90/web-accessibility/blob/master/tools-that-can-help.md)
- [Semantic Resources](https://github.com/foundersandcoders/master-reference/tree/master/coursebook/precourse#semantic-html)
- [Atom Live Server docs](https://github.com/jas-chen/atom-live-server)
- [VS Code Live Server docs](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
