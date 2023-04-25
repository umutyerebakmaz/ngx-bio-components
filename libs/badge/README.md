# @ngx-bio-components/badge

API reference for Bio badge

```typescript
import { BioBadgeModule } from '@ngx-bio-components/badge';
```

```html
<bio-badge [size]="size" [shape]="shape" [color]="color" [border]="border">
    <svg class="h-1.5 w-1.5 fill-indigo-500" viewBox="0 0 6 6" aria-hidden="true">
        <circle cx="3" cy="3" r="3" />
    </svg>
    Badge
</bio-badge>
```

## Type aliases

### BioBadgeSize

Allowed size options for `bioBadgeSize`

```typescript
type BioBadgeSize = 'normal' | 'small';
```

### BioBadgeShape

Allowed shape options for `bioBadgeShape`

```typescript
type BioBadgeShape = 'flat' | 'pill';
```

### BioBadgeColor

Allowed color options for `bioBadgeColor`

```typescript
type BioBadgeColor = 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink';
```

### BioBadgeBorder

Allowed border options for `bioBadgeBorder`

```typescript
type BioBadgeBorder = boolean;
```

<table>
    <tbody>
<tr>
      <th>Name</th>
      <th>Description</th>
    </th>
<tr>
  <td>
<code>@Input('biBadgeSize')<br>size: BioBadgeSize
</code>
  </td>
  <td>The size of the badge. Can be normal or small.
</td>
</tr>
<tr>
  <td>
<code>@Input('bioBadgeShape')<br>shape: BioBadgeShape
</code>
  </td>
  <td>The shape of the badge. Can be flat or pill.
</td>
</tr>
<tr>
  <td>
<code>@Input('bioBadgeColor')<br>color: BioBadgeColor</code>
  </td>
  <td>The color of the badge. Can be gray, red, yellow, green, blue, indigo, purple or pink.
</td>
</tr>
<tr>
  <td>
<code>@Input('bioBadgeBorder')<br>border: boolean</code>
  </td>
  <td>The border of the badge. Can be true or false.
</td>
</tr>
</tbody></table>
