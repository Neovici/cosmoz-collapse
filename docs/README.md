# cosmoz-collapse

A lightweight, CSS-only collapsible web component.

## Installation

```bash
npm install @neovici/cosmoz-collapse
```

## Usage

```html
<cosmoz-collapse opened>
	<p>Content to show/hide</p>
</cosmoz-collapse>
```

```js
import '@neovici/cosmoz-collapse';
// or
import '@neovici/cosmoz-collapse/cosmoz-collapse';
```

## Properties

| Property | Type    | Default | Description                  |
| -------- | ------- | ------- | ---------------------------- |
| opened   | Boolean | false   | Whether the collapse is open |

## Scripts

| Script                    | Description                 |
| ------------------------- | --------------------------- |
| `npm start`               | Start dev server            |
| `npm test`                | Run tests with coverage     |
| `npm run test:watch`      | Run tests in watch mode     |
| `npm run build`           | Build the component         |
| `npm run lint`            | Run linter                  |
| `npm run storybook:start` | Start Storybook dev server  |
| `npm run storybook:build` | Build Storybook static site |

## Development

```bash
npm install
npm start
```
