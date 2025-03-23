describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Test', function () {
  const slides = [
    { title: 'Rome', description: 'Italy' },
    { title: 'London', description: 'United Kingdom' },
    { title: 'Paris', description: 'France' }
  ];

  it('Checks if each slide displays the correct title and description', function () {
    cy.visit('http://localhost:3000');

    slides.forEach((slide, index) => {
      if (index > 0) {
        cy.get('.swiper-button-next').click();
        cy.wait(2000);
      }
      
      cy.get('.swiper-slide-active').within(() => {
        cy.contains('h1', slide.title).should('be.visible');
        cy.contains('p', slide.description).should('be.visible');
      });
    });
  });
});
