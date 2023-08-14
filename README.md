# Etch Notation

Etch ~~Notation~~ is a simple, responsive theme for [Hugo](https://gohugo.io) with a focus on writing (as well as reading). This theme is a fork of my favorite Hugo theme, [Etch](https://lukasjoswiak.github.io/etch/), due to the simplicity. Great thanks for Lukas!

<img src="https://raw.githubusercontent.com/akherlan/etch-notation/master/images/screenshot_notation.png" alt="screenshot" width="545px">

<img src="https://raw.githubusercontent.com/akherlan/etch-notation/master/images/screenshot_mark.png" alt="screenshot" width="545px">

## Features:

* Homepage with list of posts.
* Support for pages.
* Responsive design for optimized mobile experience.
* Syntax highlighting with customizable theme.
* ~~Dark theme which automatically adjusts based on users' setting ([example](https://github.com/LukasJoswiak/etch/wiki/Dark-mode)).~~
* No external dependencies, ~~no JavaScript~~, no web fonts.
* **Using [rough-notation](https://github.com/rough-stuff/rough-notation) JavaScript for writing annotation.**
* Internationalization friendly: use default English translations or create your own
* **Support pagination, set from `config.toml`**

Currently, the Etch Notation is still ugly in dark mode. It's hard to me to use similar color palette for notation for both light and dark theme. Plan to use Sepia color scheme instead.

The `404.html` page style has stolen from `etch-academic`, another etch-family theme by Álvaro Carril. I configure it for supporting multi-language translations . Etch Academic is available as a theme on [this repository](https://github.com/acarril/etch-academic/).

## Notation

The annotation formatting on posts can be accessed via `shortcode` on your Markdown files by using 	`annotate` and its parameters `class` and `text`.

```
{{< annotate class="highlight" text="your highlighted text" >}}
```

There are 5 types (classes) of annotations available for writing:

* `highlight` to marking text in highlighter/marker pen style (default annotation)
* `underline` to emphasize the text with underline
* `strike` to strike through the text in the middle
* `cross` to cross out the text with an x sign
* `circle` to round the circle on the text

All the mark types are using pen style except for `highlight` which is using marker pen style. The annotations support multi-line rendering which means it will be rendered as a separating object while the text is too long on paragraph. However, it is not applied to `circle`.

### Usage examples

Annotating text with default `highlight` and HTML tag `<mark>`. I recommend to avoid using mark tag for best result.

```
Using {{< annotate "highlight" >}} annotation rather than basic <mark>`<mark>`</mark> HTML tag is cool.
```

Annotating text with `circle` and parameter names.

```
This is an example of {{< annotate class="circle" text="a target word" >}} in a sentence.
```

Annotating text with `underline` based on the order of parameters placement without parameter names.

```
It can also use {{< annotate underline "underlined text to emphasize" >}} important thoughts.
```

Annotating text with `cross` for multiple words and `strike` for a single word.

```
The {{< annotate "cross" "cross mark" >}} is used as well as a {{< annotate strike strike-through>}} on texts to be excluded them while reading.
```

That's it!

## Installation

To install `etch-notation`, download the repository into the `themes` folder in the root of your site.

```
$ git submodule add https://github.com/akherlan/etch-notation.git themes/etch-notation
```

Then, use the theme to generate your site.

```
$ hugo server -t etch-notation
```

Use the [sample configuration](https://github.com/LukasJoswiak/etch/wiki/Configuration#sample-configuration) from Lukas as a starting point. See the [configuration](https://github.com/LukasJoswiak/etch/wiki/Configuration) page for more info.

Read the [wiki](https://github.com/LukasJoswiak/etch/wiki) to learn about more options.
