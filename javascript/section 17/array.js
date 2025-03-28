//push(),pop() array의 맨 끝에 있는 요소를 추가, 제거하는 함수
//shift(),unshift array의 맨 처음요소를 제거, 추가하는 함수.
//unshift가 추가, shift가 제거임!!!!!!!

//slice(시작, 끝) -> 시작은 포함, 끝은 미포함.
//splice(시작, 제거할 갯수)
//splice(시작,0,'삽입할 내용') 
// ex)colors.splice(1,0,'red-orange') ->colors[1] 자리에 'red-orange'삽입됨.
//만약 slice함수 실행후 splice[(n,0,' ')한정] 함수를 실행하면, 기존 array에 splice 함수가 실행된 결과가 나옴.
//slice 함수 실행은 just return the set of the element.
//요소 삭제를 원한다면 splice(n,n) 적용
//sort는 크기에 따라 오름차순으로 요소들을 정렬해줌.


//배열을 비교하려면 같은 메모리를 참조 하고 있는지를 확인해야함
//내용은 바뀌어도 상관없지만, 한 변수가 새로운 곳을 참조할 수는 없다.
//일반적인 경우 배열은 const로 선언하기 때문. let으로 선언할 경우 상관없는듯.

