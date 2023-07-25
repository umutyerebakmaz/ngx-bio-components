# @ngx-bio-components/notification

API reference for Bio Notification

```typescript
import { BioNotificationModule } from '@ngx-bio-components/notification';
```

```html
<bio-notification> content </bio-notification>
```

### Type aliases

`BioNotificationHorizontalPosition`
Possible values for horizontalPosition on BioNotificationConfig.

```typescript
type MatSnackBarHorizontalPosition = 'start' | 'center' | 'end' | 'left' | 'right';
```

MatSnackBarVerticalPosition
Possible values for verticalPosition on MatSnackBarConfig.

type MatSnackBarVerticalPosition = 'top' | 'bottom';

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
