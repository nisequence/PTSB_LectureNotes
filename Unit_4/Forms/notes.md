# Forms
- `<form>` groups input fields together
- `onsubmit` will gather data within the input fields and pass it on
- Methods:
    - (CRUD)
        - POST (Create)
        - GET (Read)
        - PUT (Update)
        - DELETE
    - Part of HTTP structure in how we pass data (will learn about in units 5 & 6)
- When a form is submitted, it automatically refreshes our browser.

## Some Attributes
- `for` helps tie labels with the input fields
- `autocomplete` allows us to show previous inputs that we might have had in past forms. Governs (and yet depends on) the browser's autocomplete function.
- `type` notes what type of data to expect/we will receive
- `name` associates the name of the input (helps the label know what input it's attached to)
- `placeholder` is a way for us to guide the users as to what might be input/typed into the input fields
- `value` is what is held within the input when submitted
    - This gets populated when a user types into it/interacts with it.