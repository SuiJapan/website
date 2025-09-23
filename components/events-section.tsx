import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { events } from "@/lib/events";

/**
 * イベント情報を表示するコンポーネント
 * Lumaイベントの埋め込み表示のみを提供
 */
export function EventsSection() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              イベント情報
            </span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Sui開発者コミュニティの最新イベントに参加して、知識を深め、ネットワークを広げましょう
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {events.map((event) => (
            <Card
              key={event.id}
              className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 group overflow-hidden"
            >
              <CardHeader>
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors text-center">
                  {event.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="w-full overflow-hidden rounded-lg border border-primary/20">
                  <iframe
                    src={event.lumaEmbedUrl}
                    width="100%"
                    height="450"
                    frameBorder="0"
                    style={{ border: "none", borderRadius: "4px" }}
                    allow="fullscreen; payment"
                    aria-hidden="false"
                    tabIndex={0}
                    className="w-full"
                  />
                </div>

                <Button asChild className="w-full cyber-glow group/btn">
                  <a
                    href={event.lumaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    Lumaで参加登録
                    <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            その他のイベント情報は随時更新されます
          </p>
          <Button
            variant="outline"
            className="glass-effect border-accent/30 hover:bg-accent/10 bg-transparent"
          >
            全てのイベントを見る
          </Button>
        </div>
      </div>
    </section>
  );
}
