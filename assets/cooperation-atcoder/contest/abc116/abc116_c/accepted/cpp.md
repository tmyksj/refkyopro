# AtCoder Beginner Contest 116
## C - Grand Garden
```cpp
#include <iostream>
#include <vector>

using namespace std;

int solve(vector<int>& h, int l, int r) {
    int min = 100;
    for (int i = l; i < r; i++) {
        if (min > h[i]) {
            min = h[i];
        }
    }

    for (int i = l; i < r; i++) {
        h[i] -= min;
    }

    int cnt = min;
    for (int i = l; i < r; i++) {
        if (h[i] > 0) {
            for (int j = i + 1; j <= r; j++) {
                if (j == r || h[j] == 0) {
                    cnt += solve(h, i, j);
                    i = j - 1;
                    break;
                }
            }
        }
    }

    return cnt;
}

int main() {
    int n;
    cin >> n;

    vector<int> h(n);
    for (int i = 0; i < n; i++) {
        cin >> h[i];
    }

    cout << solve(h, 0, n) << endl;
}
```
