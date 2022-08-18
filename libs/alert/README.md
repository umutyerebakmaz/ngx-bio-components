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

warning
<img width="1769" alt="Ekran Resmi 2022-08-17 18 16 01" src="https://user-images.githubusercontent.com/13598231/185348836-930f5362-ad3b-4a11-9dbb-81772573141d.png">

error

<img width="1773" alt="Ekran Resmi 2022-08-17 18 15 32" src="https://user-images.githubusercontent.com/13598231/185348911-d6a5b216-6ef1-4d09-a59d-caf4fe471cb4.png">

success

<img width="1773" alt="Ekran Resmi 2022-08-17 18 15 52" src="https://user-images.githubusercontent.com/13598231/185348982-c36ba014-5395-4db2-8bce-f67b70877445.png">

info

<img width="1772" alt="Ekran Resmi 2022-08-17 18 15 41" src="https://user-images.githubusercontent.com/13598231/185349029-b0dc9fc9-ddbf-4348-be65-b0a9a21d7360.png">



