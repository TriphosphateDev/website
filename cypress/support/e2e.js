// Import commands.js using ES2015 syntax:
import './commands'

// Prevent Cypress from failing on uncaught exceptions from your application
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
}) 