# button

Используется для создания различных типов кнопок.

### Краткая информация

#### Специализированные поля блока

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <a href=#buttonname>name</a> | <code>String</code> | Значение, отправляемое на сервер. Не использутеся, если выбран тип кнопки с модификатором <code>type</code> в значении <code>link</code>. |
| <a href=#buttonval>val</a> | <code>String</code> | Значение, отправляемое на сервер. Не использутеся, если выбран тип кнопки с модификатором <code>type</code> в значении <code>link</code>. |
| <a href=#buttontext>text</a> | <code>String</code>| Текст кнопки. |
| <a href=#buttonurl>url</a> | <code>String</code>| Адрес ссылки. Используется только для <a href="#link-button">кнопки с модификатором</a> <code>type</code> в значении <code>link</code>. |
| <a href=#buttonicon>icon</a> | <code>BEMJSON</code> | Иконка, которая формируется блоком <a href="../icon/icon.ru.md">icon</a>. |
| <a href=#buttonid>id</a> | <code>BEMJSON</code> | Уникальный идентификатор кнопки. |
| <a href=#buttontab>tabIndex</a> | <code>Number</code> | Определяет последовательность перехода между кнопками при нажатии на <code>Tab</code>. |
| <a href=#buttontitle>title</a> | <code>String</code> | всплывающая подсказка. |



#### Модификаторы блока

| Модификатор | Допустимое значение | Способ использования | Описание |
| ----------- | ------------------- | -------------------- | -------- |
| <a href=#buttonthemes>theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | Стилевое оформление. |
| <a href=#buttonsize>size</a> | <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code> | <code>BEMJSON</code> | Размер кнопки. Используется только для <a href="#buttonthemes">кнопок с модификатором</a> <code>theme</code> в значении <code>islands</code>.|
| <a href=#buttontype>type</a> | <code>'link'</code>, <code>'submit'</code> | <code>BEMJSON</code> | Типы кнопок.|
| <a href=#buttonview>view</a> | <code>'action'</code>, <code>'pseudo'</code> | <code>BEMJSON</code> | Визуальное выделение.|


| <a href=#focused>focused</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Блок в фокусе. |
| <a href=#themes>theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | Стилевое оформление. |
| <a href=#disabled>disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Неактивное состояние. |
| <a href=#focused>focused</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Блок в фокусе. |






### Описание

Блок `button` предоставляет возможность изменять размер, состояние, содержимое и внешний вид кнопок.

## Модификаторы блока

<a name="buttonthemes"></a>

### Модификатор `theme`

Допустимое значение: `'islands'`.

Способы использования: `BEMJSON`.

Обязательные дополнительные параметры: модификатор <a href="buttonsize">size</a>.

Без указания модификатора `theme` отображается нативный вид контрола.

Пример:

```bemjson
{
    block : 'button',
    text : 'Тема islands',
    mods : {
        theme : 'islands',
        size : 'm'
    }
}
```

<a name="buttonsize"></a>

### Модификатор `size`

Допустимое значение для темы `islands`: `'s'`, `'m'`, `'l'`, `'xl'`.

Способы использования: `BEMJSON`.

Задает размер всем типам кнопок.

```bemjson
{
    block : 'button',
    text : 'Small',
    mods : {
        theme : 'islands',
        size : 's'
    }
}
```

```bemjson
{
    block : 'button',
    text : 'Medium',
    mods : {
        theme : 'islands',
        size : 'm'
    }
}
```

```bemjson
{
    block : 'button',
    text : 'Large',
    mods : {
        theme : 'islands',
        size : 'l'
    }
}
```

```bemjson
{
    block : 'button',
    text : 'X-Large',
    mods : {
        theme : 'islands',
        size : 'xl'
    }
}
```


<a name="buttontype"></a>

### Модификатор `type`

Допустимое значение: `'link'`, `'submit'`.

Способы использования: `BEMJSON`.

<a name="link-button"></a>

#### Кнопка-ссылка (модификатор `type` в значении `link`)

Обязательные дополнительные параметры: поле <a href="buttonurl">url</a>.

Используется для изменения поведения кнопки: при нажатии она ведет себя как ссылка. Переход осуществляется по адресу, указанному в поле `url`.

Пример:

```bemjson
{
    block : 'button',
    url : 'www.bem.info',
    text : 'Попробуй БЭМ',
    mods : {
        theme : 'islands',
        size : 'm',
        type : 'link'
    }
}
```

#### Кнопка отправки формы (модификатор `type` в значении `submit`)

Используется для создания кнопки отправки данных на сервер. Кнопка такого типа всегда должна располагаться в форме.

Пример:

```bemjson
{
    block : 'button',
    text : 'Кнопка отправки данных',
    mods : {
        theme : 'islands',
        size : 'm',
        type : 'submit'
    }
}
```

<a name="buttonview"></a>

### Модификатор `view`

Допустимое значение: `'action'`, `'pseudo'`.

Способы использования: `BEMJSON`.

#### Кнопка действия (модификатор `view` в значении `action`)

Используется для визуального выделения кнопки на странице.

```bemjson
{
    block : 'button',
    mods : {
        theme : 'islands',
        size : 'm',
        view : 'action'
    },
    text : 'Купить сейчас!'
}
```

#### Псевдокнопка (модификатор `view` в значении `pseudo`)

Используется для визуального выделения, когда кнопка получает прозрачный фон.

```bemjson
{
    block : 'button',
    mods : {
        theme : 'islands',
        size : 'm',
        view : 'pseudo'
    },
    text : 'Псевдокнопка'
}
```

В неактивном состоянии границы псевдокнопки исчезают, и она сливается со страницей.

```bemjson
{
    block : 'button',
    mods : {
        theme : 'islands',
        size : 'm',
        view : 'pseudo',
        disabled : true
    },
    text : 'Псевдокнопка'
}
```

<a name="buttondisabled"></a>

### Модификатор `disabled`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Модификатор отвечает за неактивное состояние, при котором блок виден, но недоступен для действий пользователя.

Пример:

```bemjson
{
    block : 'button',
    text : 'Неактивна',
    mods : {
        theme : 'islands',
        size : 'm',
        disabled : true
    }
}
```

<a name="buttonfocused"></a>

### Модификатор `focused`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Модификатор `focused` отвечает за наличие фокуса на блоке.

Пример:

```js
{
    block : 'button',
    text : 'В фокусе',
    mods : {
        theme : 'islands',
        size : 'm',
        focused : true
    }
}
```

### Модификатор `togglable`

Допустимое значение: `true`.

Способы использования: `BEMJSON`.




Используется для реализовать залипание кнопки. Допустимые значения:


#### Модификатор `togglable` в значении `check`

Первое нажатие на кнопку вдавливает ее, второе – приводит в первоначальное состояние.

```bemjson
{
    block : 'button',
    text : 'Check',
    mods : {
        theme : 'islands',
        size : 'm',
        togglable : 'check'
    }
}
```

#### Модификатор `togglable` в значении `radio`

Нажатие на кнопку вдавливает ее и она не может быть приведена в первоначальное состояние. Используется в составе радиогруппы (ссылка!!!!!!)

### Нажатие `_pressed` нельзя ни в BEMJSON, ни в JS

Определяет действие «нажатие» на кнопку. Используется для кнопок с модификатором togglable

### Специализированные поля блока

<a name="buttonname"></a>

#### `name`

<table>
    <tr>
        <th>Поле</th>
        <th>Тип</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td></td>
        <td>
            <code>String</code>
        </td>
        <td>Задает текст кнопки.</td>
    </tr>
    <tr>
        <td></td>
        <td>
            <code>BEMJSON</code></td>
        <td>Задает иконку, которая формируется блоком <a href="../icon/icon.ru.md">icon</a>.</td>
    </tr>
    <tr>
        <td></td>
        <td>
            <code>String</code>
        </td>
        <td>Адрес ссылки. Используется только для <a href="#link-button">кнопки-ссылки</a>.</td>
    </tr>
    <tr>
        <td></td>
        <td>
            <code>String</code>
        </td>
        <td>Уникальный идентификатор кнопки.</td>
    </tr>
    <tr>
        <td></td>
        <td>
            <code>Number</code>
        </td>
        <td>Определяет последовательность перехода между кнопками при нажатии на `Tab`.</td>
    </tr>
    <tr>
        <td>val</td>
        <td>
            <code>String</code>
        </td>
        <td></td>
    </tr>
    <tr>
        <td>name</td>
        <td>
            <code>String</code>
        </td>
        <td></td>
    </tr>
    <tr>
        <td>title</td>
        <td>
            <code>String</code>
        </td>
        <td>Описывает содержимое элемента в виде всплывающей подсказки, которая появляется при наведении курсора на элемент. Вид такой подсказки зависит от браузера, настроек операционной системы и не может быть изменен с помощью HTML-кода или стилей. Превращается в HTML-атрибут title прочитывается читалкой
</td>
    </tr>
</table>

