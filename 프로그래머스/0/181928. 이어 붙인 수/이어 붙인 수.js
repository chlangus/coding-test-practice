function solution(num_list) {
    let odd = '';
    let even = '';
    num_list.forEach((item)=>{
        item % 2 === 0 ? even += item : odd += item;
    })
    
    return +odd + +even;
}