import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, MapPin, Phone, Mail, Clock, MessageCircle, Calendar, Search } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Kontakt & Termin | Herren Friseur SAFFET Berlin</title>
        <meta 
          name="description" 
          content="Kontaktieren Sie Herren Friseur SAFFET in Berlin. Vereinbaren Sie Ihren Termin über unseren Chatbot oder rufen Sie uns an. Mo-Fr 09-20 Uhr, Sa 10-18 Uhr." 
        />
        <link rel="canonical" href="https://gentlemanscut.de/kontakt" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Barbershop",
            "@id": "https://gentlemanscut.de/#barbershop",
            "name": "Herren Friseur SAFFET",
            "url": "https://gentlemanscut.de",
            "logo": "https://gentlemanscut.de/images/logo.png",
            "image": "https://gentlemanscut.de/images/shop.jpg",
            "telephone": "+49 30 1234567",
            "priceRange": "€€",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Buttmannstraße 1",
              "addressLocality": "Berlin",
              "postalCode": "13357",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "52.5492",
              "longitude": "13.3758"
            },
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "Berlin"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "19:30"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "19:30"
              }
            ],
            "sameAs": [
              "https://www.google.com/maps?cid=1234567890",
              "https://www.instagram.com/gentlemanscut",
              "https://www.facebook.com/gentlemanscut"
            ]
          })}
        </script>
      </Helmet>

      <Navigation />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-dark">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">Kontakt</span>
            </nav>

            <AnimateOnScroll animation="fade-up">
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">Wir freuen uns auf Sie</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Kontakt & Termin
              </h1>
              <div className="section-divider mb-6" style={{ marginLeft: 0 }} />
              <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                Haben Sie Fragen oder möchten Sie einen Termin vereinbaren? 
                Nutzen Sie unseren Chatbot oder rufen Sie uns direkt an.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-charcoal">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Reihenfolge für Desktop: Chatbot links, Kontakt rechts
                  Reihenfolge für Mobile: Chatbot oben, Kontakt unten */}
              <AnimateOnScroll animation="slide-left" className="order-1 lg:order-1">
                <div className="bg-card border border-border rounded-sm p-8 md:p-10 h-fit">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <MessageCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    Termin buchen & Fragen stellen
                  </h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Unser Chatbot steht Ihnen rund um die Uhr zur Verfügung. 
                    Buchen Sie bequem Ihren Termin, stellen Sie Fragen zu unseren 
                    Services oder erhalten Sie individuelle Empfehlungen – alles 
                    in Echtzeit.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm">24/7 verfügbar</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm">Sofortige Terminbestätigung</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm">Individuelle Beratung</span>
                    </div>
                  </div>

                  <Button variant="gold" size="xl" className="w-full">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Rechts unten Chat starten
                  </Button>

                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-muted-foreground text-sm text-center">
                      Oder rufen Sie uns direkt an:
                    </p>
                    <a 
                      href="tel:015775429152" 
                      className="block text-center text-primary font-semibold mt-2 hover:underline"
                    >
                      015775429152
                    </a>
                  </div>

                  {/* Alternative Buchung Block */}
                  <div className="mt-8 pt-8 border-t border-border">
                    <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                      Alternativ können Sie direkt hier die Verfügbarkeit Ihres Wunschtermins prüfen oder einen Termin buchen:
                    </p>
                    <div className="flex flex-col gap-3">
                      <Button 
                        asChild 
                        variant="outline" 
                        size="lg" 
                        className="w-full"
                      >
                        <Link to="/termine/verfügbarkeit">
                          <Search className="w-5 h-5 mr-2" />
                          Verfügbarkeit prüfen
                        </Link>
                      </Button>
                      <Button 
                        asChild 
                        variant="gold" 
                        size="lg" 
                        className="w-full"
                      >
                        <Link to="/termine/buchen">
                          <Calendar className="w-5 h-5 mr-2" />
                          Termin buchen
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="slide-right" className="order-2 lg:order-2">
                <div className="space-y-8">
                  <h2 className="font-display text-3xl font-bold text-foreground mb-8">
                    So erreichen Sie uns
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Adresse</h3>
                        <p className="text-muted-foreground">
                          Buttmannstraße 1<br />
                          13357 Berlin
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Telefon</h3>
                        <a 
                          href="tel:015775429152" 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          015775429152
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">E-Mail</h3>
                        <a 
                          href="mailto:info@gentlemanscut.de" 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          info@gentlemanscut.de
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Öffnungszeiten</h3>
                        <ul className="text-muted-foreground space-y-1 text-sm">
                          <li>Mo - Do: 9:00 - 19:30</li>
                          <li>Freitag: 9:00 - 12:00, 13:00 - 19:30</li>
                          <li>Samstag: 9:00 - 19:30</li>
                          <li>Sonntag: Geschlossen</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="aspect-video rounded-sm overflow-hidden border border-border mt-8">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38849.82845560266!2d13.333303669531256!3d52.513270911875956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a85225c88913df%3A0x4bbb8f552622f0d4!2sKuaf%C3%B6r%20Genclik%20(Herren%20Friseur)!5e0!3m2!1sde!2sde!4v1771410973401!5m2!1sde!2sde"
                      width="100%"
                      height="100%"
                      style={{ border: 0, filter: 'grayscale(100%) contrast(1.2)' }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Standort Herren Friseur SAFFET"
                    />
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;



