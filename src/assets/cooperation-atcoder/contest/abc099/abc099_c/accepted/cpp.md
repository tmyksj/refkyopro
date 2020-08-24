# AtCoder Beginner Contest 099
## C - Strange Bank
```cpp
#include <iostream>
#include <queue>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> memo(n + 1, 1000000000);
    memo[0] = 0;

    queue<int> que;
    que.push(0);
    que.push(-1);

    while (true) {
        int cur = que.front();
        que.pop();

        if (cur == n) {
            break;
        } else if (cur >= 0) {
            if (memo[cur + 1] > memo[cur] + 1) {
                memo[cur + 1] = memo[cur] + 1;
                que.push(cur + 1);
            }

            for (long long i = 6; cur + i <= n; i *= 6) {
                if (memo[cur + i] > memo[cur] + 1) {
                    memo[cur + i] = memo[cur] + 1;
                    que.push(cur + i);
                }
            }

            for (long long i = 9; cur + i <= n; i *= 9) {
                if (memo[cur + i] > memo[cur] + 1) {
                    memo[cur + i] = memo[cur] + 1;
                    que.push(cur + i);
                }
            }
        } else {
            que.push(-1);
        }
    }

    cout << memo[n] << endl;
}
```
