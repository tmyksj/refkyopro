# AtCoder Beginner Contest 018
## C - 菱型カウント
```cpp
#include <algorithm>
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    int r, c, k;
    cin >> r >> c >> k;

    vector<string> s(r);
    for (int i = 0; i < r; i++) {
        cin >> s[i];
    }

    vector<vector<int>> lr(r + 2, vector<int>(c + 2, 0)), rl(r + 2, vector<int>(c + 2, 0));
    for (int i = 1; i <= r; i++) {
        for (int j = 1; j <= c; j++) {
            lr[i][j] = (s[i - 1][j - 1] == 'o' ? 1 : 0);
            rl[i][j] = (s[i - 1][j - 1] == 'o' ? 1 : 0);
        }
    }
    for (int i = 0; i < r + c - 1; i++) {
        for (int y = min(i + 1, r), x = max(0, i + 1 - r); y >= 1 && x <= c; y--, x++) {
            if (lr[y][x] == 1) {
                lr[y][x] += lr[y + 1][x - 1];
            }
        }
        for (int y = min(i + 1, r), x = min(c, r + c - i - 1); y >= 1 && x >= 1; y--, x--) {
            if (rl[y][x] == 1) {
                rl[y][x] += rl[y + 1][x + 1];
            }
        }
    }

    vector<vector<int>> cnt(r + 2, vector<int>(c + 2, 0));
    for (int i = 1; i <= r; i++) {
        for (int j = 1; j <= c; j++) {
            if (lr[i][j] > 0) {
                cnt[i][j]++;
                for (int l = 1; 1 <= i - l && i + l <= r && 1 <= j - l && j + l <= c; l++) {
                    if (lr[i - l][j] - lr[i + 1][j - l - 1] == l + 1
                            && lr[i][j + l] - lr[i + l + 1][j - 1] == l + 1
                            && rl[i - l][j] - rl[i + 1][j + l + 1] == l + 1
                            && rl[i][j - l] - rl[i + l + 1][j + 1] == l + 1) {
                        cnt[i][j]++;
                    } else {
                        break;
                    }
                }
            }
        }
    }

    int res = 0;
    for (int i = 1; i <= r; i++) {
        for (int j = 1; j <= c; j++) {
            if (cnt[i][j] >= k) {
                res++;
            }
        }
    }

    cout << res << endl;
}
```
