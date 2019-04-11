import {add} from "./index";

describe("add", () => {

    it("can add two numbers", () =>  {
        expect(add(2, 2)).toEqual(4);
    });

});
