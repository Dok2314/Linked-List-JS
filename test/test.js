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

    prepend(value) {
        const newNode = new LinkedListNode(value, this.head);

        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }

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

    find(value) {
        if (!this.head) {
            return null;
        }

        let currentNode = this.head;

        while (currentNode) {

            if (currentNode.value === value) {
                return currentNode;
            }

            currentNode = currentNode.next;
        }

        return null;
    }

    delete(value) {
        if (!this.head) return null;

        let deletedNode = null;

        while (this.head && this.head.value === value) {
            deletedNode = this.head;

            this.head = this.head.next;
        }

        let currentNode = this.head;

        if (currentNode !== null) {
            while (currentNode.next) {
                if (currentNode.next.value === value) {
                    deletedNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                } else {
                    currentNode = currentNode.next;
                }
            }
        }

        if (this.tail?.value === value) {
            this.tail = currentNode;
        }

        return deletedNode;
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

    it('Prepend', () => {
        let list = init();

        expect(list.prepend('x').toString()).to.equal('x,a,b,c,d');
        expect(list.head.value).to.equal('x');
        expect(list.tail.value).to.equal('d');
    });

    it('Find', () => {
        let list = init();

        expect(list.find('d').toString()).to.equal('d');
        expect(list.find('x')).to.equal(null);
    });

    it('Delete', () => {
       let list = init();

       list.append('a');
       expect(list.delete('a').toString()).to.equal('a');

       expect(list.toString()).to.equal('b,c,d');
       expect(list.head.value).to.equal('b');
       expect(list.tail.value).to.equal('d');
    });
});
