# Noteworthy

A small group project created over the course of a week to build a simple one page note app in vanilla javascript.

Created by [Ian Walton](https://github.com/ian-1), [Kane Gin](https://github.com/KaneG9), and [Yohann Tissprand](https://github.com/YohannTisserand). 

## Setup

```sh
$> brew install http-server
$> git clone https://github.com/ian-1/Note_App.git
$> cd Note_App
$> http-server
```

Open http://localhost:8080/ in browser. Now add some Noteworthy notes!

## Approach

<details>
<summary>User Stories</summary>

As a programmer <br>
So I can find the one I want <br>
I can see a list of my notes, where each note is abbreviated to the first 20 characters

As a programmer <br>
So I can record something I need to remember<br>
I can create a new note

As a programmer<br>
So I can see all the information in the note<br>
I can see the full text of an individual note on its own page

As a programmer<br>
So I can record notes with fun little pictures<br>
I can use shortcodes like `:fire:` that get converted into emojis like 🔥

As a programmer<br>
So I can remember what I took down<br>
I can refresh the page and still see my notes

</details>  

* We begun be creating a testing framework (see [Testing](#Testing))
* Using TDD we created the logic for the first three user stories within a NoteContainer and Note class
  * NoteContainer class is able to create notes, create a list of titles with ID of all saved notes, get note content from note ID and get note title from note ID.
  * Note class has an ID and content and is able to return its title (first 20 characters of content) and read its content
* Created our display using basic HTML
  * contains title, text area and a list of notes
  * has hidden display of note contents which is later controlled by the interface
* Created interface using the DOM using vanilla javascript
  * Adds new notes to our list
  * Displays content of a note when clicked on
  * Returns to main page with back button
* Created local storage so notes are not lost on page refresh
  * Note container is stored using JSON.stringify()
  * The container is retrieved using JSON.parse() then the class object is rebuild from the result along with the note class objects
  * The container is loaded and saved after every action
* Added emojification to webpage
  * Web page converts emoji codes to emojis using the [emojify API](https://makers-emojify.herokuapp.com/)
## Testing

We created a new testing framework with the following matchers:

* toEqual
* toBeTrue
* toThrowError
* toInclude
* toIncludeNestedArray

These are run using immediately invoked function expressions (IIFE). For example:

```javascript
(function() {
  assert.toEqual('description of test', actual, expected)
})();
```

When run our tests return results in the console of the specRunner.html page. This includes the description of test, a comment of weather the test has passed or failed and the actual and expected outcomes.

## Improvements

* Doubles in testing environment
* Deploy the progam



