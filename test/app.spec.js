// app.spec.js
// Berkovics Gellért, 2023-05-18, Szoft I/1/N
// https://github.com/berkovics/dolgozat3_tehengfeljs.git

describe("Henger felszíne", () => {
    it('5 sugár és 10 magasság, felszín: 471.23889803846896', () => {
        let act = calcSurface(5, 10);
        expect(act).toBe(471.23889803846896)
    });

    it('30 sugár és 13 magasság, felszín: 8105.309046261666', () => {
        let act = calcSurface(30, 13);
        expect(act).toBe(8105.309046261666)
    });
})