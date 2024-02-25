//cypress/support/commands.ts
Cypress.Commands.add('loginByGoogleApi', () => {
    cy.log('Logging in to Google')
    cy.request({
      method: 'POST',
      url: 'https://www.googleapis.com/oauth2/v4/token',
      body: {
        grant_type: 'refresh_token',
        client_id: Cypress.env('googleClientId'),
        client_secret: Cypress.env('googleClientSecret'),
        refresh_token: Cypress.env('googleRefreshToken'),
      },
    }).then(({ body }) => {
      const { access_token, id_token } = body
  
      cy.request({
        method: 'GET',
        url: 'https://www.googleapis.com/oauth2/v3/userinfo',
        headers: { Authorization: `Bearer ${access_token}` },
      }).then(({ body }) => {
        cy.log(body)
        const userItem = {
          token: id_token,
          user: {
            googleId: body.sub,
            email: body.email,
            givenName: body.given_name,
            familyName: body.family_name,
            imageUrl: body.picture,
          },
        }
  
        window.localStorage.setItem('googleCypress', JSON.stringify(userItem))
        cy.visit('/')
      })
    })
  })



// Add the custom command to the Cypress.Commands namespace
Cypress.Commands.add('clickNavBuy', () => {
  cy.get('nav').contains('BUY').click();
});

// cypress/support/index.d.ts

// Extend the Cypress Chainable interface with the new command
declare namespace Cypress {
  interface Chainable<Subject = any> {
    /**
     * Custom command to click on the 'BUY' link in the navigation.
     * @example cy.clickNavBuy()
     */
    clickNavBuy(): Chainable<Subject>;
  }
}

// Import the commands file to ensure it is executed
import './commands';
