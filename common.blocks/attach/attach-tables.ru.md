# attach

Блок `attach` служит для загрузки файла, предназначенного для отправки на сервер.

По умолчанию блок визуально представлен кнопкой на основе блока [button](../button/button.ru.md), открывающей системное окно загрузки файла, и текстовым сообщением (например, «Файл не выбран»). После загрузки файла отображаются следующие элементы:

* иконка файла (блок [icon](../icon/icon.md));
* имя файла (элемент `text`);
* крестик для отмены (элемент `clear`).

Реализация блока не позволяет прикреплять несколько файлов и не поддерживает drag-and-drop.

## Специализированные поля блока

Список зарезервированных полей входного BEMJSON:

<table>
    <tr>
        <th>Поле</th>
        <th>Тип</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td>button</td>
        <td>
            <code>String | BEMJSON</code>
        </td>
        <td>Определяет внешний вид и текст кнопки для выбора файла.</td>
    </tr>
    <tr>
        <td>noFileText</td>
        <td>
            <code>String</code></td>
        <td>Определяет текст сообщения, когда файл не выбран.</td>
    </tr>
</table>

При необходимости дополнительные HTML-атрибуты блока могут быть заданы в зарезервированном поле `attrs` в BEMJSON.

## Модификаторы блока

<table>
    <tr>
        <th>Модификатор</th>
        <th>Способ использования</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td><a href=#themes>theme</a></td>
        <td>BEMJSON<br>
            JS</td>
        <td>Без указания модификатора <code>theme</code> отображается нативный вид контрола.</td>
    </tr>
    <tr>
        <td><a href=#disabled>disabled</a></td>
        <td>BEMJSON<br>
            JS</td>
        <td>В неактивном состоянии блока кнопка выбора видна, но недоступна для действий пользователя.</td>
    </tr>
    <tr>
        <td><a href=#focused>focused</a></td>
        <td>BEMJSON<br>
            JS</td>
        <td>Определяет стиль для блока, получающего фокус.</td>
    </tr>
</table>

### Описание

<a name="themes"></a>

#### Темы (модификатор `theme`)

Реализация блока доступна только в теме `narmal`.

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

В неактивном состоянии блок не может получить модификатор `focused`.

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
