# turbo-strapi-next-rtk [wip

Example monorepo setup for strapi, next using turborepo. `Typescript` is first class citizen here.

## Installation

#### 1. Clone repo

```sh
git clone git@github.com:antokhio/turbo-strapi-next-rtk.git ./my-strapi-next-project
```

#### 2. Setup `env's`

```sh
go to `./apps/backend rename` `.env.example` to `.env`
go to `./apps/frontend rename` `.env.example` to `.env`

```
#### 3. Install dependincies

```sh
yarn
```

#### 4. Start development mode
```sh
yarn dev
```

### Result
```
http://localhost:3000  your next js frontend
http://localhost:1337  your strapi backend
```

## Using this example

`/apps/_shared/src/types/shared.ts` is place you can assemble types
`/apps/fronend/features/layoutApi.ts` is where the example type is consumed

 
 The idea behind, that you define and modify types in shared and then you can use them directly on frontend:
```ts
 // /apps/_shared/src/types/shared.ts
export type SomeComponent = StrapiComponent<'some.component'>

// frontend/src/components/SomeComponent
import { SomeComponent as SomeComponetType } from '@repo/shared'

export const SomeComponent = ({...stuff}:Partial<SomeComponentType>): JSX.Element => {
  return <>{...stuff}</>
}
```

## What's inside?

- TODO: add example types

### Apps and Packages

- `@repo/shared`
- `fronend`
- `backend`
- `@repo/eslint-config`: `eslint` configurations. `TODO`
- `@repo/typescript-config`: `tsc` configurations `TODO`.

### Docker

### Build

### Develop

## Useful Links
