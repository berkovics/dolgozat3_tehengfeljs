// input.spec.js
// Berkovics Gellért, 2023-05-18, Szoft I/1/N
// https://github.com/berkovics/dolgozat3_tehengfeljs.git

describe('Bemenet input ellenőrzése', () => {
    it('21 szám inputként akkor igaz', () => {
        let act = isGoodInput(21);
        expect(act).toBe(true);
    });

    it('abc betű inputként akkor hamis', () => {
        let act = isGoodInput('abc');
        expect(act).toBe(false);
    });
});