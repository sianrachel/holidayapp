//MARK: - Approvers page testing

describe('Approvers', function() {
  it('Displays only one child element on page load.', function() {
    cy.visit('http://localhost:3000/holiday')
      .get('.buttonContainer')
      .children()
      .should('have.length', 1);
  });
  it('Displays three approvers in a select on page load', function() {
    cy.visit('http://localhost:3000/holiday')
      .get('.MuiSelect-root-146')
      .then(() => {
        cy.get('.buttonContainer')
          .find('.MuiSelect-root-146')
          .children()
          .should('have.length', 2);
      });
  });
});

describe('DateTimePicker', function() {
  it('Displays startTime DateTime picker pop out when clicked', function() {
    cy.get('#picker1')
      .first()
      .find('.MuiButtonBase-root-72')
      .click();
  });
});

//MARK: -Holiday page testing

describe('Holiday', function() {
  beforeEach(() => cy.visit('http://localhost:3000/holiday'));
  it('Displays drop down list of holiday types when clicked', function() {
    cy.get('.holidaySelector')
      .find('select')
      .children()
      .should('have.length', 10)
      .contains('Maternity');
  });

  //MARK: - Tests for trigger of loader and toast notification on page onSubmit

  it('Submit button is clickable, displays a loader and then a toast notification', function() {
    cy.get('.Connect-Holiday--buttonContainer-133')
      .first()
      .find('.Connect-Holiday--createButton-134')
      .first()
      .find('.MuiButtonBase-root-72')
      .click()
      .then(() => {
        cy.get('.MuiPaper-root-15').then(() => {
          cy.get('.MuiSnackbar-root-124');
        });
      });
  });
});
