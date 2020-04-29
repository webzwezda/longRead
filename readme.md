## About repository

This repository contains second branches

branch | description 
---|---
html | Only html template
jekyll | jekyll template

## How start

### Install modules gulp

    sudo npm i -g npm

But first install 

* Nodejs
* NPM
* Gulp

All modules ***Gulp***

1. browser-sync
1. gulp
1. gulp-concat
1. gulp-file-include
1. gulp-if
1. gulp-minify-css
1. gulp-sass 
1. gulp-sourcemaps 
1. gulp-uglifyjs    

Need console spell

    sudo npm i -D gulp gulp-if gulp-sass gulp-file-include gulp-sourcemaps gulp-concat browser-sync gulp-uglifyjs

Просто запусти 

```bash
npm install
```

## Commands for run Gulp

### Develop mode 

Just run *gulp*

    gulp

Well run `gulp default` create a file **main.css** and put in *sourceMap*

### Product mode

It's command not put *sourceMap* in **main.css** 

    NODE_ENV=prod gulp

Command only generate *main.css*

    NODE_ENV=prod gulp sass


    if (screenWidth < 400) {
    
                      var hell0 = hell.content.querySelectorAll('#hell0--max400');
                      console.log(hell0[0]);
    
                      var artileAsideHell0 = document.getElementById('hell0');
    
                      var cloneHell0 = document.importNode(hell0[0], true);
                      artileAsideHell0.append(cloneHell0);
                  } else if (screenWidth > 400 && screenWidth < 1000) {
                      document.write('tablet');
                  } else {
                      document.write('desctop');
                  }