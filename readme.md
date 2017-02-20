# Accessibility Morning Challenge (60 minutes)

1. Clone this repo
```
git clone git@github.com:njsfield/accessibility-challenge.git
```

2. Open the index.html file
3. Using your test editor, improve as many semantic/accessibility issues littered throughout the file as you can!
4. To help you start, I'd recommend downloading [this](https://atom.io/packages/atom-beautify) useful plugin for Atom.
5. Use one of the many available accessibility checking tools available online to help you.

## Resources
- [Accessibility Tools](https://github.com/jsms90/web-accessibility/blob/master/tools-that-can-help.md)
- [Semantic Resources](https://github.com/foundersandcoders/master-reference/blob/master/coursebook/precourse/resources.md#semantic-hmtl)

## Solution

1. [Format file for readability with Atom beautify](https://www.granneman.com/webdev/coding/formatting-and-indenting-your-html/)
2. [Include DOCTYPE, to enable standards mode and render CSS correctly](http://reference.sitepoint.com/css/doctypesniffing)
3. [Add meta element with charset attributeto allow for special characters](https://www.w3.org/International/questions/qa-html-encoding-declarations.en)
4. [Add meta element with author and description attributes (SEO)](https://teamtreehouse.com/community/what-are-the-essential-meta-tags-i-should-be-using-in-every-project)
5. [Add meta element with viewport rule to allow the device width to set the viewport width, set the initial scale to 1 so the page isn't zoomed in/out on page load ](https://developer.mozilla.org/en/docs/Mozilla/Mobile/Viewport_meta_tag)
6. [Set the language of the document in the html element (lang="en")](https://www.w3.org/International/questions/qa-html-language-declarations)
7. [Include title element in the head for browser toolbars, favourite title and search engine results](https://www.codecademy.com/en/forum_questions/517b5fa9fdbfd72bac0026b2)
8. [Use appropriate heading elements (h1,h2) instead of span elements to indicate page structure and help screen readers navigate through heading levels](http://accessiblehtmlheadings.com/)
9. [Add image titles and alt attributes of img elements, to provide alternative and additional information for users who cannot see the images (and SEO)](https://www.searchenginejournal.com/image-alt-text-vs-image-title-whats-the-difference/)
10. [Instead of divs, use sections (indicates a themed section), headers (indicates topmost portion of a section), articles (indicating self-contained compositions) and footers (indicating end of a themed section)](http://www.hongkiat.com/blog/html-5-semantics/)
11. [Use paragraph elements instead of span elements](http://www.456bereastreet.com/archive/200903/use_the_p_element_to_create_paragraphs/)
12. [Add label elements for the form, to allow screen readers to speak the elements fields](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/How_to_structure_an_HTML_form)
13. [Enable tab ordering by setting the tabindex="0" attribute on elements (if the DOM order matches tab order)](http://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html)
14. [Use quote and cite elements for semantics and accessibility](http://html5doctor.com/blockquote-q-cite/)
