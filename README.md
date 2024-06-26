# modal
![tests](https://github.com/nichoth/modal/actions/workflows/nodejs.yml/badge.svg)
[![types](https://img.shields.io/npm/types/@nichoth/modal?style=flat-square)](README.md)
[![module](https://img.shields.io/badge/module-ESM%2FCJS-blue?style=flat-square)](README.md)
[![semantic versioning](https://img.shields.io/badge/semver-2.0.0-blue?logo=semver&style=flat-square)](https://semver.org/)
[![dependencies](https://img.shields.io/badge/dependencies-zero-brightgreen.svg?style=flat-square)](package.json)
[![license](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)

Modal dialog window

See [smashingmagazine.com article](https://www.smashingmagazine.com/2022/04/cta-modal-build-web-component/) and [nathansmith/cta-modal](https://github.com/nathansmith/cta-modal/tree/main).

## demo

See [nichoth.github.io/modal](https://nichoth.github.io/modal/).

## install

```sh
npm i -S @nichoth/modal
```

## use

### bundler

Just import; this calls the global function `window.customElements.define`.

```js
import '@nichoth/modal'
```

Then use the tag in HTML:

```html
<modal-window>
    <div slot="button">
        <p>
            <button class="cta-modal-toggle" type="button">
                Open modal
            </button>
        </p>
    </div>

    <div slot="modal">modal content?</div>
    <div slot="modal">more modal content</div>
</modal-window>
```

### HTML only

First copy the file to a location accessible to your web server.

```sh
cp ./node_modules/@nichoth/modal/dist/index.min.js ./public/modal.js
```

Then link to the file in HTML
```html
<body>
    <p>...content...</p>
    <script type="module" src="/modal.js"></script>
</body>
```

## API

### attributes

See [nathansmith/cta-modal](https://github.com/nathansmith/cta-modal/tree/main?tab=readme-ov-file#how-to-use-extras)

#### Plus

##### closable

Take an attribute `closable`. If you pass in `closable="false"`, then it will
render without a 'close' button, and escape key and clicks will not close the
modal. You would need to open/close it via your application state.

```html
<modal-window closable="false">
    <div slot="button">
        <p>
            <button
            class="cta-modal-toggle"
            type="button"
            >Open modal two</button>
        </p>
    </div>
    <div slot="modal">modal content?</div>
    <div slot="modal">more modal content</div>
</modal-window>
```

## example

[See `./example`](./example/).

## credits

Thanks [@nathansmith](https://github.com/nathansmith) and [Smashing Magazine](https://www.smashingmagazine.com/2022/04/cta-modal-build-web-component/) for publishing this originally.
