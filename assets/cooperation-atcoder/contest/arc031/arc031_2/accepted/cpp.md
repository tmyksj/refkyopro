# AtCoder Regular Contest 031
## B - 埋め立て
```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int dfs(int n, vector<vector<int>>& b, vector<vector<int>>& c, int i, int j, int s) {
    if ((b[i][j] == 0 || c[i][j] == 1) && s == 0) {
        return 0;
    }

    c[i][j] = 1;

    int dy[] = { -1, 0, 0, 1 };
    int dx[] = { 0, -1, 1, 0 };

    int r = b[i][j];
    for (int k = 0; k < 4; k++) {
        r += dfs(n, b, c, i + dy[k], j + dx[k], 0);
    }

    return r;
}

int main() {
    int n = 10;

    vector<string> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    vector<vector<int>> b(n + 2, vector<int>(n + 2, 0));
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n; j++) {
            if (a[i - 1][j - 1] == 'o') {
                b[i][j] = 1;
            }
        }
    }

    int s = 0;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n; j++) {
            s += b[i][j];
        }
    }

    bool res = false;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n; j++) {
            vector<vector<int>> c(n + 2, vector<int>(n + 2, 0));
            if (dfs(n, b, c, i, j, 1) == s) {
                res = true;
            }
        }
    }

    cout << (res ? "YES" : "NO") << endl;
}
```
