# AtCoder Regular Contest 041
## B - アメーバ
```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    vector<vector<int>> b(n, vector<int>(m));
    for (int i = 0; i < n; i++) {
        string s;
        cin >> s;

        for (int j = 0; j < m; j++) {
            b[i][j] = s[j] - '0';
        }
    }

    vector<vector<int>> a(n, vector<int>(m, 0));
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            if (b[i][j] > 0) {
                a[i + 1][j] = b[i][j];
                b[i + 1][j - 1] -= b[i][j];
                b[i + 1][j + 1] -= b[i][j];
                b[i + 2][j] -= b[i][j];
            }
        }
    }

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            cout << a[i][j];
        }
        cout << endl;
    }
}
```
