# @ngx-bio-components/badge

```typescript
import { BioBadgeModule } from '@ngx-bio-components/badge';
```

```html
<bio-badge [badge]="badge">
    <svg class="h-1.5 w-1.5 fill-indigo-500" viewBox="0 0 6 6" aria-hidden="true">
        <circle cx="3" cy="3" r="3" />
    </svg>
    Badge
</bio-badge>
```

```typescript
type Badge = {
    size?: 'normal' | 'small';
    shape?: 'flat' | 'pill';
    color?: 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink';
    border?: true;
};
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
  <td>normal, small, normal is default
</td>
</tr>
<tr>
  <td>
<code>badge.shape</code>
  </td>
  <td>flat, pill, flat is default
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
<code>badge.border</code>
  </td>
  <td>boolean, true is default
</td>
</tr>
</tbody></table>
