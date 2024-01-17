# uisuite

```html
Now Support Angular 17 
```
**A Comprehensive Angular Library for Seamless Design Integration**

Welcome to `uisuite`, a developer-friendly Angular library designed to simplify the process of incorporating stylish design elements into your projects. Tailored with developers in mind, `uisuite` not only provides an effortless way to integrate frontend components but also offers the convenience of utilizing components with pre-defined logic.

## Key Features:

- **Ease of Use:** Enjoy a seamless experience while adding visually appealing frontend components to your Angular projects.

- **Developer-Centric Design:** Crafted with developers in mind, `uisuite` prioritizes user-friendly integration and customization.

- **Predefined Logic:** Accelerate your development process by leveraging components that come with pre-established logic.

Elevate your Angular projects with `uisuite` – where design meets functionality effortlessly.

## Available Components:

| Component                 | Description                                                                                                                                                 |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [ui-avatar](#)   | A versatile avatar component that allows customization of name, style, size, border, radius, background, color, fontSize, and text. 
| [ui-heading](#)   | Provides a simple display headings with options such as setting the title, choosing the heading tag, adjusting font size etc....
| [ui-form(0.1)](#)   | Build a form using dynamic modal.
| [more...](#)   | Layout, Table, Badge, Tooltips, Button, Form Fields, Form Builder etc....

## ui-avatar Component

#### How to Use:

The `ui-avatar` component in `uisuite` is designed to provide a customizable avatar for your application. It accepts the following parameters:

- `name`: 'Required' The name or initials to be displayed in the avatar.
- `style`: 'default', 'rounded', 'circle'.
- `size`: The size of the avatar [Accepts only unit values e.g. 20px, 2rem etc].
- `border`: The border Color of the avatar.
- `radius`: The border-radius of the avatar.
- `background`: The background color of the avatar.
- `color`:  The text color of the avatar.
- `fontSize`: The font size of the text in the avatar.
- `text`: Text style of the avatar (bold, normal).

#### Example:

```html
<uis-avatar [name]="title" 
[style]="rounded" 
[size]="40px" 
[radius]="10px" 
[border]="blue" 
[background]="yellow" 
[color]="color" 
[fontSize]="fSize" 
[text]="Text"></uis-avatar>
```
## ui-heading Component

#### How to Use:

The `ui-heading` component in `uisuite` is designed to provide a customizable avatar for your application. It accepts the following parameters:

- `tag`: 'Required' Accepts any HTML heading tag (h1, h2, h3, h4, h5, h6).
- `title`: Accepts a string to set the heading text..
- `size`: font size of the heading [Accepts only unit values e.g. 20px, 2rem etc].
- `color`:  The text color of the heading.
- `truncate`: When set to true, truncates the text with ellipsis for better UI presentation.
- `text`: Supports text alignment options - left, center, or right.

#### Example:

```html
<uis-heading
  [tag]="'h1'"
  [title]="'Hello World'"
  [spaceTop]="'30px'"
  [bold]="'600'"
  [color]="'blue'"
></uis-heading>
```
## ui-form Component

#### How to Use:

The `ui-form` component in `uisuite` is designed to provide a customizable dynamic form, which will hellp you render the form without writing any html and also handle error and give desired output:
### Keywords

Angular, Component, UI , Heading, Library, Reusable, Web, Frontend, Angular Library, HTML, Tags, Font Size, Truncate, Alignment, Form Builder, Angular Form, Latest

