# AtCoder Beginner Contest 015
## C - 高橋くんのバグ探し
```cpp
#include <iostream>
#include <vector>

using namespace std;

bool solve(int n, int k, vector<vector<int>>& t, int i, int c) {
    if (i == n) {
        return c == 0;
    }

    bool res = false;
    for (int j = 0; j < k; j++) {
        res = res || solve(n, k, t, i + 1, c ^ t[i][j]);
    }

    return res;
}

int main() {
    int n, k;
    cin >> n >> k;

    vector<vector<int>> t(n, vector<int>(k));
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < k; j++) {
            cin >> t[i][j];
        }
    }

    cout << (solve(n, k, t, 0, 0) ? "Found" : "Nothing") << endl;
}
```
