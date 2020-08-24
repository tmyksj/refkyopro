# AtCoder Beginner Contest 129
## D - Lamp
```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    int h, w;
    cin >> h >> w;

    vector<vector<int>> map(h + 2, vector<int>(w + 2, -1));
    for (int i = 1; i <= h; i++) {
        string s;
        cin >> s;

        for (int j = 1; j <= w; j++) {
            if (s[j - 1] == '.') {
                map[i][j] = 0;
            }
        }
    }

    vector<vector<int>> row_lr(h + 2, vector<int>(w + 2, -1));
    for (int i = 1; i <= h; i++) {
        for (int j = 1; j <= w; j++) {
            if (map[i][j] == 0) {
                row_lr[i][j] = row_lr[i][j - 1] + 1;
            }
        }
    }

    vector<vector<int>> row_rl(h + 2, vector<int>(w + 2, -1));
    for (int i = 1; i <= h; i++) {
        for (int j = w; j >= 1; j--) {
            if (map[i][j] == 0) {
                row_rl[i][j] = row_rl[i][j + 1] + 1;
            }
        }
    }

    vector<vector<int>> col_tb(h + 2, vector<int>(w + 2, -1));
    for (int i = 1; i <= w; i++) {
        for (int j = 1; j <= h; j++) {
            if (map[j][i] == 0) {
                col_tb[j][i] = col_tb[j - 1][i] + 1;
            }
        }
    }

    vector<vector<int>> col_bt(h + 2, vector<int>(w + 2, -1));
    for (int i = 1; i <= w; i++) {
        for (int j = h; j >= 1; j--) {
            if (map[j][i] == 0) {
                col_bt[j][i] = col_bt[j + 1][i] + 1;
            }
        }
    }

    int max = 0;
    for (int i = 1; i <= h; i++) {
        for (int j = 1; j <= w; j++) {
            if (map[i][j] == 0) {
                int sum = row_lr[i][j] + row_rl[i][j] + col_tb[i][j] + col_bt[i][j] + 1;
                if (max < sum) {
                    max = sum;
                }
            }
        }
    }

    cout << max << endl;
}
```
