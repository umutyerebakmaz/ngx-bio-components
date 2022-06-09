# OVERVIEW

BioButton buttons are native `<button>` elements enhanced with Tailwind Design styling.

Native `<button>` elements are always used in order to provide the most straightforward and accessible experience for users. A `<button>` element should be used whenever some _action_ is performed.

There are several button variants, each applied as an attribute:

Directive: bio-button

<table>
<thead>
<tr>
<th>Attribute</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>bio-button</code></td>
<td>Tailwind text button</td>
</tr>
<tr>
<td><code>primary</code></td>
<td>Primary color button</td>
</tr>
<tr>
<td><code>secondary</code></td>
<td>Secondary color button</td>
</tr>
<tr>
<td><code>white</code></td>
<td>White color button</td>
</tr>
<tr>
<td><code>xs</code></td>
<td>extra small size button</td>
</tr>
<tr>
<td><code>sm</code></td>
<td>small size button</td>
</tr>
<tr>
<td><code>md</code></td>
<td>medium size button (default)</td>
</tr>
<tr>
<td><code>lg</code></td>
<td>large size button</td>
</tr>
<tr>
<td><code>xl</code></td>
<td>extra large size button</td>
</tr>
</tbody></table>

#### Theming

Buttons can be colored in terms of the current theme using the `color` property to set the background color to `primary`, `secondary`, or `white`.

#### Accessibility

@ngx-bio-components/button uses native `<button>` element to ensure an accessible experience by default. A `<button>` element should be used for any interaction that _performs an action on the current page_. All standard accessibility best practices for buttons apply to `BioButton`.

# API

import { BioButtonModule } from '@ngx-bio-components/button';

##### Directives

`BioButton`

Bio design button.

Selector: button[bio-button]

Exported as: bioButton

```html
<button bio-button 
        [text]="text" 
        [color]="color" 
        [size]="size" 
        [disabled]="disabled" 
        [type]="type">
{{ text }}
</button>
```

<table>
    <tbody>
<tr>
      <th>Name</th>
      <th>Description</th>
    </tr>
<tr>
  <td>
<div>
@Input()
</div>
<p><code>text: string</code></p>
  </td>
  <td><p>The text of the button.</p>
</td>
</tr>
<tr>
  <td>
<div>
@Input()
</div>
<p><code>color: 'primary' | 'secondary' | 'white'</code></p>
  </td>
  <td><p>color alternatives.</p>
</td>
</tr>
<tr>
  <td><div>
          @Input()</div><p>
      <code>disabled: boolean</code>
    </p>
  </td>
  <td><p>Whether the component is disabled.</p>
</td>
</tr>
<tr>
  <td><p>
      <code>defaultColor: color | undefined</code>
    </p>
  </td>
  <td><p>Default color to fall back to if no value is set.</p>
</td>
</tr>
  </tbody></table>
