'use client';
import { Button } from '@/components/ui/button';
import { useLanguage } from './providers/language-provider';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-sidebar text-sidebar-foreground py-12">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mx-5 md:mx-0">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-accent">
                <span className="text-lg font-bold text-sidebar-accent-foreground">
                  A
                </span>
              </div>
              <span className="text-xl font-bold">{t.footer.info}</span>
            </div>
            <p className="text-sidebar-foreground/80">{t.footer.infoDesc}</p>
          </div>
          {/* <div className="space-y-4">
            <div className="flex flex-col items-center space-x-2 space-y-5">
              <span className="text-xl font-bold">Faire un don</span>
              <Button
                size="lg"
                className="bg-green-600 hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold cursor-pointer"
              >
                Donate
              </Button>
            </div>
          </div> */}
        </div>

        <div className="border-t border-sidebar-border mt-8 pt-8 text-center text-sidebar-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} Find ATM. {t.footer.copy}.
          </p>
        </div>
      </div>
    </footer>
  );
}
