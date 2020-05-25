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

    NODE_ENV=prod gulp scss


    <div class="faq-block" itemscope="" itemtype="https://schema.org/FAQPage" style="">
        <div class="accordion-user">
            <h2 class="faq-block__title">Часто задаваемые вопросы о Форекс</h2>
        </div>
        <div class="panel-user">
            <div class="faq-block__item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h3 class="faq-block__question" itemprop="name">&#9989; В чем физический смысл вымпела?<span class="faq-block__arrow"></span></h3>
                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <div class="faq-block__answer" itemprop="text">
                        <a href="https://www.kalita-finance.ru/obuchenie/statii/figura-vimpel-foreks">Это небольшая коррекция с быстрым продолжением основного движения</a> 
                    </div>
                </div>
            </div>
            <div class="faq-block__item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h3 class="faq-block__question" itemprop="name">&#9989; Как торговать вымпел?<span class="faq-block__arrow"></span></h3>
                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <div class="faq-block__answer" itemprop="text">
                        <a href="https://www.kalita-finance.ru/obuchenie/statii/figura-vimpel-foreks">Можно долиться по тренду или открыть первую сделку, если не успели войти ранее</a>
                    </div>
                </div>
            </div>
            <div class="faq-block__item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h3 class="faq-block__question" itemprop="name">&#9989; Формируется ли вымпел на спокойном рынке?<span class="faq-block__arrow"></span></h3>
                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <div class="faq-block__answer" itemprop="text">
                        <a href="https://www.kalita-finance.ru/obuchenie/statii/figura-vimpel-foreks">Нет, похожие фигуры могут быть, но они не несут пользы для трейдера</a>
                    </div>
                </div>
            </div>
            <div class="faq-block__item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h3 class="faq-block__question" itemprop="name">&#9989; Может ли вымпел быть фигурой разворота?<span class="faq-block__arrow"></span></h3>
                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <div class="faq-block__answer" itemprop="text">
                        <a href="https://www.kalita-finance.ru/obuchenie/statii/figura-vimpel-foreks">Если есть опора на уровень, то может</a>
                    </div>
                </div>
            </div>
        </div>
    </div>