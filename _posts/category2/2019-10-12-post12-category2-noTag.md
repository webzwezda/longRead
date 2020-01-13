---
layout: post
title: 'Post12 category2 noTag'
headline: 'Title for inside post'
description: 'The maximum number of characters in the description is 160. This description of the record will be slightly larger, which will allow you to see the flaws if they are. The text was created with the help of Google translator.'
keywords: "one key, two key"
date: 2019-10-11
dateModified: 2019-10-11
category: category2 
sociaLocker: 'true'
image: 
    url: '/537x240.jpg'
    alt: 'ну а хули нам'
breadcrumb:
  - id: category
    name: cat2
    url: /category2
---

Ну тут описание страницы котарая содержит ***em & strong***
{:.p0}


1. [Заголовки](#anchor1)
    1. [Термины](#anchor1-1)
{:#anchor}

Заголовки
---

[title](/url){:target="_blank"}

### Термины
{:#anchor1-1}

* Термины
* Сноски

> все профессии нужны все проффессии нужны

#### Термин

Вот так выглядит простой пример термина, простой абзац и после него через двоеточие его расшифровка

Боссы 

: это крупные, агрессивные и опасные монстры, которые являются существенной проблемой для неподготовленных игроков

#### Сноска

Мощьный босс ахмудин[^first]

[^first]: ахмудин это бос щупальцами и нужно по ним бить и не иначе

Изображения
---

### Figure

{% include site/figure.html
 url='/konosuba.jpg'
 alt='alt'
 text='Коносуба блэд нука давай невъебенно большое описание что бы я ахуел, ну че за х... давай еще больше а то непонятно, ай блять интерленьяж нид поправить' %}
 
### img

Картинка должна быть минимум в `420px` потому что на маленьких экранах растягивается во всю ширину

![aqua]({{ '/assets/image/src' | prepend: site.baseurl | prepend: site.url }}/537x240.jpg){:itemprop="image"}

Text
---

Разберем пару вариантов

- абзацы
- много текста в спесках

### абзацы

Мы знаем что делать пирсинг пистолетом не больно, а если оценивать по десяти бальной шкале то это 3 из 10. Но у этого есть один большой или даже очень большой минус.

При проколе пистолетом мочки мы получим рваную рану, а если будем прокалывать хрящ то получим в нем трещину, а она заживает жуть как долго и у этого есть реально плохие последствия в виде келойда.

Ко всем этим недостаткам добавляется дополнительное наращивание коши на месте прокола, это может быть не заметно окружающим но вас это будет тревожить.

### list ol

1. При покраснении и припухлости мочки пользуются слабым раствором марганцовки. Несколько раз в день им промывают проблемное место, передвигая сережку. Постепенно опухоль спадает. При необходимости применяют антибактериальные мази: Целестодерм, Левомеколь, тетрациклиновую мазь. При сильной боли деткам дают ибупрофен или парацетамол в соответствующей возрасту дозировке.
1. При кровоточивости, которая продолжается несколько дней и даже недель, стоит насторожиться. Обычно после прокола выбегает жидкость (сукровица), а появление крови возможно по разным причинам (одна из них – травмирование сосуда при прокалывании и развитие гиперемии). Сережку придется вынуть, а ранку обработать антисептиком.
1. При нагноении помогает обработка проблемного участка спиртом или перекисью водорода. Хорошо помогает Целестодерм, цинковая мазь. Из народного арсенала выручает сок алоэ, масло чайного дерева, настойка календулы, раствор морской соли.

Table 
---

title | title2 | title3 | title4 | title | title2 | title3 | title4 
---|---
description | description | description | description | description | description | description | description 
description | description | description | description | description | description | description | description
description | description | description | description | description | description | description | description

code
---

Пример кода для теста работаспособности тега `code` 

```javascript
  function setSomething(bStyle, sProp, sVal) {
    var bSet = Boolean(sVal), fAction = aDOMFunc[bSet | bStyle << 1],
        aArgs = Array.prototype.slice.call(arguments, 1, bSet ? 3 : 2),
        aNodeList = bStyle ? this.cssNodes : this.nodes;

    if (bSet && bStyle) { aArgs.push(''); }
    for (
      var nItem = 0, nLen = this.nodes.length;
      nItem < nLen;
      fAction.apply(aNodeList[nItem++], aArgs)
    );
    this.follow = setSomething.caller;
    return this;
  }
```

{% include site/youtube.html 
id='I8pqI4Uo4Ow'
alt='video about the worldoooo'
%}

SociaLocker
---

{% include site/sociaLocker.html
content='<p>content</p>'
%}

recomend
---

{% include site/recommend.html 
url='url'
alt='alt'
%}

video
---

{% include site/video.html 
url='/pronama.mp4'
type='video/mp4'
%}

