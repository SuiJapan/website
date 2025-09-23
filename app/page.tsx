import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { EventsSection } from "@/components/events-section";
import { CommunitySection } from "@/components/community-section";
import { Footer } from "@/components/footer";

/**
 * メインページコンポーネント
 * Sui Japan Communityコミュニティサイトのランディングページ
 */
export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* ヘッダー */}
      <Header />

      {/* メインコンテンツ */}
      <main>
        {/* ヒーローセクション */}
        <HeroSection />

        {/* イベント情報セクション */}
        <EventsSection />

        {/* コミュニティセクション */}
        <CommunitySection />
      </main>

      {/* フッター */}
      <Footer />
    </div>
  );
}
