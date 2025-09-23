interface Event {
  id: string;
  title: string;
  lumaUrl: string;
  lumaEmbedUrl: string;
}

// Lumaのイベント情報を管理する変数
export const events: Event[] = [
  {
    id: "1",
    title: "Sui開発者ミートアップ #1",
    lumaUrl: "https://luma.com/8u1d0g84",
    lumaEmbedUrl: "https://luma.com/embed/event/evt-DQVNlzKOYPVebTq/simple",
  },
  {
    id: "2",
    title: "Move言語ハンズオンワークショップ",
    lumaUrl: "https://luma.com/dtji6jfn",
    lumaEmbedUrl: "https://luma.com/embed/event/evt-pduM3jCtJYVWPDd/simple",
  },
];