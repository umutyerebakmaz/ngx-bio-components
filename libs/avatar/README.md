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


<img width="1304" alt="Ekran Resmi 2022-08-15 17 04 15" src="https://user-images.githubusercontent.com/13598231/184650828-691dc1f2-d406-4370-80e9-d70fd6edf86a.png">

<img width="1308" alt="Ekran Resmi 2022-08-15 17 04 28" src="https://user-images.githubusercontent.com/13598231/184650919-a8e43b43-aeae-4d22-8a5d-937421127650.png">

