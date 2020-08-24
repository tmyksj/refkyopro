# AtCoder Beginner Contest 039
## D - 画像処理高橋君
```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    int h, w;
    cin >> h >> w;

    vector<string> s(h);
    for (int i = 0; i < h; i++) {
        cin >> s[i];
    }

    vector<string> res(h);
    for (int i = 0; i < h; i++) {
        res[i] = s[i];
    }

    int dy[] = { -1, -1, -1, 0, 0, 1, 1, 1 };
    int dx[] = { -1, 0, 1, -1, 1, -1, 0, 1 };

    for (int i = 0; i < h; i++) {
        for (int j = 0; j < w; j++) {
            if (s[i][j] == '.') {
                for (int k = 0; k < 8; k++) {
                    if (0 <= i + dy[k] && i + dy[k] < h
                            && 0 <= j + dx[k] && j + dx[k] < w) {
                        res[i + dy[k]][j + dx[k]] = '.';
                    }
                }
            }
        }
    }

    vector<string> erosion(h);
    for (int i = 0; i < h; i++) {
        erosion[i] = res[i];
    }

    for (int i = 0; i < h; i++) {
        for (int j = 0; j < w; j++) {
            for (int k = 0; k < 8; k++) {
                if (0 <= i + dy[k] && i + dy[k] < h
                        && 0 <= j + dx[k] && j + dx[k] < w
                        && res[i + dy[k]][j + dx[k]] == '#') {
                    erosion[i][j] = '#';
                }
            }
        }
    }

    bool match = true;
    for (int i = 0; i < h; i++) {
        match = match && s[i] == erosion[i];
    }

    if (match) {
        cout << "possible" << endl;
        for (int i = 0; i < h; i++) {
            cout << res[i] << endl;
        }
    } else {
        cout << "impossible" << endl;
    }
}
```
