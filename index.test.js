const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

describe('index.html', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    })

    describe('testing form', () => {
        test("This is testing if form exists", () => {
            const formExists = document.querySelector("#form");
            expect(formExists).toBeTruthy();

        })
    })
})
