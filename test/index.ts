import { test } from '@bicycle-codes/tapzero'
import { waitFor } from '@bicycle-codes/dom'
import '../src/index.js'

test('example', async t => {
    document.body.innerHTML += `
        <modal-window class="test">
        </modal-window>
    `

    const el = await waitFor('modal-window')

    t.ok(el, 'should find an element')
})
