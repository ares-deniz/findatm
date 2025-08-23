import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { MapPin, Clock, Smartphone } from 'lucide-react';
import { useTheme } from 'next-themes';

export function FeaturesSection() {
  const features = [
    {
      icon: MapPin,
      title: 'Localisez les Distributeurs Facilement',
      description:
        'Trouvez les distributeurs les plus proches avec une localisation GPS précise et des directions étape par étape.',
      link: 'En Savoir Plus',
    },
    {
      icon: Clock,
      title: 'Mises à Jour en Temps Réel',
      description:
        "Obtenez des informations en direct sur la disponibilité des distributeurs, les frais et les heures d'ouverture.",
      link: 'En Savoir Plus',
    },
    {
      icon: Smartphone,
      title: 'Interface Conviviale',
      description:
        'Design simple et intuitif qui rend la recherche de distributeurs rapide et sans effort.',
      link: 'En Savoir Plus',
    },
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16 mx-4 md:mx-0">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Pourquoi Choisir Find ATM ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les fonctionnalités qui font de notre application le
            localisateur de distributeurs le plus fiable
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mx-4 md:mx-0">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center border-border hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-muted-foreground/10 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-prmary" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  {feature.description}
                </CardDescription>
                <a
                  href="#"
                  className="text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  {feature.link} →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
