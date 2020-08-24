# AtCoder Beginner Contest 075
## B - Minesweeper
```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    int h, w;
    cin >> h >> w;

    vector<vector<char>> field(h + 2, vector<char>(w + 2, '.'));
    for (int i = 1; i <= h; i++) {
        string s;
        cin >> s;

        for (int j = 1; j <= w; j++) {
            field[i][j] = s[j - 1];
        }
    }

    vector<vector<int>> grid(h + 2, vector<int>(w + 2, 0));
    for (int i = 1; i <= h; i++) {
        for (int j = 1; j <= w; j++) {
            int dy[] = { -1, -1, -1, 0, 0, 1, 1, 1 };
            int dx[] = { -1, 0, 1, -1, 1, -1, 0, 1 };

            for (int k = 0; k < 8; k++) {
                if (field[i + dy[k]][j + dx[k]] == '#') {
                    grid[i][j]++;
                }
            }
        }
    }

    for (int i = 1; i <= h; i++) {
        for (int j = 1; j <= w; j++) {
            if (field[i][j] == '#') {
                cout << '#';
            } else {
                cout << grid[i][j];
            }
        }
        cout << endl;
    }
}
```
