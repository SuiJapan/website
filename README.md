# Sui Japan Community Web Site

## CI/CD Pipeline

- GitHub Actions

## How to work

- install

    ```bash
    pnpm i
    ```

- formatter & linter

    ```bash
    pnpm run format
    ```

    ```bash
    pnpm run lint
    ```

- build

    ```bash
    pnpm run build
    ```

- start on local

    ```bash
    pnpm run dev
    ```

## Lumaのイベント情報の追加方法

`lib/events.ts`に以下のような感じで追加していけばOK!

```ts
// Lumaのイベント情報を管理する変数
export const events: Event[] = [
  {
    id: "1",
    title: "Build on Sui: Weekend Move Workshop in Tokyo // Day 1",
    lumaUrl: "https://luma.com/8u1d0g84",
    lumaEmbedUrl: "https://luma.com/embed/event/evt-DQVNlzKOYPVebTq/simple",
  },
  {
    id: "2",
    title: "MBuild on Sui: Weekend Move Workshop in Tokyo // Day 2",
    lumaUrl: "https://luma.com/dtji6jfn",
    lumaEmbedUrl: "https://luma.com/embed/event/evt-pduM3jCtJYVWPDd/simple",
  },
];
```