import 'mocha';
import {assert} from 'chai';
import ToggleHighlight from "../src/HelloWorld";
import HelloWorld from "../src/HelloWorld";

let subject: HelloWorld = null;

describe("HelloWorld", () => {
    before(async () => {
        subject = new HelloWorld();
    });

    describe("Empty input", () => {
        it("Returns a standard greeting", () => {
            const result = subject.greet("");
            assert.equal(result, "Hello World!");
        });
    });

    describe("Name input", () => {
        it("Returns a personalized greeting", () => {
            const result = subject.greet("Obsidian User");
            assert.equal(result, "Hello World, Obsidian User!");
        });
    });

});
