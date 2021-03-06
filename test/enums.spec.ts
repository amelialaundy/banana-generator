// Dependencies:
import { create, expect } from './test-setup';

describe('banana-generator - enums:', () => {
    it('should correctly parse information about enums', async () => {
        let banana = create();

        let result = await banana({ in: './test/fixtures/enums/**/*.ts' });
        let [enumFile] = Object.values(result);
        let [testEnum] = enumFile.enums;

        expect(testEnum.name).to.equal('TestEnum');
        expect(testEnum.values).to.deep.equal(['zero', 'one', 'two', 'six']);
    });
});
