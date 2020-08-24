# AtCoder Beginner Contest 106
## D - AtCoder Express 2
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, m, q;
    cin >> n >> m >> q;

    vector<vector<int>> arr(n, vector<int>(n, 0));
    for (int i = 0; i < m; i++) {
        int l, r;
        cin >> l >> r;
        arr[l - 1][r - 1]++;
    }

    for (int i = n - 1; i > 0; i--) {
        for (int j = 0; j < n; j++) {
            arr[i - 1][j] += arr[i][j];
        }
    }

    for (int i = 0; i < n; i++) {
        for (int j = 1; j < n; j++) {
            arr[i][j] += arr[i][j - 1];
        }
    }

    for (int i = 0; i < q; i++) {
        int pi, qi;
        cin >> pi >> qi;
        cout << arr[pi - 1][qi - 1] << endl;
    }
}
```
