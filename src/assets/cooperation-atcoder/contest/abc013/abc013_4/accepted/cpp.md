# AtCoder Beginner Contest 013
## D - 阿弥陀
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, m, d;
    cin >> n >> m >> d;

    vector<int> a(m);
    for (int i = 0; i < m; i++) {
        cin >> a[i];
        a[i]--;
    }

    vector<int> b(n);
    for (int i = 0; i < n; i++) {
        b[i] = i;
    }
    for (int i = 0; i < m; i++) {
        swap(b[a[i]], b[a[i] + 1]);
    }

    vector<int> p(n, -1), q(n);
    vector<vector<int>> r(0);
    for (int i = 0, j = 0; i < n; i++) {
        if (p[i] == -1) {
            p[i] = j;
            q[i] = 0;
            r.push_back(vector<int>(1, i));

            for (int k = b[i], l = 1; k != i; k = b[k], l++) {
                p[k] = p[i];
                q[k] = l;
                r[p[k]].push_back(k);
            }

            j++;
        }
    }

    vector<int> s(n);
    for (int i = 0; i < n; i++) {
        s[r[p[i]][(d + q[i]) % r[p[i]].size()]] = i;
    }

    for (int i = 0; i < n; i++) {
        cout << s[i] + 1 << endl;
    }
}
```
