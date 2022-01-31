import { SignUpController } from './signup'

describe('SignUp Controller', () => {
  test('Should return 400 if no name is provider', () => {
    const systemUnderTest = new SignUpController()
    const httpRequest = {
      body: {
        email: 'any_mail@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = systemUnderTest.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})