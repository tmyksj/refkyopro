# AtCoder Beginner Contest 093
## C - Same Integers
```cpp
#include <functional>
#include <iostream>
#include <queue>
#include <tuple>
#include <vector>

using namespace std;

int main() {
    int a, b, c;
    cin >> a >> b >> c;

    int n = 100;

    vector<vector<vector<int>>> dp(n + 1, vector<vector<int>>(n + 1, vector<int>(n + 1, 1000000000)));
    dp[a][b][c] = 0;

    priority_queue<tuple<int, int, int, int>,
            vector<tuple<int, int, int, int>>,
            greater<tuple<int, int, int, int>>> que;
    que.push(make_tuple(0, a, b, c));
    while (!que.empty()) {
        tuple<int, int, int, int> t = que.top();
        que.pop();

        int t_a = get<1>(t), t_b = get<2>(t), t_c = get<3>(t);

        if (t_a == t_b && t_b == t_c) {
            cout << dp[t_a][t_b][t_c] << endl;
            break;
        }

        if (t_a + 1 <= n && t_b + 1 <= n && dp[t_a + 1][t_b + 1][t_c] > dp[t_a][t_b][t_c] + 1) {
            dp[t_a + 1][t_b + 1][t_c] = dp[t_a][t_b][t_c] + 1;
            que.push(make_tuple(dp[t_a + 1][t_b + 1][t_c], t_a + 1, t_b + 1, t_c));
        }

        if (t_b + 1 <= n && t_c + 1 <= n && dp[t_a][t_b + 1][t_c + 1] > dp[t_a][t_b][t_c] + 1) {
            dp[t_a][t_b + 1][t_c + 1] = dp[t_a][t_b][t_c] + 1;
            que.push(make_tuple(dp[t_a][t_b + 1][t_c + 1], t_a, t_b + 1, t_c + 1));
        }

        if (t_c + 1 <= n && t_a + 1 <= n && dp[t_a + 1][t_b][t_c + 1] > dp[t_a][t_b][t_c] + 1) {
            dp[t_a + 1][t_b][t_c + 1] = dp[t_a][t_b][t_c] + 1;
            que.push(make_tuple(dp[t_a + 1][t_b][t_c + 1], t_a + 1, t_b, t_c + 1));
        }

        if (t_a + 2 <= n && dp[t_a + 2][t_b][t_c] > dp[t_a][t_b][t_c] + 1) {
            dp[t_a + 2][t_b][t_c] = dp[t_a][t_b][t_c] + 1;
            que.push(make_tuple(dp[t_a + 2][t_b][t_c], t_a + 2, t_b, t_c));
        }

        if (t_b + 2 <= n && dp[t_a][t_b + 2][t_c] > dp[t_a][t_b][t_c] + 1) {
            dp[t_a][t_b + 2][t_c] = dp[t_a][t_b][t_c] + 1;
            que.push(make_tuple(dp[t_a][t_b + 2][t_c], t_a, t_b + 2, t_c));
        }

        if (t_c + 2 <= n && dp[t_a][t_b][t_c + 2] > dp[t_a][t_b][t_c] + 1) {
            dp[t_a][t_b][t_c + 2] = dp[t_a][t_b][t_c] + 1;
            que.push(make_tuple(dp[t_a][t_b][t_c + 2], t_a, t_b, t_c + 2));
        }
    }
}
```
