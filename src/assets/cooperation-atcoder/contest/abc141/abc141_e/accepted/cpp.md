# AtCoder Beginner Contest 141
## E - Who Says a Pun?
```cpp
#include <algorithm>
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    int n;
    string s;
    cin >> n >> s;

    int res = 0;
    for (int i = 0; i < n; i++) {
        vector<int> z(n, 0);
        z[i] = n - i;

        for (int zi = 1, zj = 0; i + zi < n; ) {
            while (i + zi + zj < n && s[i + zj] == s[i + zi + zj]) {
                zj++;
            }

            z[i + zi] = zj;
            if (zj == 0) {
                zi++;
                continue;
            }

            int zk = 1;
            while (i + zi + zk < n && zk + z[i + zk] < zj) {
                z[i + zi + zk] = z[i + zk];
                zk++;
            }

            zi += zk;
            zj -= zk;
        }

        for (int j = i + 1; j < n; j++) {
            if (res < min(j - i, z[j])) {
                res = min(j - i, z[j]);
            }
        }
    }

    cout << res << endl;
}
```
