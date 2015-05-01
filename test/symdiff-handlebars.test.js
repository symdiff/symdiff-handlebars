var extract = require('../index');

describe('symdiff-handlebars', function() {
    it('should work with empty handlebars', function() {
        var result = extract('');
        expect(result.length).to.equal(0);
    });

    it('should extract a class', function() {
        var testHbs = '{{#if design}}<div class="grid"></div>{{/if}}',
            result = extract(testHbs);

        expect(result.length).to.equal(1);
        expect(result[0]).to.equal('grid');
    });

    it('should extract multiple classes', function() {
        var testHbs = '<div class="grid {{#if col}}grid-col{{/if}}"></div>',
            result = extract(testHbs);

        expect(result.length).to.equal(2);
        expect(result[0]).to.equal('grid');
        expect(result[1]).to.equal('grid-col');
    });

    it('should extract nothing when there are no classes', function() {
        var testHbs = '<script src="./test.js" />',
            result = extract(testHbs);

        expect(result.length).to.equal(0);
    });
});