import { Contrato } from './contrato';

describe('Contrato', () => {

  let contrato: Contrato;

  beforeEach(() => {
    contrato = new Contrato(
      'Contrato de teste',
      'branco',
    );
  });

  it('should create an instance', () => {
    expect(contrato).toBeTruthy();
  });

});
