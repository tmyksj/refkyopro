# AtCoder Beginner Contest 025
## C - 双子と○×ゲーム
```cpp
#include <iostream>
#include <utility>
#include <vector>

using namespace std;

pair<int, int> dfs(vector<vector<int>>& b, vector<vector<int>>& c, vector<vector<int>>& board, int idx) {
    pair<int, int> res = make_pair(0, 0);

    if (idx == 9) {
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 3; j++) {
                if (board[i][j] == board[i + 1][j]) {
                    res.first += b[i][j];
                } else {
                    res.second += b[i][j];
                }
            }
        }

        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 2; j++) {
                if (board[i][j] == board[i][j + 1]) {
                    res.first += c[i][j];
                } else {
                    res.second += c[i][j];
                }
            }
        }
    } else {
        if (idx % 2 == 0) {
            res.second = 1000000000;
        } else {
            res.first = 1000000000;
        }

        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                if (board[i][j] == 0) {
                    board[i][j] = (idx % 2 == 0 ? 1 : -1);

                    pair<int, int> r = dfs(b, c, board, idx + 1);
                    if (idx % 2 == 0 && res.first - res.second < r.first - r.second) {
                        res = r;
                    } else if (idx % 2 == 1 && res.first - res.second > r.first - r.second) {
                        res = r;
                    }

                    board[i][j] = 0;
                }
            }
        }
    }

    return res;
}

int main() {
    vector<vector<int>> b(2, vector<int>(3, 0)), c(3, vector<int>(2, 0));
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 3; j++) {
            cin >> b[i][j];
        }
    }
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 2; j++) {
            cin >> c[i][j];
        }
    }

    vector<vector<int>> board(3, vector<int>(3, 0));
    pair<int, int> res = dfs(b, c, board, 0);

    cout << res.first << endl;
    cout << res.second << endl;
}
```
