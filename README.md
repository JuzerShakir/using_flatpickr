## Flatpickr

[Getting Started](https://flatpickr.js.org/getting-started/)
[Examples](https://flatpickr.js.org/examples/)

Commands executed in the following order:

```bash
rails new using_flatpickr
```

```bash
bin/importmap pin flatpickr
```

**Add the following lines in the `application.html.erb` file to execute flatpickr**

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css"
/>
<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
```

```bash
rails g scaffold event name start_time:datetime end_time:datetime
```

```bash
rails g stimulus flatpickr
```

**See `flatpickr_controller.js` file for modification of date_time attributes**
