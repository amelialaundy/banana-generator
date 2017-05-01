// Dependencies:
import { getChecker } from '../get-checker';

export class InputInfo {
    constructor (input, member) {
        this.name = member.name.text;

        let args = input.expression.arguments;
        if (args) {
            let [rename] = args;
            if (rename) {
                this.name = rename.text;
            }
        }

        this.type = getType(member);
        this.twoWay = false;
    }
}

function getType (member) {
    let checker = getChecker();
    let type = checker.getTypeOfSymbolAtLocation(member.symbol, member).intrinsicName;
    if (type === 'unknown') {
        type = member.type.typeName.text;
    }
    return type;
}
