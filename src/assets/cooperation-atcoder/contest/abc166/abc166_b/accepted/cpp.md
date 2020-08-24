# AtCoder Beginner Contest 166
## B - Trick or Treat
```cpp
#include <iostream>
#include <set>
#include <vector>

using namespace std;

int main() {
    int n, k;
    cin >> n >> k;

    vector<set<int>> s(n, set<int>());
    for (int i = 0; i < k; i++) {
        int d;
        cin >> d;

        for (int j = 0; j < d; j++) {
            int a;
            cin >> a;
            s[a - 1].insert(i);
        }
    }

    int res = 0;
    for (int i = 0; i < n; i++) {
        if (s[i].size() == 0) {
            res++;
        }
    }

    cout << res << endl;
}
```
