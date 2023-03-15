// import {StepperComponent} from '../src/app/stepper/stepper.component'
// import {BrowserModule} from "@angular/platform-browser";
// import {AppRoutingModule} from "../src/app/app-routing.module";
// import {RecipeBookComponent} from "../src/app/recipe-book/recipe-book.component";
//
// describe('StepperComponent', () => {
//   it('stepper should default to 0', () => {
//     cy.mount(StepperComponent )
//     cy.get('span').should('have.text', '0')
//   })
//
//   it('supports an "initial" prop to set the value', () => {
//     cy.mount(StepperComponent, {
//       componentProperties: {
//         count: 100,
//       },
//       imports: [BrowserModule,
//         AppRoutingModule],
//       providers: [],
//       declarations: [RecipeBookComponent]
//     })
//     cy.get('[data-cy=counter]').should('have.text', '100')
//   })
//
//   it('when the increment button is pressed, the counter is incremented', () => {
//     cy.mount(StepperComponent, {
//       imports: [BrowserModule,
//         AppRoutingModule],
//       providers: [],
//       declarations: [RecipeBookComponent]
//     })
//     cy.get('[data-cy=increment]').click()
//     cy.get('[data-cy=counter]').should('have.text', '1')
//   })
//
//   it('when the decrement button is pressed, the counter is decremented', () => {
//     cy.mount(StepperComponent, {
//       imports: [BrowserModule,
//         AppRoutingModule],
//       providers: [],
//       declarations: [RecipeBookComponent]
//       }
//     )
//     cy.get('[data-cy=decrement]').click()
//     cy.get('[data-cy=counter]').should('have.text', '-1')
//   })
// })
