// cypress/support/index.d.ts

declare namespace Cypress {
    interface Chainable {
      loginByGoogleApi(): void;
      // Add typings for other custom commands here if needed
    }
  }
  
  declare namespace Cypress {
    interface Chainable {
      /**
       * Custom command to click on the 'BUY' link in the navigation.
       * @example cy.clickNavBuy()
       */
      clickNavBuy(): Chainable<Element>;
    }
  }

  declare namespace Cypress {
    interface Chainable<Subject = any> {
      /**
       * Custom command to click on the 'BUY' link in the navigation.
       * @example cy.clickNavBuy()
       */
      clickNavBuy(): Chainable<Subject>;
    }
  }