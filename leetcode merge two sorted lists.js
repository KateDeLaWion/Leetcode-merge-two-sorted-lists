var mergeTwoLists = function(list1, list2) {
    let pointer=new ListNode();
    let merge=pointer;
    while(list1 && list2){
    if(list1.val<list2.val){
    pointer.next=list1;
    pointer=pointer.next;
    list1=list1.next;
    } else {
    pointer.next=list2;
    pointer=pointer.next;
    list2=list2.next;
    }
}
    if(list1){
    pointer.next=list1;
    }
    if(list2){
    pointer.next=list2;
    }
    return merge.next;
};