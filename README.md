jquery.dropdown
===============

jquery vk.com like dropdown simulation with a and ul

template of markup
```html
<div class="b-dropdown">
        <a href="#" class="b-dropdown__trigger">select value</a>
        <div class="b-dropdown__container">
            <div class="b-dropdown__title"></div>
            <ul class="b-dropdown__list">
                <li><a href="#">value 1</a></li>
                <li><a href="#">value 2</a></li>
                <li class="is-selected"><a href="#">value 3</a></li>
                <li><a href="#">value 4</a></li>
            </ul>
        </div>
    </div>
```

```javascript
$(document).ready(function(){
    $('.b-dropdown').dropdown();
});
```
