function solution(num_list) {
    let multiple = 1;
    let plus = 0;
    num_list.forEach((item)=> {
        multiple *= item;
        plus += item;
    })
    return multiple < plus**2 ? 1 : 0;
}