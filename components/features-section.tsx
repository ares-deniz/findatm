'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { MapPin, Clock, Smartphone } from 'lucide-react';
import { useLanguage } from './providers/language-provider';

const FEATURES = [
  { icon: MapPin, key: 'one' },
  { icon: Clock, key: 'two' },
  { icon: Smartphone, key: 'three' },
] as const;

export function FeaturesSection() {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16 mx-4 md:mx-0">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t.main.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.main.desc}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mx-4 md:mx-0">
          {FEATURES.map(({ icon: Icon, key }, i) => (
            <Card
              key={i}
              className="text-center border-border hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-muted-foreground/10 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <CardTitle>{t.cards[key].title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{t.cards[key].desc}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
