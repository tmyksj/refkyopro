# AtCoder Beginner Contest 037
## D - 経路
```cpp
#include <algorithm>
#include <functional>
#include <iostream>
#include <utility>
#include <vector>

using namespace std;

int main() {
    int h, w;
    cin >> h >> w;

    vector<vector<int>> a(h + 2, vector<int>(w + 2, 0));
    for (int i = 1; i <= h; i++) {
        for (int j = 1; j <= w; j++) {
            cin >> a[i][j];
        }
    }

    vector<pair<int, pair<int, int>>> a_sort(h * w);
    for (int i = 1; i <= h; i++) {
        for (int j = 1; j <= w; j++) {
            a_sort[w * (i - 1) + (j - 1)] = make_pair(a[i][j], make_pair(i, j));
        }
    }

    sort(a_sort.begin(), a_sort.end(), greater<pair<int, pair<int, int>>>());

    int dy[] = { -1, 0, 0, 1 };
    int dx[] = { 0, -1, 1, 0 };

    vector<vector<long long>> dp(h + 2, vector<long long>(w + 2, 0));
    for (int i = 0; i < h * w; i++) {
        dp[a_sort[i].second.first][a_sort[i].second.second] = 1;
        for (int j = 0; j < 4; j++) {
            if (a[a_sort[i].second.first][a_sort[i].second.second] <
                    a[a_sort[i].second.first + dy[j]][a_sort[i].second.second + dx[j]]) {
                dp[a_sort[i].second.first][a_sort[i].second.second] +=
                        dp[a_sort[i].second.first + dy[j]][a_sort[i].second.second + dx[j]];
                dp[a_sort[i].second.first][a_sort[i].second.second] %= 1000000007;
            }
        }
    }

    long long res = 0;
    for (int i = 1; i <= h; i++) {
        for (int j = 1; j <= w; j++) {
            res += dp[i][j];
            res %= 1000000007;
        }
    }

    cout << res << endl;
}
```
