# attach

Блок `attach` служит для загрузки файла, предназначенного для отправки на сервер.

По умолчанию блок визуально представлен кнопкой на основе блока [button](../button/button.ru.md), открывающей системное окно загрузки файла, и текстовым сообщением (например, «Файл не выбран»). После загрузки файла отображаются следующие элементы:

* иконка файла (блок [icon](../icon/icon.md));
* имя файла (элемент `text`);
* крестик для отмены (элемент `clear`).

Реализация блока не позволяет прикреплять несколько файлов и не поддерживает drag-and-drop.

## Обзор блока

### Специализированные поля входного BEMJSON

<table>
    <tr>
        <th>Поле</th>
        <th>Тип</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td><a href=#button>button</a></td>
        <td>
            <code>String | BEMJSON</code>
        </td>
        <td>Определяет внешний вид кнопки для выбора файла</td>
    </tr>
    <tr>
        <td><a href=#nofiletext>noFileText</a></td>
        <td>
            <code>String</code>
        </td>
        <td>Определяет текст сообщения, когда файл не выбран.</td>
    </tr>
</table>

При необходимости дополнительные HTML-атрибуты блока могут быть заданы в зарезервированном поле `attrs` в BEMJSON.

### Модификаторы блока

<table>
    <tr>
        <th>Модификатор</th>
        <th>Способ использования</th>
    </tr>
    <tr>
        <td><a href=#themes>theme</a></td>
        <td>BEMJSON<br>
            JS</td>
    </tr>
    <tr>
        <td><a href=#disabled>disabled</a></td>
        <td>BEMJSON<br>
            JS</td>
    </tr>
    <tr>
        <td><a href=#focused>focused</a></td>
        <td>BEMJSON<br>
            JS</td>
    </tr>
</table>

## Документация

### Специализированные поля блока

Список зарезервированных полей входного BEMJSON:

<a name="button"></a>

#### button

Определяет внешний вид кнопки для выбора файла:

* задает текст кнопки

```bemjson
{
    block : 'attach',
    mods : { theme : 'normal' },
    button : 'Выберите файл'
}
```
* задает внешний вид и тип кнопки

```bemjson
{
    block : 'attach',
    mods : { theme : 'normal' },
    button : {
        block : 'button',
        mods : { theme : 'normal' },
        icon : { block : 'icon', mods : { action : 'download' },
        text: 'Выберите файл'
        }
    }
}
```

<a name="nofiletext"></a>

#### noFileText

Определяет текст сообщения, когда файл не выбран.

```bemjson
{
    block : 'attach',
    mods : { theme : 'normal' },
    button : 'Выберите файл',
    noFileText : 'файл не выбран'
}
```

### Модификаторы блока

<a name="themes"></a>

### Темы (модификатор `theme`)

Способы использования: BEMJSON, JS.

Без указания модификатора `theme` отображается нативный вид контрола.

**Тема normal**

```bemjson
{
    block : 'attach',
    mods : { theme : 'normal' },
    button : 'Выберите файл',
    noFileText : 'файл не выбран'
}
```

<a name="disabled"></a>

#### Неактивен (модификатор `disabled`)

Способы использования: BEMJSON, JS.

В неактивном состоянии блока кнопка выбора видна, но недоступна для действий пользователя. Блок не может получить модификатор `focused`.

```bemjson
{
    block : 'attach',
    mods : { theme : 'normal', disabled : true },
    button : 'Выберите файл',
    noFileText : 'файл не выбран'
}
```

<a name="focused"></a>

#### В фокусе (модификатор `focused`)

Способы использования: BEMJSON, JS.

Определяет стиль для блока, получающего фокус.

Модификатор `focused` в значении `true` автоматически выставляется блоку в момент, когда он находится в фокусе. Например, по нажатию клавиши `Tab` или при щелчке мышью.

Также модификатор мажет быть указан в декларации BEMJSON:

```bemjson
{
    block : 'attach',
    mods : { theme : 'normal', focused : true },
    button : 'Выберите файл',
    noFileText : 'файл не выбран'
}
```
