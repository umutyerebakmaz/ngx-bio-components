# @ngx-bio-components/avatar

## API

```typescript
import { BioButtonModule } from '@ngx-bio-components/avatar';
```

```html
<bio-avatar [avatar]="avatar"></bio-avatar>
```

```typescript
export type Avatar = {
    shape?: 'circular' | 'rounded';
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    badgePosition?: 'topRight' | 'bottomRigh';
    badgeColor?: 'gray' | 'red' | 'green';
    img?: string | undefined | null,
    alt?: string,
    placeholder?: string;
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
<code>@Input() avatar: Avatar</code>
  </td>
  <td>Avatar input
</td>
</tr>
</tbody></table>
