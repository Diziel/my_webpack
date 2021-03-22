describe('Test React-G', function() {
  it('Visit main page', () => {
    cy.visit('/')
  })
  it('Visit new', () => {
    cy.visit('/new')
  })
  it('Visit test', () => {
    cy.visit('/test')
  })

  it('Contain greeting', () => {
    cy.get('[data-test=greeting]').contains('Welcome to React-G!')
  })
})
