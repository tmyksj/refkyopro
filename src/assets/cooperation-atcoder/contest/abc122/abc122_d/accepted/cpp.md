# AtCoder Beginner Contest 122
## D - We Like AGC
```cpp
#include <iostream>
#include <map>
#include <vector>
#include <string>

using namespace std;

int main() {
    vector<string> idx2key(0);
    map<string, int> key2idx;
    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 4; j++) {
            for (int k = 0; k < 4; k++) {
                idx2key.push_back({ "ACGT"[i], "ACGT"[j], "ACGT"[k] });
                key2idx[{ "ACGT"[i], "ACGT"[j], "ACGT"[k] }] = idx2key.size() - 1;
            }
        }
    }

    int n;
    cin >> n;

    vector<vector<int>> dp(n + 1, vector<int>(idx2key.size(), 0));
    for (int i = 0; i < static_cast<int>(idx2key.size()); i++) {
        if (idx2key[i] != "AGC" && idx2key[i] != "GAC" && idx2key[i] != "ACG") {
            dp[3][i] = 1;
        }
    }

    for (int i = 3; i < n; i++) {
        for (int j = 0; j < static_cast<int>(idx2key.size()); j++) {
            string key = idx2key[j];

            dp[i + 1][key2idx[{ key[1], key[2], 'A' }]] =
                (dp[i + 1][key2idx[{ key[1], key[2], 'A' }]] + dp[i][j]) % 1000000007;
            if ((key[1] != 'A' || key[2] != 'G')
                && (key[1] != 'G' || key[2] != 'A')
                && (key[0] != 'A' || key[2] != 'G')
                && (key[0] != 'A' || key[1] != 'G')) {
                dp[i + 1][key2idx[{ key[1], key[2], 'C' }]] =
                    (dp[i + 1][key2idx[{ key[1], key[2], 'C' }]] + dp[i][j]) % 1000000007;
            }
            if (key[1] != 'A' || key[2] != 'C') {
                dp[i + 1][key2idx[{ key[1], key[2], 'G' }]] =
                    (dp[i + 1][key2idx[{ key[1], key[2], 'G' }]] + dp[i][j]) % 1000000007;
            }
            dp[i + 1][key2idx[{ key[1], key[2], 'T' }]] =
                (dp[i + 1][key2idx[{ key[1], key[2], 'T' }]] + dp[i][j]) % 1000000007;
        }
    }

    int cnt = 0;
    for (int i = 0; i < static_cast<int>(idx2key.size()); i++) {
        cnt = (cnt + dp[n][i]) % 1000000007;
    }

    cout << cnt << endl;
}
```
