
const Gallery = () => {
  return (
    <section id="galeria" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-purple">Galeria</h2>
          <div className="section-divider"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Galeria w przygotowaniu – wkrótce więcej zdjęć z naszej przestrzeni i wydarzeń.
          </p>
        </div>
        <div className="flex items-center justify-center py-16">
          <div className="text-center text-muted-foreground">
            <p className="text-5xl mb-4">📷</p>
            <p className="text-xl font-semibold">Wkrótce tutaj pojawią się zdjęcia</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
