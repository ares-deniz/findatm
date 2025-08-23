import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Voyageuse Fréquente',
      content:
        "Cette application m'a sauvé la vie lors de mes voyages d'affaires. Je peux toujours trouver un distributeur à proximité sans aucun problème.",
      rating: 5,
      avatar: '/professional-woman-smiling.png',
    },
    {
      name: 'Mike Chen',
      role: 'Étudiant',
      content:
        'Super facile à utiliser et toujours précise. Les mises à jour en temps réel sur les frais sont vraiment utiles pour le budget.',
      rating: 5,
      avatar: '/young-man-smiling.png',
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Propriétaire de Petite Entreprise',
      content:
        "Je recommande cette application à tous mes clients. Elle est fiable et l'interface est si intuitive.",
      rating: 5,
      avatar: '/smiling-businesswoman.png',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16 mx-4 md:mx-0">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ce Que Disent Nos Utilisateurs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Rejoignez des milliers d'utilisateurs satisfaits qui font confiance
            à Find ATM
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mx-4 md:mx-0">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-card-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.avatar || '/placeholder.svg'}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-card-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
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
