# @ngx-bio-components/badge

```typescript
import { BioBadgeModule } from '@ngx-bio-components/badge';
```

```html
<bio-badge [alert]="alert"></bio-badge>
```

```typescript
type Badge = {
    size?: 'basic' | 'large';
    shape?: 'basic' | 'rounded';
    color?: 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink';
    text?: string;
}
```

<table>
    <tbody>
<tr>
      <th>Name</th>
      <th>Description</th>
    </th>
<tr>
  <td>
<code>@Input() badge: Badge</code>
  </td>
  <td>Badge input
</td>
</tr>
<tr>
  <td>
<code>badge.size</code>
  </td>
  <td>basic, large, basic is default
</td>
</tr>
<tr>
  <td>
<code>badge.shape</code>
  </td>
  <td>basic, rounded, basic is default
</td>
</tr>
<tr>
  <td>
<code>badge.color</code>
  </td>
  <td>gray, red, yellow, green, blue, indigo, purple, pink, indigo is default
</td>
</tr>
<tr>
  <td>
<code>badge.text</code>
  </td>
  <td>Text is default
</td>
</tr>
</tbody></table>
