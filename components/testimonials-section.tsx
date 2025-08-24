'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Shield } from 'lucide-react';
import { useLanguage } from './providers/language-provider';

export function TestimonialsSection() {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: t.sectionOne.title,

      content: t.sectionOne.desc,
    },
    {
      name: t.sectionTwo.title,

      content: t.sectionTwo.desc,
    },
    {
      name: t.sectionThree.title,

      content: t.sectionThree.desc,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16 mx-4 md:mx-0">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t.section.title}
          </h2>
          <p>{t.section.desc}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mx-4 md:mx-0">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial)].map((_, i) => (
                    <Shield key={i} className="w-5 h-5" />
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
