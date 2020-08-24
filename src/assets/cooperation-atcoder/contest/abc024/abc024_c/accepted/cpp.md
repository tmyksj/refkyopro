# AtCoder Beginner Contest 024
## C - 民族大移動
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, d, k;
    cin >> n >> d >> k;

    vector<int> l(d), r(d);
    for (int i = 0; i < d; i++) {
        cin >> l[i] >> r[i];
    }

    for (int i = 0; i < k; i++) {
        int s, t;
        cin >> s >> t;

        int res = 0;
        for (int j = 0, jl = s, jr = s; j < d; j++) {
            if (jl <= t && t <= jr) {
                break;
            }

            if (jl <= r[j] && l[j] <= jr) {
                jl = min(jl, l[j]);
                jr = max(jr, r[j]);
            }

            res++;
        }

        cout << res << endl;
    }
}
```
