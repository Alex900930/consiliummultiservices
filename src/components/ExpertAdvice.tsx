import { Card, CardContent } from "@/components/ui/card";

const ExpertAdvice = () => {
  const videos = [
    {
      id: "DLVEfI5OpH7",
      title: "Consejos del Dueño de Consilium",
      description: "Escucha directamente del fundador de Consilium Multiservices consejos valiosos para tu negocio",
      embedUrl: "https://www.instagram.com/reel/DLVEfI5OpH7/embed"
    },
    {
      id: "DKpkR1cuBtG", 
      title: "Servicios Explicados Paso a Paso",
      description: "Conoce cómo nuestros servicios pueden ayudar a tu empresa de manera detallada",
      embedUrl: "https://www.instagram.com/reel/DKpkR1cuBtG/embed"
    },
    {
      id: "DMywc8WO_ZE",
      title: "Con Carolina - Jefa Comercial",
      description: "Carolina, nuestra jefa comercial, te explica cómo podemos apoyar tu crecimiento empresarial",
      embedUrl: "https://www.instagram.com/reel/DMywc8WO_ZE/embed"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Consejos del Experto
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Escucha directamente de nuestro equipo de expertos. Consejos prácticos, 
            explicaciones detalladas de servicios y estrategias para hacer crecer tu negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <Card key={video.id} className="overflow-hidden hover:shadow-elegant transition-all duration-300 group">
              <CardContent className="p-0">
                <div className="aspect-[9/16] relative bg-muted">
                  <iframe
                    src={video.embedUrl}
                    className="w-full h-full"
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency={true}
                    allow="encrypted-media"
                    title={video.title}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-primary-glow transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {video.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-primary/10 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              ¿Tienes preguntas específicas?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nuestro equipo está listo para brindarte asesoría personalizada según las necesidades de tu empresa.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Solicitar Consulta Gratuita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertAdvice;