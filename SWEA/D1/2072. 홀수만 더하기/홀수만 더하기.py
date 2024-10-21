T = int(input())

for test_case in range(1, T + 1):
    array = list(map(int, input().split()))
    num = 0
    for i in range(len(array)):
        if array[i]%2 != 0:
            num+=array[i]
    print(f'#{test_case} {num}')
