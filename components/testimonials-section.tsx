import { Card, CardContent } from '@/components/ui/card';
import { InfoIcon, Shield, Star } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Utilisation de la Géolocalisation',

      content:
        'L’application FIN ATM nécessite l’autorisation de votre GPS pour localiser les distributeurs automatiques à proximité. Cette fonctionnalité est essentielle pour vous offrir une expérience optimisée. Aucune donnée de localisation n’est stockée ou partagée.',
    },
    {
      name: 'Absence de Collecte de Données',

      content:
        'Nous garantissons que FIN ATM ne collecte, ne stocke ni ne partage aucune donnée personnelle ou relative à vos recherches. Toutes les informations affichées proviennent de sources officielles reconnues.',
    },
    {
      name: 'Sécurité et Confidentialité',

      content:
        'Aucune donnée utilisateur n’est conservée dans nos systèmes. Nous assurons que toutes les communications sont sécurisées et que vos informations personnelles restent confidentielles.',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16 mx-4 md:mx-0">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Sécurité et Confidentialité
          </h2>
          <p>
            En utilisant l’application FIN ATM, vous acceptez ces termes et
            conditions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mx-4 md:mx-0">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial)].map((_, i) => (
                    <Shield key={i} className="w-5 h-5 text-zinc-300" />
                  ))}
                </div>

                <p className="text-card-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center space-x-3">
                  <div>
                    <p className="font-semibold text-card-foreground">
                      {testimonial.name}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
