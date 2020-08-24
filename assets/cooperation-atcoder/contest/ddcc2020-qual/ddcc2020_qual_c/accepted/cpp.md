# DISCO presents ディスカバリーチャンネル コードコンテスト2020 予選
## C - Strawberry Cakes
```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    int h, w, k;
    cin >> h >> w >> k;

    vector<string> s(h);
    for (int i = 0; i < h; i++) {
        cin >> s[i];
    }

    vector<vector<int>> res(h, vector<int>(w, -1));
    for (int i = 0, r = 1; i < h; i++) {
        for (int j = 0; j < w; j++) {
            if (s[i][j] == '#') {
                res[i][j] = r;
                r++;
            }
        }
    }
    for (int i = 0; i < h; i++) {
        for (int j = 1; j < w; j++) {
            if (res[i][j] == -1) {
                res[i][j] = res[i][j - 1];
            }
        }
        for (int j = w - 2; j >= 0; j--) {
            if (res[i][j] == -1) {
                res[i][j] = res[i][j + 1];
            }
        }
    }
    for (int i = 0; i < w; i++) {
        for (int j = 1; j < h; j++) {
            if (res[j][i] == -1) {
                res[j][i] = res[j - 1][i];
            }
        }
        for (int j = h - 2; j >= 0; j--) {
            if (res[j][i] == -1) {
                res[j][i] = res[j + 1][i];
            }
        }
    }

    for (int i = 0; i < h; i++) {
        for (int j = 0; j < w; j++) {
            cout << (j == 0 ? "" : " ") << res[i][j];
        }
        cout << endl;
    }
}
```
