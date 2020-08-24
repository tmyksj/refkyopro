# AtCoder Beginner Contest 160
## D - Line++
```cpp
#include <iostream>
#include <queue>
#include <vector>

using namespace std;

int main() {
    int n, x, y;
    cin >> n >> x >> y;

    vector<int> res(n, 0);
    for (int i = 0; i < n; i++) {
        vector<int> d(n, n);
        d[i] = 0;

        queue<int> que;
        que.push(i);
        while (!que.empty()) {
            int q = que.front();
            que.pop();

            if (q - 1 >= 0 && d[q - 1] > d[q] + 1) {
                d[q - 1] = d[q] + 1;
                que.push(q - 1);
            }
            if (q + 1 <= n - 1 && d[q + 1] > d[q] + 1) {
                d[q + 1] = d[q] + 1;
                que.push(q + 1);
            }
            if (q == x - 1 && d[y - 1] > d[q] + 1) {
                d[y - 1] = d[q] + 1;
                que.push(y - 1);
            }
            if (q == y - 1 && d[x - 1] > d[q] + 1) {
                d[x - 1] = d[q] + 1;
                que.push(x - 1);
            }
        }

        for (int j = 0; j < n; j++) {
            res[d[j]]++;
        }
    }

    for (int i = 1; i < n; i++) {
        cout << res[i] / 2 << endl;
    }
}
```
