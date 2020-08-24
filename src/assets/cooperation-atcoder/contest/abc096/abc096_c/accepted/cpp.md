# AtCoder Beginner Contest 096
## C - Grid Repainting 2
```cpp
#include <iostream>
#include <vector>
#include <string>

using namespace std;

int main() {
    int h, w;
    cin >> h >> w;

    vector<vector<char>> s(h + 2, vector<char>(w + 2, '.'));
    for (int i = 1; i <= h; i++) {
        string si;
        cin >> si;

        for (int j = 1; j <= w; j++) {
            s[i][j] = si[j - 1];
        }
    }

    int dx[] = { 0, -1, 1, 0 };
    int dy[] = { -1, 0, 0, 1 };

    bool flag = true;
    for (int i = 1; i <= h; i++) {
        for (int j = 1; j <= w; j++) {
            if (s[i][j] == '#') {
                for (int k = 0; k < 4 && s[i + dy[k]][j + dx[k]] == '.'; k++) {
                    if (k == 3) {
                        flag = false;
                    }
                }
            }
        }
    }

    cout << (flag ? "Yes" : "No") << endl;
}
```
