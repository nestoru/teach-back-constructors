## Constructors at work
In this lesson we will learn how to build objects in javascript through constructors. Git tags are used to show the student how we build on previous concepts without the need to keep multiple forlders for each version. This can be handy to compare previous with current work via git diff.

To show all available tags:
```
git tag -l
```

To create a tag:
```
git tag <tag name>
```

To switch to a tag:
```
git checkout <tag name>
```

To see the difference between two tags:
```
git diff <tag1> <tag2>
```

To see the difference in a specific file from the two tags:
```
git difftool <tag1> <tag2> -- <filename>
```
