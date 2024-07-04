import { describe, it } from 'mocha';
import { expect } from 'chai';

class LinkedListNode {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }

    toString() {
        return `${this.value}`;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    prepend(value) {
        const newNode = new LinkedListNode(value);

        if (!this.head) {
            this.head = newNode;
            return this;
        }

        this.head.value = newNode;
        return this;
    }

    append(value) {
        const newNode = new LinkedListNode(value);

        if (!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }

        this.tail.next = newNode;
        this.tail = newNode;

        return this;
    }

    toArray() {
        const nodes = [];
        let currentNode = this.head;

        while (currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }

        return nodes;
    }

    toString() {
        return this.toArray().map(node => node.toString()).toString();
    }
}

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
