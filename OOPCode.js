class ListNode {
    val;
    next;
    constructor(val , next = null){
        this.val= val;
        this.next= next;
    }
}
class TestClass{
    head;
    constructor(head = null){
        this.head=head;
    }
    hasLast(){
        return this.head != null;
    }
    getLast(){
        if(!this.hasLast()){
            return null;
        }
        let current = this.head;
        while(current.next!=null){
            current= current.next;
        }
        let finalValue = current.val;
        current = this.head;
        while(current.next.next !== null && current.next.next !== null){
            current = current.next;
        }
        current.next.next = null;
        return finalValue;
    }
}
let myMvariable = new TestClass(
    new ListNode(1,new ListNode(2,new ListNode(3, new ListNode(4, new ListNode(5)))))
);
console.log(myMvariable.getLast());
console.log(myMvariable.getLast());
console.log(myMvariable.getLast());
console.log(myMvariable.getLast());
console.log(myMvariable.getLast());
console.log(myMvariable.getLast()); 

