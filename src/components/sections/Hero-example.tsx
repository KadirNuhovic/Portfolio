// Primer kako da koristiš slike u komponentama

export const Hero = () => {
  return (
    <section className="hero-section">
      {/* Profilna slika */}
      <div className="profile-image-container">
        <img 
          src="/images/profile/profile-photo.jpg" 
          alt="Kadir Nuhovic"
          className="rounded-full w-32 h-32 object-cover"
        />
      </div>
      
      {/* Hero background slika */}
      <div className="hero-background">
        <img 
          src="/images/about/workspace.jpg" 
          alt="Workspace"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
      </div>
    </section>
  );
};
