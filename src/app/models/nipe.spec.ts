import { Nipe } from './nipe';

describe('Nipe', () => {

  let nipe: Nipe;

  beforeEach(() => {
    nipe = new Nipe(
      'Nipe de teste',
      'branco',
    );
  });

  it('should create an instance', () => {
    expect(nipe).toBeTruthy();
  });

});
