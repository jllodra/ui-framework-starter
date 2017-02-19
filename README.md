### UI Framework Starter Kit – Based on "Bootstrap-Sass 3.3.7"
--

The folder structure is the following:

```
|
|- stylesheets: here there are all the .sass files and also the generated bootstrap.css file
|- fonts: the glyphicons font for symbols in several formats, http://glyphicons.com/
|- images: empty folder, but you can use it to place images in case you need them
|- javascripts: the javascript for all UI components that need of javascript to work
|- examples: there are some .html files here to demonstrate how to use Bootstrap
```

To compile the Sass files and obtain the `bootstrap.css` file, run:

```
sass stylesheets/bootstrap.sass:stylesheets/bootstrap.css
```

While working on the `.scss` files, you can watch for changes using the command:

```
sass --watch stylesheets/bootstrap.scss:stylesheets/bootstrap.css
```

--

You can know more about Bootstrap in [getbootstrap.com](http://getbootstrap.com).