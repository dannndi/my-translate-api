# Google Translate API Wrapper

# Usage
```
https://my-translate-api.herokuapp.com/api/v1/translate?text={text}&from={from}&to={to}
```
### Query params
| params        | desc | required |
| --------------- |:---------:|:---------:|
| text | text you want to translate | `yes` |
| from | country code for tranlate target | `no` by default the text will be translated to englih `id` |
| to | country code for tranlate target | `no` by default the text will be translated to englih `en` |