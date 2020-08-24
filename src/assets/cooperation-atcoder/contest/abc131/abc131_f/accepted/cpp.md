# AtCoder Beginner Contest 131
## F - Must Be Rectangular!
```cpp
#include <algorithm>
#include <iostream>
#include <set>
#include <stack>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> x(n), y(n);
    for (int i = 0; i < n; i++) {
        cin >> x[i] >> y[i];
    }

    int x_max = *max_element(x.begin(), x.end());
    int y_max = *max_element(y.begin(), y.end());

    vector<set<int>> g(x_max + y_max + 2, set<int>());
    for (int i = 0; i < n; i++) {
        g[x[i]].insert(y[i] + x_max + 1);
        g[y[i] + x_max + 1].insert(x[i]);
    }

    long long res = 0;
    for (int i = 0; i <= x_max + y_max + 1; i++) {
        set<int> sx, sy;
        long long ce = 0;

        stack<int> st;
        st.push(i);
        while (!st.empty()) {
            int s = st.top();
            st.pop();

            if (s <= x_max) {
                sx.insert(s);
            } else {
                sy.insert(s);
            }

            while (!g[s].empty()) {
                int t = *g[s].begin();
                g[s].erase(t);
                g[t].erase(s);
                st.push(t);
                ce++;
            }
        }

        if (static_cast<int>(sx.size()) >= 2 && static_cast<int>(sy.size()) >= 2) {
            res += static_cast<long long>(sx.size()) * static_cast<long long>(sy.size()) - ce;
        }
    }

    cout << res << endl;
}
```
