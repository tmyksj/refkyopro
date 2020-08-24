# AtCoder Beginner Contest 150
## C - Count Order
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> p(n);
    for (int i = 0; i < n; i++) {
        cin >> p[i];
    }

    vector<int> q(n);
    for (int i = 0; i < n; i++) {
        cin >> q[i];
    }

    vector<int> r(n);
    for (int i = 0; i < n; i++) {
        r[i] = i + 1;
    }

    int idx = 0, p_idx, q_idx;
    do {
        bool r_eq = true;
        for (int i = 0; i < n; i++) {
            if (p[i] != r[i]) {
                r_eq = false;
            }
        }
        if (r_eq) {
            p_idx = idx;
        }

        bool q_eq = true;
        for (int i = 0; i < n; i++) {
            if (q[i] != r[i]) {
                q_eq = false;
            }
        }
        if (q_eq) {
            q_idx = idx;
        }

        idx++;
    } while (next_permutation(r.begin(), r.end()));

    cout << (p_idx > q_idx ? p_idx - q_idx : q_idx - p_idx) << endl;
}
```
