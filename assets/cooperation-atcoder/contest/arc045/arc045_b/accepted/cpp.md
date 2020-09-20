# AtCoder Regular Contest 045
## B - ドキドキデート大作戦高橋君
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    vector<int> s(m), t(m);
    for (int i = 0; i < m; i++) {
        cin >> s[i] >> t[i];
    }

    vector<int> u(n + 1, 0);
    for (int i = 0; i < m; i++) {
        u[s[i] - 1]++;
        u[t[i]]--;
    }

    for (int i = 0; i < n; i++) {
        u[i + 1] += u[i];
    }

    vector<int> v(0);
    for (int i = 0; i < n; i++) {
        if (u[i] == 1) {
            v.push_back(i);
        }
    }

    vector<int> res(0);
    for (int i = 0; i < m; i++) {
        vector<int>::iterator j = lower_bound(v.begin(), v.end(), s[i] - 1);
        if (j == v.end() || *j >= t[i]) {
            res.push_back(i + 1);
        }
    }

    cout << res.size() << endl;
    for (int i = 0; i < static_cast<int>(res.size()); i++) {
        cout << res[i] << endl;
    }
}
```
