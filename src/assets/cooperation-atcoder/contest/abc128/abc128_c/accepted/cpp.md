# AtCoder Beginner Contest 128
## C - Switches
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    vector<int> k(m);
    vector<vector<int>> s(m, vector<int>(0));
    for (int i = 0; i < m; i++) {
        cin >> k[i];
        for (int j = 0; j < k[i]; j++) {
            int sij;
            cin >> sij;
            s[i].push_back(sij - 1);
        }
    }

    vector<int> p(m);
    for (int i = 0; i < m; i++) {
        cin >> p[i];
    }

    int cnt = 0;
    for (int i = 0; i < (1 << n); i++) {
        vector<int> light(m, 0);
        for (int j = 0; j < m; j++) {
            for (int kk = 0; kk < k[j]; kk++) {
                if (((1 << s[j][kk]) & i) > 0) {
                    light[j]++;
                }
            }
        }

        bool flag = true;
        for (int j = 0; j < m; j++) {
            if (p[j] != light[j] % 2) {
                flag = false;
            }
        }

        if (flag) {
            cnt++;
        }
    }

    cout << cnt << endl;
}
```
