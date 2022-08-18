# @ngx-bio-components/avatar

```typescript
import { BioAlertModule } from '@ngx-bio-components/alert';
```

```html
<bio-alert [alert]="alert"></bio-alert>
```

```typescript
export type Alert = {
    type?: 'error' | 'success' | 'warning' | 'info';
    messages?: string[],
    message?: string,
    headerText?: string,
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
<code>@Input() alert: Alert</code>
  </td>
  <td>Alert input
</td>
</tr>
</tbody></table>
