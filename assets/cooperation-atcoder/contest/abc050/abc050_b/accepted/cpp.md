# AtCoder Beginner Contest 050
## B - Contest with Drinks Easy
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> t(n);
    for (int i = 0; i < n; i++) {
        cin >> t[i];
    }

    int m;
    cin >> m;

    for (int i = 0; i < m; i++) {
        int p, x;
        cin >> p >> x;

        int res = 0;
        for (int j = 0; j < n; j++) {
            res += (j == p - 1 ? x : t[j]);
        }

        cout << res << endl;
    }
}
```
