
# seeds-client-react
`seeds-client-react` is a React.js library that provides components to interact with [Seeds Finance](https://seeds.finance) platform.

## Installation
Install the package via npm:
```bash
npm install seeds-client-react
```

Install the package via yarn:
```bash
yarn add seeds-client-react
```

## Components

### 1. SeedsPlay component
This component is used to initiate a Seeds play session using `userId` and `userName`. To use this component, you need to register on the [Seeds Dashboard](https://dashboard.seeds.finance). In addition, you must request the Seeds team to whitelist your domain. Without this whitelist, the component will not function properly.

#### Props
- `userId` (string): The unique identifier for the user from your system.
- `userName` (string): The name of the user from your system.

#### Usage
```jsx
import React from 'react';
import { SeedsPlay } from 'seeds-client-react';

const App = () => (
  <SeedsPlay userId="user123" userName="JohnDoe" />
);

export default App;
```

### 2. SeedsPlayWithKey component
This component is used when you don't need to use our domain, you need to authenticate using an API key and secret, in addition to the `userId` and `userName`. You can obtain the `apiKey` and `apiSecret` from [Seeds Dashboard](https://dashboard.seeds.finance).

#### Props
- `userId` (string): The unique identifier for the user from your system.
- `userName` (string): The name of the user from your system.
- `apiKey` (string): The API key obtained from the dashboard.
- `apiSecret` (string): The API secret obtained from the dashboard.

#### Usage
```jsx
import React from 'react';
import { SeedsPlayWithKey } from 'seeds-client-react';

const App = () => (
  <SeedsPlayWithKey
    userId="user123"
    userName="JohnDoe"
    apiKey="yourApiKey"
    apiSecret="yourApiSecret"
  />
);

export default App;
```

## License
This project is licensed under the ISC License.