# @ngx-bio-components/button

BioButton buttons are native `<button>` elements enhanced with Tailwind Design styling.

Native `<button>` elements are always used in order to provide the most straightforward and accessible experience for users. A `<button>` element should be used whenever some _action_ is performed.

There are several button variants, each applied as an attribute:

## Color Types

Buttons can be colored in terms of the current theme using the `color` property to set the background color to `primary`, `secondary`, or `white`.

## Size Types

Buttons can be sized in terms of the current theme using the `size` property to set the button size to `xs`, `sm`, `md`, `lg` and `xl`.

## Accessibility

`@ngx-bio-components/button` uses native `<button>` element to ensure an accessible experience by default. A `<button>` element should be used for any interaction that _performs an action on the current page_. All standard accessibility best practices for buttons apply to `BioButton`.

## API

```typescript
import { BioButtonModule } from '@ngx-bio-components/button';
```

## Directives

`BioButton`

Selectors: `button[bio-button], button[bio-circular-button], button[bio-round-button]`

Exported as: bioButton

```html
<button bio-button [color]="color" [size]="size" [disabled]="disabled" [type]="type">Button</button>
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
<p><code>color: 'primary' | 'secondary' | 'white'</code></p>
  </td>
  <td><p>primary is default color.</p>
</td>
</tr>
<tr>
  <td>
<div>
@Input()
</div>
<p><code>type: 'button' | 'reset' | 'submit'</code></p>
  </td>
  <td><p>submit is default type.</p>
</td>
</tr>
<tr>
  <td>
<div>
@Input()
</div>
<p><code>size: 'xs' | 'sm' | 'md' | 'lg' 'xl'</code></p>
  </td>
  <td><p>sm is default size.</p>
</td>
</tr>
<tr>
  <td>
<div>
          @Input()</div><p>
      <code>disabled: boolean</code>
    </p>
  </td>
  <td><p>Whether the component is disabled.</p>
</td>
</tr>
  </tbody></table>
