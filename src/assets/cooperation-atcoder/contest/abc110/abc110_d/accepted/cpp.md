# AtCoder Beginner Contest 110
## D - Factorization
```cpp
#include <iostream>
#include <list>
#include <vector>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    if (m == 1) {
        cout << "1" << endl;
    } else {
        list<pair<int, int>> prime;
        int d = 0;

        for (int i = 2, mm = m; mm > 1; i++) {
            if (mm % i == 0) {
                pair<int, int> p = make_pair(i, 0);

                while (mm % i == 0) {
                    p.second++;
                    mm /= i;
                }

                prime.push_back(p);

                if (d < p.second) {
                    d = p.second;
                }
            }
        }

        vector<vector<long long>> dp(d, vector<long long>(n, 0));
        dp[0][0] = 1;

        for (int i = 0; i < d; i++) {
            for (int j = 0; j < n; j++) {
                if (i < d - 1) {
                    dp[i + 1][j] += dp[i][j];
                    dp[i + 1][j] %= 1000000007;
                }

                if (j < n - 1) {
                    dp[i][j + 1] += dp[i][j];
                    dp[i][j + 1] %= 1000000007;
                }
            }
        }

        vector<long long> cmb(d, 0);

        for (int i = 0; i < d; i++) {
            for (int j = 0; j < n; j++) {
                cmb[i] += dp[i][j];
                cmb[i] %= 1000000007;
            }
        }

        long long res = 1;

        for (list<pair<int, int>>::iterator i = prime.begin(); i != prime.end(); i++) {
            res *= cmb[i->second - 1];
            res %= 1000000007;
        }

        cout << res << endl;
    }
}
```
