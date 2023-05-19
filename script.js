document.getElementById('getStartedBtn').addEventListener('click', function(event) {
    event.preventDefault();
    const servicesSection = document.getElementById('services');
    servicesSection.scrollIntoView({ behavior: 'smooth' });
  });
  