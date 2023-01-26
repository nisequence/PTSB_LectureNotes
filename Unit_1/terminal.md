# The Terminal

The terminal is how we interact with our computer and its directories(folders) and files.

It is a CLI (Command Line Interface), a text-based interface to the computer.

We can type commands, manipulate files, execute programs, or open documents. It is more powerful and faster than a GUI.

(GUI is a Graphical User Interface using icons, menus, and windows for us to interact with in a visual way.)

<hr />

## Terminal Commands

- Print Working Directory
    - `pwd`
    - shows the name of the current directory & prints the full directory folder path
- List Directory
    - `ls`
    - show the content of the current directory, shows all the folders and/or files at the current directory path
- Make Directory
    - `mkdir`
    - creates a new directory inside the current one (aka makes a new folder)
- Touch or New Item
    - `touch fileName.fileType`
    - `ni fileName.fileType`
    - e.g. "ni terminal.md"
    - creates a new file at the current directory
- Change Directory
    - `cd`
    - moves into a different directory
    - to move forward: `cd fileOrFolderName` (tab can be used to auto-fill names)
    - to move backwards, `cd ..`
- Clear
    - `clear` or `cls`
    - clears the terminal screen
    - does not change current location

<hr>

## Other Terminal Commands

- Copy File
    - `cp fileName.fileType newFileName.fileType`
    - copies a file, ex: `cp index.html copyOfIndex.html`
- Move File
    - `mv`
    - moves a file, ex: `mv index.html ./newFolderPath`
- Help
    - `help`
    - provides a list of commands and/or opens a help menu
- Remove Here
    - *Danger Alert!*
    - `rm -r` or `rmdir`
    - permanent deletion of a file/folder
    - WARNING: These cannot be recovered! They do not get sent to the recycle bin.
    - `rm -r` removes a directory's contents (all/any folders and files it contains)
    - `rmdir` removes an empty directory/folder

<hr>

### Other Things to Note:

- In the terminal, a file path divides parent and child folder and files with a forward slash: `/`

- ex: desktop/PTSB_Jan_2023/Lecture/Unit_1/terminal.md

    - desktop
        - PTSB_Jan_2023
            - Lecture
                - Unit_1
                    - terminal.md

- Using the tab key can help us finish a folder or file name we are typing out

- We do need to type file/folder names exactly

- How to stop the terminal from running:
    - Use `ctrl+c` or `cmd+c` and enter/return
    - stops the terminal from running something and/or exits what's running or a menu
    - appears in the terminal as `^C`

- On Mac, `sudo` may need to be used before commands before commands where we need to elevate from user to admin privileges 
    -a password field will appear and your user computer password needs to be entered
<br> 
    
<hr>