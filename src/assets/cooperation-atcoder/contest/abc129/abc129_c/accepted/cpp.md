# AtCoder Beginner Contest 129
## C - Typical Stairs
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    vector<int> step(n + 2, 0);
    for (int i = 0; i < m; i++) {
        int a;
        cin >> a;
        step[a] = -1;
    }

    step[0] = 1;
    for (int i = 0; i < n; i++) {
        if (step[i] == -1) {
            continue;
        }

        if (step[i + 1] != -1) {
            step[i + 1] = (step[i + 1] + step[i]) % 1000000007;
        }
        if (step[i + 2] != -1) {
            step[i + 2] = (step[i + 2] + step[i]) % 1000000007;
        }
    }

    cout << step[n] << endl;
}
```
