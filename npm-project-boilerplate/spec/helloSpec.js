import { Hello } from '../app/hello.js'
import _ from 'lodash';

describe("Hello", function () {

  describe("creating hello object", function () {
     it("should return hello object when it is called with new", () => {
      var hello = new Hello();
      expect(hello instanceof Object).toBeTruthy();
    })
  })

    describe("greeting works", function(){
      it("should return 'hello name'", function() {
          var greeting = new Hello({firstName:'Joe'}).greeting();
          expect(greeting).toBe('Hello Joe!');
      })
  })
});
