import { LinkedList } from '../linked-list.js';
import { describe, it } from 'mocha';
import { expect } from 'chai';

function init() {
    const list = new LinkedList();

    list
        .append('a')
        .append('b')
        .append('c')
        .append('d');

    return list;
}

describe('Linked List', () => {
    it('Append', () => {
        let list = init();
        list.append('x');
        expect(list.toString()).to.equal('a,b,c,d,x');
        expect(list.head.value).to.equal('a');
        expect(list.tail.value).to.equal('x');
    });
});
