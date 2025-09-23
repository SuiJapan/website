import Link from "next/link";
import {
  Github,
  MessageCircle,
  Twitter,
  ExternalLink,
  Book,
  FileText,
} from "lucide-react";

/**
 * フッターコンポーネント
 * サイト情報とリンク集を表示
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  const linkGroups = [
    {
      title: "コミュニティ",
      links: [
        {
          name: "GitHub",
          url: "https://github.com/orgs/SuiJapan",
          icon: Github,
        },
        {
          name: "Discord",
          url: "https://discord.gg/NM8jWvmQ6V",
          icon: MessageCircle,
        },
        {
          name: "X (Twitter)",
          url: "https://x.com/SuiNetwork_JP",
          icon: Twitter,
        },
      ],
    },
    {
      title: "公式リソース",
      links: [
        { name: "Sui公式サイト", url: "https://sui.io/", icon: ExternalLink },
        {
          name: "開発者ドキュメント",
          url: "https://docs.sui.io/guides/developer/getting-started",
          icon: FileText,
        },
        { name: "Move Book", url: "https://move-book.com/", icon: Book },
      ],
    },
  ];

  return (
    <footer className="border-t border-border/20 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* ブランド情報 */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-2xl font-bold text-primary cyber-glow inline-block mb-4"
            >
              Sui Japan Community
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              日本のSui開発者コミュニティ。次世代ブロックチェーン技術で
              未来を構築する開発者たちが集まる場所です。
            </p>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">
                アクティブなコミュニティ
              </span>
            </div>
          </div>

          {/* リンクグループ */}
          {linkGroups.map((group, index) => (
            <div key={index}>
              <h3 className="font-semibold text-foreground mb-4">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <link.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 下部情報 */}
        <div className="border-t border-border/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Sui Japan Community.
            コミュニティによって運営されています。
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Built with</span>
            <span className="text-primary font-semibold">Next.js</span>
            <span>&</span>
            <span className="text-accent font-semibold">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
