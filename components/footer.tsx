export function Footer() {
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
              <span className="text-xl font-bold">Find ATM</span>
            </div>
            <p className="text-sidebar-foreground/80">
              L'application de localisation de distributeurs la plus fiable pour
              vos besoins quotidiens.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Produit</h3>
            <ul className="space-y-2 text-sidebar-foreground/80">
              <li>
                <a
                  href="#"
                  className="hover:text-sidebar-foreground transition-colors"
                >
                  Fonctionnalités
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-sidebar-foreground transition-colors"
                >
                  Comment ça Marche
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-sidebar-foreground transition-colors"
                >
                  Tarifs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sidebar-foreground/80">
              <li>
                <a
                  href="#"
                  className="hover:text-sidebar-foreground transition-colors"
                >
                  Centre d'Aide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-sidebar-foreground transition-colors"
                >
                  Nous Contacter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-sidebar-foreground transition-colors"
                >
                  Politique de Confidentialité
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Se Connecter</h3>
            <ul className="space-y-2 text-sidebar-foreground/80">
              <li>
                <a
                  href="#"
                  className="hover:text-sidebar-foreground transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-sidebar-foreground transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-sidebar-foreground transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sidebar-border mt-8 pt-8 text-center text-sidebar-foreground/60">
          <p>&copy; 2024 Find ATM. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
