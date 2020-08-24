# AtCoder Beginner Contest 154
## E - Almost Everywhere Zero
```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

long long dfs_0(string, int, int, int, vector<vector<long long>>&, vector<vector<long long>>&);
long long dfs_1(string, int, int, int, vector<vector<long long>>&, vector<vector<long long>>&);

long long dfs_0(string n, int k, int i, int cnz,
        vector<vector<long long>>& dp0, vector<vector<long long>>& dp1) {
    if (i == static_cast<int>(n.size())) {
        if (cnz == k) {
            return 1;
        } else {
            return 0;
        }
    } else if (cnz > k) {
        return 0;
    }

    if (dp0[i][cnz] >= 0) {
        return dp0[i][cnz];
    }

    long long r = 0;
    if (n[i] == '0') {
        r += dfs_0(n, k, i + 1, cnz, dp0, dp1);
    } else if (n[i] == '1') {
        r += dfs_1(n, k, i + 1, cnz, dp0, dp1);
        r += dfs_0(n, k, i + 1, cnz + 1, dp0, dp1);
    } else if (n[i] > '1') {
        r += dfs_1(n, k, i + 1, cnz, dp0, dp1);
        r += (n[i] - '1') * dfs_1(n, k, i + 1, cnz + 1, dp0, dp1);
        r += dfs_0(n, k, i + 1, cnz + 1, dp0, dp1);
    }

    dp0[i][cnz] = r;
    return r;
}

long long dfs_1(string n, int k, int i, int cnz,
        vector<vector<long long>>& dp0, vector<vector<long long>>& dp1) {
    if (i == static_cast<int>(n.size())) {
        if (cnz == k) {
            return 1;
        } else {
            return 0;
        }
    } else if (cnz > k) {
        return 0;
    }

    if (dp1[i][cnz] >= 0) {
        return dp1[i][cnz];
    }

    long long r = 0;
    r += dfs_1(n, k, i + 1, cnz, dp0, dp1);
    r += 9 * dfs_1(n, k, i + 1, cnz + 1, dp0, dp1);

    dp1[i][cnz] = r;
    return r;
}

long long dfs(string n, int k) {
    vector<vector<long long>> dp0(n.size(), vector<long long>(k + 1, -1));
    vector<vector<long long>> dp1(n.size(), vector<long long>(k + 1, -1));
    return dfs_0(n, k, 0, 0, dp0, dp1);
}

int main() {
    string n;
    int k;
    cin >> n >> k;
    cout << dfs(n, k) << endl;
}
```
