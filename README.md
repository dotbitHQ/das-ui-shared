# DAS UI Shared

Shared UI components and functions among DAS ecosystems.

## UI Components
You should import css file before using UI components.
```typescript
import 'das-ui-shared/style.css'
```

### DasAvatar
```vue
<template>
  <DasAvatar account="dastodamoon.bit" :size="50" ></DasAvatar>
</template>
```

### DasAccountCard
```vue
<template>
  <DasAccountCard account="dastodamoon.bit" ></DasAccountCard>
</template>
```


## functions

### accountColor

```typescript
import { accountColor } from 'das-ui-shared'

const { color, light } = accountColor('dastodamoon.bit')
```