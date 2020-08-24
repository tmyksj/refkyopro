# AtCoder Beginner Contest 157
## B - Bingo
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    vector<vector<int>> a(3, vector<int>(3));
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            cin >> a[i][j];
        }
    }

    int n;
    cin >> n;

    vector<vector<bool>> c(3, vector<bool>(3, false));
    for (int i = 0; i < n; i++) {
        int b;
        cin >> b;

        for (int j = 0; j < 3; j++) {
            for (int k = 0; k < 3; k++) {
                if (a[j][k] == b) {
                    c[j][k] = true;
                }
            }
        }
    }

    bool res = false;
    for (int i = 0; i < 3; i++) {
        res = res || (c[i][0] && c[i][1] && c[i][2]);
        res = res || (c[0][i] && c[1][i] && c[2][i]);
    }

    res = res || (c[0][0] && c[1][1] && c[2][2]);
    res = res || (c[0][2] && c[1][1] && c[2][0]);

    cout << (res ? "Yes" : "No") << endl;
}
```
