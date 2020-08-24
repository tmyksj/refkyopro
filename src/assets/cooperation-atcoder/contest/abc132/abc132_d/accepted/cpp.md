# AtCoder Beginner Contest 132
## D - Blue and Red Balls
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, k;
    cin >> n >> k;

    vector<vector<long long>> nck(n + 1, vector<long long>(n + 1, 0));
    nck[0][0] = 1;
    for (int i = 1; i <= n; i++) {
        nck[i][0] = nck[i][i] = 1;
        for (int j = 1; j < i; j++) {
            nck[i][j] = (nck[i - 1][j - 1] + nck[i - 1][j]) % 1000000007;
        }
    }

    for (int i = 1; i <= k; i++) {
        cout << (nck[n - k + 1][i] % 1000000007) * (nck[k - 1][i - 1] % 1000000007)  % 1000000007 << endl;
    }
}
```
